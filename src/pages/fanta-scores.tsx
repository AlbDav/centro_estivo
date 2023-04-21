// pages/teams.js
import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { listFantaTeams } from '../graphql/queries';
import { createFantaTeam, createFantaTeamGroups } from '../graphql/mutations';
import { Box, Button, Container, Grid } from '@mui/material';
import { ListFantaTeamsQuery } from '@/API';
import NewTeamForm from '@/components/fanta-teams/NewTeamForm';
import TeamCard from '@/components/fanta-teams/TeamCard';

const FantaTeams = () => {
  const [teams, setTeams] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    try {
      const teamData = await API.graphql<ListFantaTeamsQuery>({ query: listFantaTeams }) as any;
      const teamItems = teamData.data.listFantaTeams.items;
      setTeams(teamItems);
    } catch (error) {
      console.log('Error fetching teams:', error);
    }
  };

  const addTeam = async (team: any) => {
    try {
      // Creare un nuovo team utilizzando la mutation GraphQL
      const teamResponse = await API.graphql({query: createFantaTeam, variables: { input: { name: team.name, fantaTeamLeaderGroupId: team.leaderGroup }}}) as any;

      // Ottenere l'ID del team creato
      const fantaTeamId = teamResponse.data.createFantaTeam.id;

      // Creare le voci TeamGroup per ogni additionalGroup
      const additionalGroupPromises = team.additionalGroups.map(async (groupId: any) => {
        return API.graphql({ query: createFantaTeamGroups, variables: { input: { fantaTeamId, groupId }}});
      });

      // Attendere il completamento di tutte le chiamate API per creare le voci TeamGroup
      await Promise.all(additionalGroupPromises);

      // Fare qualcosa con la risposta, ad esempio aggiornare lo stato dell'applicazione o navigare verso un'altra pagina
      console.log('Team and TeamGroups created successfully');
    } catch (error) {
      console.error('Error creating team and TeamGroups:', error);
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

export default FantaTeams;