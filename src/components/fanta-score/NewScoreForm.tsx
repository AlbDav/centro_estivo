// components/NewScoreForm.tsx
import React, { useEffect, useState } from 'react';
import { TextField, Button, Grid, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { API } from 'aws-amplify';
import { ListFantaRulesQuery } from '@/API';
import { listFantaRules } from '@/graphql/queries';
import { DatePicker } from '@mui/x-date-pickers';

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

const NewScoreForm = ({ onCancel, onSave }: any) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [points, setPoints] = useState('');
  const [pointDescription, setPointDescription] = useState('');
  const [rules, setRules] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);

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
  ]

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
    setSelectedRow(newSelectionModel[newSelectionModel.length - 1]);
  };

  const handleDateChange = (date: any) => setSelectedDate(date);

  const handleSubmit = () => {
    onSave({ title, description, points: parseInt(points), pointDescription });
    setTitle('');
    setDescription('');
    setPoints('');
    setPointDescription('');
  };

  useEffect(() => {
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
            <TextField label="Description" fullWidth value={description} onChange={(e) => setDescription(e.target.value)} />
          </Grid>
          <Grid item xs={12} sx={{ height: 400 }}>
            <StyledDataGrid
              rows={rules}
              columns={columns}
              onRowSelectionModelChange={handleSelectionModelChange}
              rowSelectionModel={selectedRow ? [selectedRow] : []}
              slots={{ toolbar: GridToolbar }}
              slotProps={{
                toolbar: {
                  showQuickFilter: true
                }
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Points"
              fullWidth
              value={points}
              onChange={(e) => setPoints(e.target.value)}
              type="number"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Point Description"
              fullWidth
              value={pointDescription}
              onChange={(e) => setPointDescription(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Salva
            </Button>
            <Button variant="outlined" color="secondary" onClick={onCancel} style={{ marginLeft: '10px' }}>
              Annulla
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default NewScoreForm;