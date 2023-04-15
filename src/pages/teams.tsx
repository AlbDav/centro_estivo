// pages/teams.js
import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { listTeams } from '../graphql/queries';
import { createTeam } from '../graphql/mutations';
import { Box, Button, Container, Grid } from '@mui/material';
import { ListTeamsQuery } from '@/API';
import NewTeamForm from '@/components/teams/NewTeamForm';
import TeamCard from '@/components/teams/TeamCard';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    try {
      const teamData = await API.graphql<ListTeamsQuery>({ query: listTeams }) as any;
      const teamItems = teamData.data.listTeams.items;
      setTeams(teamItems);
    } catch (error) {
      console.log('Error fetching teams:', error);
    }
  };

  const addTeam = async (team: any) => {
    try {
      await API.graphql({ query: createTeam, variables: { input: team } }) as any;
      fetchTeams();
      setShowForm(false);
    } catch (error) {
      console.log('Error adding team:', error);
    }
  };

  return (
    <Container>
      <Box marginTop={4}>
        {showForm ? (
          <NewTeamForm
            onCancel={() => setShowForm(false)}
            onSave={(team: any) => addTeam(team)}
          />
        ) : (
          <Button variant="contained" color="primary" onClick={() => setShowForm(true)}>
            +
          </Button>
        )}
      </Box>
      <Box marginTop={4}>
        <Grid container spacing={4}>
          {teams.map((team: any) => (
            <Grid key={team.id} item xs={12}>
              <TeamCard team={team} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Teams;