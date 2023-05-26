import { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { Box, CircularProgress, Container, Fab, Grid } from '@mui/material';
import { createGroup } from '../graphql/mutations';
import { listGroups } from '../graphql/queries';
import GroupCard from '@/components/groups/GroupCard';
import { ListGroupsQuery } from '@/API';
import NewGroupForm from '@/components/groups/NewGroupForm';
import { Add } from '@mui/icons-material';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/router';

const Groups = () => {
	const [groups, setGroups] = useState([]);
	const [showForm, setShowForm] = useState(false);
	const [authChecked, setAuthChecked] = useState(false);
	const { isUserLogged, isUserAdmin, isUserRef } = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (isUserLogged) {
			fetchGroups();
			setAuthChecked(true);
		} else if (isUserLogged === false) {
			router.push({ pathname: '/account', query: { redirect: router.pathname } });
		}
	}, [isUserLogged]);

	const fetchGroups = async () => {
		try {
			const groupData = await API.graphql<ListGroupsQuery>({ query: listGroups }) as any;
			const groupItems = groupData.data.listGroups.items;
			setGroups(groupItems);
		} catch (error) {
			console.log('Error fetching grous:', error);
		}
	};

	const addGroup = async (group: any) => {
		try {
      if (!group.name || !group.color || !(6 <= group.age && group.age <= 12)) {
				throw new Error('Missing mandatory fields');
			}

			await API.graphql({ query: createGroup, variables: { input: group } }) as any;
			fetchGroups();
			setShowForm(false);
		} catch (error) {
			console.log('Error adding group:', error);
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
					<NewGroupForm
						onCancel={() => setShowForm(false)}
						onSave={(group: any) => addGroup(group)}
					/>
				) : (
					<Fab variant="extended" color="secondary"
						sx={{
							color: "white",
						}}
						aria-label="add" onClick={() => setShowForm(true)}>
						<Add sx={{ mr: 1 }} />
						Aggiungi gruppo
					</Fab>
				)}
			</Box>}
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