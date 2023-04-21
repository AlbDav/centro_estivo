// components/NewRuleForm.js
import React, { useEffect, useState } from 'react';
import { TextField, Button, Grid, Card, CardContent, Select, Typography, Avatar, MenuItem, Box, FormControl, InputLabel } from '@mui/material';
import { API } from 'aws-amplify';
import { ListGroupsQuery } from '@/API';
import { listGroups } from '@/graphql/queries';

const NewTeamForm = ({ onCancel, onSave }: any) => {
  const [groups, setGroups] = useState([]);
  const [teamName, setTeamName] = useState('');
  const [leaderGroup, setLeaderGroup] = useState('');
  const [additionalGroups, setAdditionalGroups] = useState(['', '']);

  useEffect(() => {
    fetchGroups();
  }, []);

  const handleTeamNameChange = (event: any) => {
    setTeamName(event.target.value);
  };

  const handleLeaderGroupChange = (event: any) => {
    setLeaderGroup(event.target.value);
  };

  const handleAdditionalGroupChange = (event: any, index: any) => {
    const newAdditionalGroups = [...additionalGroups];
    newAdditionalGroups[index] = event.target.value;
    setAdditionalGroups(newAdditionalGroups);
  };

  const fetchGroups = async () => {
    try {
      const groupData = await API.graphql<ListGroupsQuery>({ query: listGroups }) as any;
      const groupItems = groupData.data.listGroups.items;
      setGroups(groupItems);
    } catch (error) {
      console.log('Error fetching grous:', error);
    }
  };

  const handleSubmit = () => {
    onSave({ name: teamName, leaderGroup, additionalGroups });
    setTeamName('');
    setLeaderGroup('');
    setAdditionalGroups(['', '']);
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Nome del team"
              value={teamName}
              onChange={handleTeamNameChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="leader-group-label">Gruppo Leader</InputLabel>
              <Select
                label="Gruppo Leader"
                labelId="leader-group-label"
                value={leaderGroup}
                onChange={handleLeaderGroupChange}
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
          {additionalGroups.map((additionalGroup, index) => (
            <Grid key={index} item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel id={`leader-group-label-${index}`}>Gruppo {index+2}</InputLabel>
                <Select
                  label={`Gruppo ${index+2}`}
                  labelId={`leader-group-label-${index}`}
                  value={additionalGroup}
                  onChange={(event) => handleAdditionalGroupChange(event, index)}
                  displayEmpty
                  fullWidth
                  inputProps={{ 'aria-label': `Seleziona gruppo aggiuntivo ${index + 1}` }}
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
          ))}
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

export default NewTeamForm;