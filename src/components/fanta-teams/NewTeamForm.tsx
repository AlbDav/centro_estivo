// components/NewRuleForm.js
import { useEffect, useState } from 'react';
import { TextField, Grid, Select, Typography, MenuItem, Box, FormControl, InputLabel } from '@mui/material';
import { API } from 'aws-amplify';
import { ListGroupsQuery } from '@/API';
import { listGroups } from '@/graphql/queries';
import LargeButton from '../shared/LargeButton';
import GroupAvatar from '../shared/GroupAvatar';

const NewTeamForm = ({ onCancel, onSave }: any) => {
  const [groups, setGroups] = useState<any>([]);
  const [teamName, setTeamName] = useState('');
  const [leaderGroup, setLeaderGroup] = useState('');
  const [additionalGroups, setAdditionalGroups] = useState(['', '']);

  useEffect(() => {
    fetchGroups();
  }, []);

  const getGroupById = (id: string) => {
    console.log(id);
    return groups.find((el: any) => el.id === id);
  }

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

  const alreadyPicked = (group: any, additionalGroupIndex?: number) => {
    if (additionalGroupIndex !== undefined) {
      if (group.id === leaderGroup || additionalGroups.some((additionalGroup, idx) => idx !== additionalGroupIndex && additionalGroup === group.id)) {
        return true;
      }
    } else {
      if (additionalGroups.some(additionalGroup => additionalGroup === group.id)) {
        return true;
      }
    }
    return false;
  }

  return (
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
            renderValue={leaderGroup ? () => <Typography>{getGroupById(leaderGroup).name}</Typography> : undefined}
            fullWidth
            inputProps={{ 'aria-label': 'Seleziona gruppo leader' }}
            startAdornment={leaderGroup ? <GroupAvatar color={getGroupById(leaderGroup).color} /> : undefined}
          >
            {groups.map((group: any) => (
              <MenuItem key={group.id} value={group.id} disabled={alreadyPicked(group)}>
                <Box display="flex" alignItems="center" alignContent="center">
                  <GroupAvatar color={group.color} />
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
            <InputLabel id={`leader-group-label-${index}`}>Gruppo {index + 2}</InputLabel>
            <Select
              label={`Gruppo ${index + 2}`}
              labelId={`leader-group-label-${index}`}
              value={additionalGroup}
              onChange={(event) => handleAdditionalGroupChange(event, index)}
              displayEmpty
              renderValue={additionalGroup ? () => <Typography>{getGroupById(additionalGroup).name}</Typography> : undefined}
              fullWidth
              inputProps={{ 'aria-label': `Seleziona gruppo ${index + 2}` }}
              startAdornment={additionalGroup ? <GroupAvatar color={getGroupById(additionalGroup).color} /> : undefined}
            >
              {groups.map((group: any) => (
                <MenuItem key={group.id} value={group.id} disabled={alreadyPicked(group, index)}>
                  <Box display="flex" alignItems="center">
                    <GroupAvatar color={group.color} small />
                    <Typography>{group.name}</Typography>
                  </Box>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      ))}
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
  );
};

export default NewTeamForm;