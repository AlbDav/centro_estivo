import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { Box, Button, Container, Grid, InputLabel, TextField } from '@mui/material';
import { createGroup } from '../graphql/mutations';
import { listGroups as listGroupsQuery } from '../graphql/queries';
import CustomColorPicker from '../components/shared/CustomColorPicker';

const Groups = () => {
  const [groups, setGroups] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [groupColor, setGroupColor] = useState('#FFFFFF');

  useEffect(() => {
    fetchGroups();
  }, []);

  const fetchGroups = async () => {
    try {
      const groupData = await API.graphql(graphqlOperation(listGroupsQuery)) as any;
      const groups = groupData.data.listGroups.items;
      setGroups(groups);
    } catch (error) {
      console.log('Error fetching groups:', error);
    }
  };

  const addGroup = async () => {
    try {
      await API.graphql(graphqlOperation(createGroup, { input: { name, groupColor } })) as any;
      fetchGroups();
      setShowForm(false);
    } catch (error) {
      console.log('Error adding group:', error);
    }
  };

  return (
    <Container>
      <Box marginTop={4}>
        {showForm ? (
          <Box>
            <TextField
              label="Name"
              variant="outlined"
              margin="normal"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          <Box marginTop={2} marginBottom={2}>
            <InputLabel id="color-label">Color</InputLabel>
            <CustomColorPicker
              color={groupColor}
              onChange={(color: any) => setGroupColor(color)}
            />
          </Box>
            <Box marginTop={2}>
              <Button variant="contained" color="primary" onClick={addGroup}>
                Save
              </Button>
              <Button variant="outlined" color="primary" onClick={() => setShowForm(false)}>
                Cancel
              </Button>
            </Box>
          </Box>
        ) : (
          <Button variant="contained" color="primary" onClick={() => setShowForm(true)}>
            Add Group
          </Button>
        )}
      </Box>
      <Box marginTop={4}>
        <Grid container spacing={4}>
          {groups.map((group: any) => (
            <Grid key={group.id} item xs={12}>
              <Box
                padding={2}
                border={`1px solid ${group.color}`}
                borderRadius={4}
              >
                <Box fontWeight="bold">{group.name}</Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Groups;