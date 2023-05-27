// pages/teams.js
import { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { listFantaScoreEntries, listFantaTeams } from '../graphql/queries';
import { createFantaTeam, createFantaTeamGroups } from '../graphql/mutations';
import { Box, Card, CardContent, CircularProgress, Container, Fab, Grid } from '@mui/material';
import { ListFantaScoreEntriesQuery, ListFantaTeamsQuery } from '@/API';
import NewTeamForm from '@/components/fanta-teams/NewTeamForm';
import TeamCard from '@/components/fanta-teams/TeamCard';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/router';
import { Add } from '@mui/icons-material';

const FantaTeams = () => {
  const [teams, setTeams] = useState([]);
  const [teamsToShow, setTeamsToShow] = useState<any>([]);
  const [scoreEntries, setScoreEntries] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);
  const { isUserLogged, isUserAdmin, isUserRef } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isUserLogged) {
      fetchTeams();
      fetchScoreEntries();
      setAuthChecked(true);
    } else if (isUserLogged === false) {
      router.push({ pathname: '/account', query: { redirect: router.pathname } });
    }
  }, [isUserLogged]);

  useEffect(() => {
      const newTeamsToShow = teams.map(team => calculateTeamData(team));
      setTeamsToShow(newTeamsToShow);
      console.log(newTeamsToShow);
  }, [teams, scoreEntries]);

  const fetchTeams = async () => {
    try {
      const teamData = await API.graphql<ListFantaTeamsQuery>({ query: listFantaTeams }) as any;
      const teamItems = teamData.data.listFantaTeams.items;
      setTeams(teamItems);
    } catch (error) {
      console.log('Error fetching teams:', error);
    }
  };

  const fetchScoreEntries = async () => {
    try {
      const scoreData = await API.graphql<ListFantaScoreEntriesQuery>({ query: listFantaScoreEntries }) as any;
      const scoreItems = scoreData.data.listFantaScoreEntries.items;
      setScoreEntries(scoreItems);
    } catch (error) {
      console.log('Error fetching scores:', error);
    }
  };

  const getScoreEntriesAndTotal = (group: any) => {
    const entries = scoreEntries.filter((entry: any) => entry.fantaScoreEntryGroupId === group.id);
    const total = entries.reduce((total: number, entry: any) => total + entry.rule.points, 0);
    let resultEntries: any = {};

    entries.forEach((entry: any) => {
      if (!resultEntries[entry.date]) {
        resultEntries[entry.date] = [];
      }
      resultEntries[entry.date].push(entry);
    });
    return {groupScore: total, groupScoreEntries: resultEntries};
  };

  const calculateTeamData = (team: any) => {
    const { leaderGroup } = team;
    const groups = team.groups.items.map((el: any) => el.group);

    const leaderGroupScore = getScoreEntriesAndTotal(leaderGroup);
    const groupScores = groups.map((group: any) => getScoreEntriesAndTotal(group));

    return {
      groupScores
    }
  
/*     const teamScore = 2 * leaderGroupScore + groupScores.reduce((a: any, b: any) => a + b, 0);
  
    const leaderGroupData = {
      groupName: leaderGroup.name,
      groupScore: leaderGroupScore,
      groupScoreEntries: getGroupScoreEntries(leaderGroup)
    };
  
    const groupData = groups.items.map((group: any) => ({
      groupName: group.group.name,
      groupScore: calculateGroupScore(group),
      groupScoreEntries: getGroupScoreEntries(group)
    }));
  
    return {
      teamId: team.id,
      teamName: team.name,
      teamScore,
      leaderGroup: leaderGroupData,
      groups: groupData
    }; */
  }

  const addTeam = async (team: any) => {
    try {
      if (!team.name || !team.leaderGroup || !team.additionalGroups[0] || !team.additionalGroups[1]) {
        throw new Error('Missing mandatory fields');
      }

      const teamResponse = await API.graphql({ query: createFantaTeam, variables: { input: { name: team.name, fantaTeamLeaderGroupId: team.leaderGroup } } }) as any;

      const fantaTeamId = teamResponse.data.createFantaTeam.id;
      const additionalGroupPromises = team.additionalGroups.map(async (groupId: any) => {
        return API.graphql({ query: createFantaTeamGroups, variables: { input: { fantaTeamId, groupId } } });
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
          <Card variant="elevation" sx={{ flexGrow: 1 }}>
            <CardContent>
              <NewTeamForm
                onCancel={() => setShowForm(false)}
                onSave={(team: any) => addTeam(team)}
              />
            </CardContent>
          </Card>
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