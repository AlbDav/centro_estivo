import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { Box, Button, Container, Grid } from '@mui/material';
import { createGroup } from '../graphql/mutations';
import { listGroups } from '../graphql/queries';
import GroupCard from '@/components/groups/GroupCard';
import { ListGroupsQuery } from '@/API';
import NewGroupForm from '@/components/groups/NewGroupForm';

const Groups = () => {
  const [groups, setGroups] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchGroups();
  }, []);

  const fetchGroups = async () => {
    try {
      const groupData = await API.graphql<ListGroupsQuery>({ query: listGroups }) as any;
      const groupItems = groupData.data.listGroups.items;
      setGroups(groupItems);
    } catch (error) {
      console.log('Error fetching rules:', error);
    }
  };

  const addGroup = async (rule: any) => {
    try {
      await API.graphql({ query: createGroup, variables: { input: rule } }) as any;
      fetchGroups();
      setShowForm(false);
    } catch (error) {
      console.log('Error adding rule:', error);
    }
  };

  return (
    <Container>
      <Box marginTop={4}>
        {showForm ? (
          <NewGroupForm
            onCancel={() => setShowForm(false)}
            onSave={(group: any) => addGroup(group)}
          />
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
              <GroupCard group={group} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Groups;