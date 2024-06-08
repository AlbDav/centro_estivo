// components/NewScoreForm.tsx
import { useEffect, useMemo, useState } from 'react';
import { Grid, Card, CardContent, FormControl, InputLabel, Select, MenuItem, Box, Typography, FormControlLabel, Switch } from '@mui/material';
import { GridToolbar } from '@mui/x-data-grid';
import { API } from 'aws-amplify';
import { CreateFantaScoreEntryInput, FantaRule, ListFantaRulesQuery, ListGroupsQuery, ListRespsQuery } from '@/API';
import { listFantaRules, listGroups, listResps } from '@/graphql/queries';
import { DatePicker } from '@mui/x-date-pickers';
import { format } from 'date-fns';
import StyledDataGrid from '../shared/StyledDataGrid';
import GroupRespAvatar from '../shared/GroupRespAvatar';
import CancelSaveButtons from '../shared/CancelSaveButtons';

const NewScoreForm = ({ onCancel, onSave }: any) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [rules, setRules] = useState<FantaRule[]>([]);
  const [selectedRules, setSelectedRules] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState('');
  const [selectedResp, setSelectedResp] = useState('');
  const [groups, setGroups] = useState<any>([]);
  const [resps, setResps] = useState<any>([]);
  const [isResp, setIsResp] = useState(false);

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

  const fetchResps = async () => {
		try {
			const respData = await API.graphql<ListRespsQuery>({ query: listResps }) as any;
			const respItems = respData.data.listResps.items;
			setResps(respItems);
		} catch (error) {
			console.log('Error fetching resps:', error);
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

  const handleRespChange = (event: any) => {
		setSelectedResp(event.target.value);
	};

  const handleSubmit = () => {
    const date = format(selectedDate, 'yyyy-MM-dd');
    const scoreEntries = selectedRules.map(selectedRule => {
      let scoreEntry = { date, fantaScoreEntryRuleId: selectedRule } as CreateFantaScoreEntryInput;
      if (isResp) {
        scoreEntry.fantaScoreEntryRespId = selectedResp;
      } else {
        scoreEntry.fantaScoreEntryGroupId = selectedGroup;
      }
      return scoreEntry;
    });
    onSave(scoreEntries);
    setSelectedDate(new Date());
    setSelectedGroup('');
    setSelectedRules([]);
  };

  const getGroupById = (id: string) => {
    return groups.find((el: any) => el.id === id);
  }

  const getRespById = (id: string) => {
		return resps.find((el: any) => el.id === id);
	}

  const selectedRespObject = useMemo(() => {
		const respObj = getRespById(selectedResp);
		return respObj ? respObj : undefined;
	}, [selectedResp, resps]);

  const handleIsRespSwitch = (event: any) => {
	  const switchValue = event.target.checked;
	  setIsResp(switchValue);
	  if (switchValue) {
	  	setSelectedGroup('');
	  } else {
	  	setSelectedResp('');
	  }
  }

  const filteredRules = useMemo(() => {
    return rules.filter(rule => rule.isResp === isResp);
  }, [rules, isResp]);

  useEffect(() => {
    fetchGroups();
    fetchResps();
    fetchRules();
  }, [])

  return (
    <Card variant="elevation">
      <CardContent>
        <Grid container spacing={2} alignItems='center'>
          <Grid item xs={12} md={4}>
            <DatePicker
              label="Data"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </Grid>
          <Grid item xs={12} md={4}>
		  {isResp ? <FormControl fullWidth>
					<InputLabel id="leader-group-label">Responsabile</InputLabel>
					<Select
						label="Responsabile"
						labelId="resp-label"
						value={resps.length !== 0 ? selectedResp : ''}
						onChange={handleRespChange}
						displayEmpty
						renderValue={selectedRespObject ? () => <Typography>{selectedRespObject.firstName} {selectedRespObject.lastName}</Typography> : undefined}
						fullWidth
						inputProps={{ 'aria-label': 'Seleziona responsabile' }}
						startAdornment={selectedRespObject ? <GroupRespAvatar color="#e2e2e2" /> : undefined}
					>
						{resps.map((resp: any) => (
							<MenuItem key={resp.id} value={resp.id}>
								<Box display="flex" alignItems="center" alignContent="center">
									<GroupRespAvatar isResp={true} />
									<Typography>{resp.firstName} {resp.lastName}</Typography>
								</Box>
							</MenuItem>
						))}
					</Select>
				</FormControl> : <FormControl fullWidth>
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
            </FormControl>}
          </Grid>
		  <Grid item xs={12} md={4}>
		  <FormControlLabel control={<Switch color="secondary" checked={isResp} onChange={handleIsRespSwitch} />} label="Regole responsabili" />
			</Grid>
          <Grid item xs={12} sx={{ height: 400 }}>
            <StyledDataGrid
              rows={filteredRules}
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
            <CancelSaveButtons onCancel={onCancel} onSave={handleSubmit} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default NewScoreForm;