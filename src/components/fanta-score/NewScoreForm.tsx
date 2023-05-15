// components/NewScoreForm.tsx
import React, { useEffect, useState } from 'react';
import { Button, Grid, Card, CardContent, FormControl, InputLabel, Select, MenuItem, Box, Avatar, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { API } from 'aws-amplify';
import { ListFantaRulesQuery, ListGroupsQuery } from '@/API';
import { listFantaRules, listGroups } from '@/graphql/queries';
import { DatePicker } from '@mui/x-date-pickers';
import { format } from 'date-fns';

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  '& .MuiDataGrid-row.Mui-selected': {
    backgroundColor: theme.palette.secondary.light,
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  '& .MuiDataGrid-columnHeaderTitle': {
    fontWeight: 'bold',
  },
  '& .MuiDataGrid-columnHeader:focus': {
    outline: 'none',
  },
  '& .MuiDataGrid-cell': {
    cursor: 'pointer',
    '&:focus': {
      outline: 'none',
    },
  }
}));

const LargeButton: any = styled(Button)(({ theme }) => ({
  padding: '10px 60px', // Aumenta il padding intorno al testo
}));

const NewScoreForm = ({ onCancel, onSave }: any) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [rules, setRules] = useState([]);
  const [selectedRule, setSelectedRule] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState('');
  const [groups, setGroups] = useState([]);

  const columns = [
    {
      field: 'titleAndDescription',
      headerName: 'Title & Description',
      flex: 1,
      renderCell: (params: any) => (
        <div>
          <h4>{params.row.title}</h4>
          <p>{params.row.description}</p>
        </div>
      ),
    },
    {
      field: 'pointDescription',
      headerName: 'Point Description',
      flex: 0.25,
      renderCell: (params: any) => {
        return (
          <p
            style={{
              fontWeight: 'bold',
              marginLeft: '0.5rem'
            }}
          >
            {params.value}
          </p>
        );
      },
    },
  ];

  const fetchGroups = async () => {
    try {
      const groupData = await API.graphql<ListGroupsQuery>({ query: listGroups }) as any;
      const groupItems = groupData.data.listGroups.items;
      setGroups(groupItems);
    } catch (error) {
      console.log('Error fetching grous:', error);
    }
  };

  const fetchRules = async () => {
    try {
      const ruleData = await API.graphql<ListFantaRulesQuery>({ query: listFantaRules }) as any;
      const ruleItems = ruleData.data.listFantaRules.items.sort((a: any, b: any) => b.points - a.points);
      setRules(ruleItems.map((rule: any) => {
        return { ...rule, titleAndDescription: `${rule.title} ${rule.description}` }
      }));
    } catch (error) {
      console.log('Error fetching rules:', error);
    }
  };

  const handleSelectionModelChange = (newSelectionModel: any) => {
    setSelectedRule(newSelectionModel[newSelectionModel.length - 1]);
  };

  const handleDateChange = (date: any) => setSelectedDate(date);

  const handleSelectedGroupChange = (event: any) => {
    setSelectedGroup(event.target.value);
  };

  const handleSubmit = () => {
        onSave({ date: format(selectedDate, 'yyyy-MM-dd'), fantaScoreEntryGroupId: selectedGroup, fantaScoreEntryRuleId: selectedRule });
        setSelectedDate(new Date());
        setSelectedGroup('');
        setSelectedRule(null);
  };

  useEffect(() => {
    fetchGroups();
    fetchRules();
  }, [])

  return (
    <Card variant="elevation">
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <DatePicker
              label="Date"
              value={selectedDate}
              onChange={handleDateChange}
            /* 							slotProps={{
                            popper: {
                              sx: {
                                '& .Mui-selected': {
                                  backgroundColor: 'red',
                                },
                                  '& .MuiPickersDay-daySelected:hover': {
                                  backgroundColor: theme.palette.secondary.main,
                                },
                                '& .MuiPickersDay-today': {
                                  color: theme.palette.secondary.main,
                                },
                              }
                            }
                          }} */
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel id="leader-group-label">Gruppo Leader</InputLabel>
              <Select
                label="Gruppo Leader"
                labelId="leader-group-label"
                value={selectedGroup}
                onChange={handleSelectedGroupChange}
                displayEmpty
                fullWidth
                inputProps={{ 'aria-label': 'Seleziona gruppo leader' }}
              >
                {groups.map((group: any) => (
                  <MenuItem key={group.id} value={group.id}>
                    <Box display="flex">
                      <Avatar
                        sx={{ bgcolor: group.color, width: 16, height: 16, marginRight: 1 }}
                      />
                      <Typography>{group.name}</Typography>
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sx={{ height: 400 }}>
            <StyledDataGrid
              rows={rules}
              columns={columns}
              onRowSelectionModelChange={handleSelectionModelChange}
              rowSelectionModel={selectedRule ? [selectedRule] : []}
              slots={{ toolbar: GridToolbar }}
              slotProps={{
                toolbar: {
                  showQuickFilter: true
                }
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center">
              <LargeButton variant="outlined" color="secondary" onClick={onCancel}>
                Annulla
              </LargeButton>
              <LargeButton variant="contained" color="primary" onClick={handleSubmit} style={{ marginLeft: '40px' }}>
                Salva
              </LargeButton>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default NewScoreForm;