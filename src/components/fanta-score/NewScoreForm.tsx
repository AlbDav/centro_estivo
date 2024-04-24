// components/NewScoreForm.tsx
import { useEffect, useState } from 'react';
import { Grid, Card, CardContent, FormControl, InputLabel, Select, MenuItem, Box, Typography } from '@mui/material';
import { GridToolbar } from '@mui/x-data-grid';
import { API } from 'aws-amplify';
import { ListFantaRulesQuery, ListGroupsQuery } from '@/API';
import { listFantaRules, listGroups } from '@/graphql/queries';
import { DatePicker } from '@mui/x-date-pickers';
import { format } from 'date-fns';
import LargeButton from '../shared/LargeButton';
import StyledDataGrid from '../shared/StyledDataGrid';
import GroupRespAvatar from '../shared/GroupRespAvatar';

/* const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
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
})); */

const NewScoreForm = ({ onCancel, onSave }: any) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [rules, setRules] = useState([]);
  const [selectedRules, setSelectedRules] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState('');
  const [groups, setGroups] = useState<any>([]);

  const columns = [
    {
      field: 'titleAndDescription',
      headerName: 'Titolo e Descrizione',
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
      headerName: 'Punti',
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
    setSelectedRules(newSelectionModel);
  };

  const handleDateChange = (date: any) => setSelectedDate(date);

  const handleSelectedGroupChange = (event: any) => {
    setSelectedGroup(event.target.value);
  };

  const handleSubmit = () => {
    const date = format(selectedDate, 'yyyy-MM-dd');
    const scoreEntries = selectedRules.map(selectedRule => ({ date, fantaScoreEntryGroupId: selectedGroup, fantaScoreEntryRuleId: selectedRule }));
    onSave(scoreEntries);
    setSelectedDate(new Date());
    setSelectedGroup('');
    setSelectedRules([]);
  };

  const getGroupById = (id: string) => {
    return groups.find((el: any) => el.id === id);
  }

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
              label="Data"
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
              <InputLabel id="leader-group-label">Gruppo</InputLabel>
              <Select
                label="Gruppo"
                labelId="leader-group-label"
                value={selectedGroup}
                onChange={handleSelectedGroupChange}
                displayEmpty
                fullWidth
                inputProps={{ 'aria-label': 'Seleziona gruppo leader' }}
                renderValue={selectedGroup ? () => <Typography>{getGroupById(selectedGroup).name}</Typography> : undefined}
                startAdornment={selectedGroup ? <GroupRespAvatar color={getGroupById(selectedGroup).color} /> : undefined}
              >
                {groups.map((group: any) => (
                  <MenuItem key={group.id} value={group.id}>
                    <Box display="flex">
                      <GroupRespAvatar color={group.color} />
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
              rowSelectionModel={selectedRules}
              checkboxSelection
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