import { useState, useEffect, useMemo } from 'react';
import { API } from 'aws-amplify';
import { listFantaScoreEntries, listFantaTeams } from '../graphql/queries';
import { createFantaTeam, createFantaTeamGroups } from '../graphql/mutations';
import { Box, Card, CardContent, CircularProgress, Container, Fab, Grid } from '@mui/material';
import { FantaTeam, ListFantaScoreEntriesQuery, ListFantaTeamsQuery } from '@/API';
import NewTeamForm from '@/components/fanta-teams/NewTeamForm';
import TeamCard from '@/components/fanta-teams/TeamCard';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/router';
import { Add } from '@mui/icons-material';
import { getGroupScore, getGroupedScores } from '@/helpers/FantaHelpers';

const FantaTeams = () => {
	const [teams, setTeams] = useState([]);
	const [teamsToShow, setTeamsToShow] = useState<any>([]);
	const [groupedScores, setGroupedScores] = useState([]);
	const [showForm, setShowForm] = useState(false);
	const [authChecked, setAuthChecked] = useState(false);
	const { isUserLogged, userInfo } = useAuth();
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(true);
	const [userTeamId, setUserTeamId] = useState('');

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
		const newTeamsToShow = teams.map(team => calculateTeamData(team)).sort((a: any, b: any) => b.teamScore - a.teamScore);;
		setTeamsToShow(newTeamsToShow);
	}, [teams, groupedScores]);

	const userTeamToShow = useMemo(() => {
		if (teamsToShow.length > 0) {
			return teamsToShow.find((item: any) => item.teamId === userTeamId);
		}
	}, [teamsToShow, userTeamId]);

	const fetchTeams = async () => {
		try {
			const teamData = await API.graphql<ListFantaTeamsQuery>({ query: listFantaTeams }) as any;
			const teamItems = teamData.data.listFantaTeams.items;
			setTeams(teamItems);
			let teamFound = teamItems.find((item: FantaTeam) => item.fantaTeamOwnerId === userInfo.id);
			if (teamFound) {
				setUserTeamId(teamFound.id);
			}
			setIsLoading(false);
		} catch (error) {
			console.log('Error fetching teams:', error);
		}
	};

	const fetchScoreEntries = async () => {
		try {
			const scoreData = await API.graphql<ListFantaScoreEntriesQuery>({ query: listFantaScoreEntries, variables: { limit: 1000 } }) as any;
			const scoreItems = scoreData.data.listFantaScoreEntries.items;
			const groupedScoreItems = getGroupedScores(scoreItems);
			setGroupedScores(groupedScoreItems);
		} catch (error) {
			console.log('Error fetching scores:', error);
		}
	};

	const calculateTeamData = (team: any) => {
		const { leaderGroup } = team;
		const groups = team.groups.items.map((el: any) => el.group);

		const leaderGroupData = getGroupScore(leaderGroup, groupedScores, true);
		const groupData = groups.map((group: any) => getGroupScore(group, groupedScores));
		const teamScore = leaderGroupData.groupScore + groupData.reduce((total: number, group: any) => total + group.groupScore, 0);

		const uniqueDates = Array.from(new Set([leaderGroupData, ...groupData].flatMap(group => group.groupScoreEntries.map((entry: any) => entry.date))));
		uniqueDates.sort((a: any, b: any) => new Date(b).getTime() - new Date(a).getTime());

		return {
			teamId: team.id,
			teamName: team.name,
			teamScore,
			leaderGroup: leaderGroupData,
			groups: groupData,
			dates: uniqueDates,
			resp: team.resp
		};
	}

	const addTeam = async (team: any) => {
		try {
			if (!team.name || !team.resp || !team.leaderGroup || !team.additionalGroups[0] || !team.additionalGroups[1]) {
				throw new Error('Missing mandatory fields');
			}

			const teamResponse = await API.graphql({ query: createFantaTeam, variables: { input: { name: team.name, fantaTeamRespId: team.resp, fantaTeamLeaderGroupId: team.leaderGroup, fantaTeamOwnerId: userInfo.id } } }) as any;

			const fantaTeamId = teamResponse.data.createFantaTeam.id;
			const additionalGroupPromises = team.additionalGroups.map(async (groupId: any) => {
				return API.graphql({ query: createFantaTeamGroups, variables: { input: { fantaTeamId, groupId } } });
			});

			await Promise.all(additionalGroupPromises);

			fetchTeams();
			setShowForm(false);

			console.log('Team and TeamGroups created successfully');
		} catch (error) {
			console.error('Error creating team and TeamGroups:', error);
		}
	};

	const dateExpired = useMemo(() => {
		const expiryDate = process.env.CREATE_TEAM_LAST_DATE as string;
		const today = new Date().toISOString().slice(0, 10);
		return today <= expiryDate;
	}, []);

	if (!authChecked) {
		return (
			<Box height="calc(100vh - 64px)" display="flex" alignItems="center" justifyContent="center">
				<CircularProgress color="secondary" size={60} />
			</Box>
		)
	}

	return (
		<Container>
			{(!userTeamToShow && !dateExpired) ? <Box marginTop={3} display="flex" justifyContent="center">
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
						Crea il tuo Team
					</Fab>
				)}
			</Box> :
				userTeamToShow && <Box marginTop={3}>
					<Grid container spacing={4}>
						<Grid item xs={12}>
							<TeamCard team={userTeamToShow} />
						</Grid>
					</Grid>
				</Box>
			}
			<Box marginTop={4}>
				{isLoading ?
					<Box display="flex" justifyContent="center">
						<CircularProgress color="secondary" size={45} />
					</Box> :
					<Grid container spacing={4}>
						{teamsToShow.map((team: any) => (
							<Grid key={team.teamId} item xs={12}>
								<TeamCard team={team} />
							</Grid>
						))}
					</Grid>}
			</Box>
		</Container>
	);
};

export default FantaTeams;