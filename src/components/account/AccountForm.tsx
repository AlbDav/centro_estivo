import { Alert, Box, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, Switch, TextField, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import CancelSaveButtons from "../shared/CancelSaveButtons";
import GroupRespAvatar from "../shared/GroupRespAvatar";
import { ListGroupsQuery, ListRespsQuery } from "@/API";
import { listGroups, listResps } from "@/graphql/queries";
import { API } from "aws-amplify";

const AccountForm = ({ initialFirstName, initialLastName, initialIsResp, initialGroup, initialResp, onCancel, onSave }: any) => {
	const [groups, setGroups] = useState<any>([]);
	const [resps, setResps] = useState<any>([]);
	const [firstName, setFirstName] = useState(initialFirstName);
	const [lastName, setLastName] = useState(initialLastName);
	const [isResp, setIsResp] = useState(initialIsResp);
	const [selectedGroup, setSelectedGroup] = useState(initialGroup ? initialGroup : '');
	const [selectedResp, setSelectedResp] = useState(initialResp ? initialResp : '');
	const [attemptedSave, setAttemptedSave] = useState(false);

	useEffect(() => {
		fetchGroups();
		fetchResps();
	}, []);

	const handleGroupChange = (event: any) => {
		setSelectedGroup(event.target.value);
	};

	const handleRespChange = (event: any) => {
		setSelectedResp(event.target.value);
	};

	const getGroupById = (id: string) => {
		return groups.find((el: any) => el.id === id);
	}

	const getRespById = (id: string) => {
		return resps.find((el: any) => el.id === id);
	}

	const fetchGroups = async () => {
		try {
			const groupData = await API.graphql<ListGroupsQuery>({ query: listGroups }) as any;
			const groupItems = groupData.data.listGroups.items;
			setGroups(groupItems);
		} catch (error) {
			console.log('Error fetching groups:', error);
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

	const selectedRespObject = useMemo(() => {
		const respObj = getRespById(selectedResp);
		return respObj ? respObj : undefined;
	}, [selectedResp, resps]);

	const selectedGroupObject = useMemo(() => {
		const groupObj = getGroupById(selectedGroup);
		return groupObj ? groupObj : undefined;
	}, [selectedGroup, groups]);

	const invalidName = useMemo(() => {
		return !firstName && !lastName
	}, [firstName, lastName]);

	const invalidResp = useMemo(() => {
		if (isResp) {
			return !selectedResp;
		}
		return false;
	}, [isResp, selectedResp]);

	const invalidGroup = useMemo(() => {
		if (!isResp) {
			return !selectedGroup;
		}
		return false;
	}, [isResp, selectedGroup]);

	const handleIsRespSwitch = (event: any) => {
		const switchValue = event.target.checked;
		setIsResp(switchValue);
		if (switchValue) {
			setSelectedGroup('');
		} else {
			setSelectedResp('');
		}
	}

	const handleSubmit = () => {
		setAttemptedSave(true);
		if (invalidName || invalidResp || invalidGroup) {
			return;
		}

		const respId = selectedResp ? selectedResp : null;
		const groupId = selectedGroup ? selectedGroup : null
		onSave(firstName, lastName, isResp, respId, groupId);
	}

	return (
		<Grid container justifyContent="flex-start" spacing={2} sx={{ ml: { xs: -2, md: 0 }, mb: 2 }}>
			<Grid item xs={12} md={8}>
				<TextField
					label="Nome"
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
					fullWidth
					error={attemptedSave && invalidName}
				/>
			</Grid>
			<Grid item xs={12} md={8}>
				<TextField
					label="Cognome"
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
					fullWidth
					error={attemptedSave && invalidName}
				/>
			</Grid>
			<Grid item xs={12} md={5}>
				{isResp ? <FormControl fullWidth>
					<InputLabel id="leader-group-label">Responsabile</InputLabel>
					<Select
						label="Responsabile"
						labelId="resp-label"
						value={resps.length !== 0 ? selectedResp : ''}
						onChange={handleRespChange}
						displayEmpty
						renderValue={selectedRespObject ? () => <Typography>{selectedRespObject.firstName} {selectedRespObject.lastName}</Typography> : undefined}
						fullWidth
						error={attemptedSave && invalidResp}
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
				</FormControl> : <FormControl fullWidth>
					<InputLabel id="leader-group-label">Gruppo</InputLabel>
					<Select
						label="Gruppo"
						labelId="group-label"
						value={groups.length !== 0 ? selectedGroup : ''}
						onChange={handleGroupChange}
						displayEmpty
						renderValue={selectedGroupObject ? () => <Typography>{selectedGroupObject.name}</Typography> : undefined}
						fullWidth
						error={attemptedSave && invalidGroup}
						inputProps={{ 'aria-label': 'Seleziona gruppo' }}
						startAdornment={selectedGroupObject ? <GroupRespAvatar color={selectedGroupObject.color} /> : undefined}
					>
						{groups.map((group: any) => (
							<MenuItem key={group.id} value={group.id}>
								<Box display="flex" alignItems="center" alignContent="center">
									<GroupRespAvatar color={group.color} />
									<Typography>{group.name}</Typography>
								</Box>
							</MenuItem>
						))}
					</Select>
				</FormControl>}
			</Grid>
			<Grid item xs={12} md={3}>
				<FormControlLabel control={<Switch color="secondary" checked={isResp} onChange={handleIsRespSwitch} />} label="Sono un responsabile" />
			</Grid>
			<Grid item xs={12} md={8}>
				{attemptedSave && invalidName && <Alert sx={{ mb: 1 }} severity="error">Nome e cognome non possono essere entrambi vuoti.</Alert>}
				{attemptedSave && invalidResp && <Alert sx={{ mb: 1 }} severity="error">Selezionare un responsabile.</Alert>}
				{attemptedSave && invalidGroup && <Alert sx={{ mb: 1 }} severity="error">Selezionare un gruppo.</Alert>}
			</Grid>
			<Grid item xs={12}>
				<CancelSaveButtons onCancel={onCancel} onSave={handleSubmit} />
			</Grid>
		</Grid>
	);
}

export default AccountForm;