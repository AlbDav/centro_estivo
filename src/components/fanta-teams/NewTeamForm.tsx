// components/NewRuleForm.js
import { useEffect, useMemo, useState } from 'react';
import { TextField, Grid, Select, Typography, MenuItem, Box, FormControl, InputLabel } from '@mui/material';
import { API } from 'aws-amplify';
import { ListGroupsQuery, ListRespsQuery } from '@/API';
import { listGroups, listResps } from '@/graphql/queries';
import LargeButton from '../shared/LargeButton';
import GroupRespAvatar from '../shared/GroupRespAvatar';
import CancelSaveButtons from '../shared/CancelSaveButtons';

const NewTeamForm = ({ onCancel, onSave }: any) => {
  const [groups, setGroups] = useState<any>([]);
  const [teamName, setTeamName] = useState('');
  const [leaderGroup, setLeaderGroup] = useState('');
  const [additionalGroups, setAdditionalGroups] = useState(['', '']);
  const [resps, setResps] = useState<any>([]);
  const [selectedResp, setSelectedResp] = useState('');

  useEffect(() => {
    fetchGroups();
    fetchResps();
  }, []);

  const getGroupById = (id: string) => {
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

  const fetchResps = async () => {
    try {
      const respData = await API.graphql<ListRespsQuery>({ query: listResps }) as any;
      const respItems = respData.data.listResps.items;
      setResps(respItems);
    } catch (error) {
      console.log('Error fetching resps:', error);
    }
  };

  const handleSubmit = () => {
    onSave({ name: teamName, resp: selectedResp, leaderGroup, additionalGroups });
    setTeamName('');
    setSelectedResp('');
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

  const handleRespChange = (event: any) => {
    setSelectedResp(event.target.value);
  };

  const getRespById = (id: string) => {
    return resps.find((el: any) => el.id === id);
  }

  const selectedRespObject = useMemo(() => {
    const respObj = getRespById(selectedResp);
    return respObj ? respObj : undefined;
  }, [selectedResp, resps]);

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
          <InputLabel id="resp-label">Responsabile</InputLabel>
          <Select
            label="Responsabile"
            labelId="resp-label"
            value={selectedResp}
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
        </FormControl>
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
            startAdornment={leaderGroup ? <GroupRespAvatar color={getGroupById(leaderGroup).color} /> : undefined}
          >
            {groups.map((group: any) => (
              <MenuItem key={group.id} value={group.id} disabled={alreadyPicked(group)}>
                <Box display="flex" alignItems="center" alignContent="center">
                  <GroupRespAvatar color={group.color} />
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
              startAdornment={additionalGroup ? <GroupRespAvatar color={getGroupById(additionalGroup).color} /> : undefined}
            >
              {groups.map((group: any) => (
                <MenuItem key={group.id} value={group.id} disabled={alreadyPicked(group, index)}>
                  <Box display="flex" alignItems="center">
                    <GroupRespAvatar color={group.color} small />
                    <Typography>{group.name}</Typography>
                  </Box>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      ))}
      <CancelSaveButtons onCancel={onCancel} onSave={handleSubmit} />
    </Grid>
  );
};

export default NewTeamForm;