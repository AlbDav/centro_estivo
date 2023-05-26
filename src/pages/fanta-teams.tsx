// pages/teams.js
import { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { listFantaTeams } from '../graphql/queries';
import { createFantaTeam, createFantaTeamGroups } from '../graphql/mutations';
import { Box, Button, CircularProgress, Container, Fab, Grid } from '@mui/material';
import { ListFantaTeamsQuery } from '@/API';
import NewTeamForm from '@/components/fanta-teams/NewTeamForm';
import TeamCard from '@/components/fanta-teams/TeamCard';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/router';
import { Add } from '@mui/icons-material';

const FantaTeams = () => {
  const [teams, setTeams] = useState([]);
  const [showForm, setShowForm] = useState(false);
	const [authChecked, setAuthChecked] = useState(false);
	const { isUserLogged, isUserAdmin, isUserRef } = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (isUserLogged) {
			fetchTeams();
			setAuthChecked(true);
		} else if (isUserLogged === false) {
			router.push({ pathname: '/account', query: { redirect: router.pathname } });
		}
	}, [isUserLogged]);

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
      const teamResponse = await API.graphql({query: createFantaTeam, variables: { input: { name: team.name, fantaTeamLeaderGroupId: team.leaderGroup }}}) as any;

      const fantaTeamId = teamResponse.data.createFantaTeam.id;

      const additionalGroupPromises = team.additionalGroups.map(async (groupId: any) => {
        return API.graphql({ query: createFantaTeamGroups, variables: { input: { fantaTeamId, groupId }}});
      });

      await Promise.all(additionalGroupPromises);

      console.log('Team and TeamGroups created successfully');
    } catch (error) {
      console.error('Error creating team and TeamGroups:', error);
    }
  };

	if (!authChecked) {
		return (
			<Box height="calc(100vh - 64px)" display="flex" alignItems="center" justifyContent="center">
				<CircularProgress color="secondary" size={60} />
			</Box>
		)
	}

  return (
    <Container>
      {(isUserAdmin || isUserRef) && <Box marginTop={3} display="flex" justifyContent="center">
        {showForm ? (
          <NewTeamForm
            onCancel={() => setShowForm(false)}
            onSave={(team: any) => addTeam(team)}
          />
        ) : (
					<Fab variant="extended" color="secondary"
						sx={{
							color: "white",
						}}
						aria-label="add" onClick={() => setShowForm(true)}>
						<Add sx={{ mr: 1 }} />
						Aggiungi team
					</Fab>
        )}
      </Box>}
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