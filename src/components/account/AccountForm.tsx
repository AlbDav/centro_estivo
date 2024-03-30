import { Box, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, Switch, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CancelSaveButtons from "../shared/CancelSaveButtons";
import GroupAvatar from "../shared/GroupAvatar";
import { ListGroupsQuery } from "@/API";
import { listGroups } from "@/graphql/queries";
import { API } from "aws-amplify";

const AccountForm = ({ initialFirstName, initialLastName, initialIsResp, initialGroup, initialResp, onCancel, onSave }: any) => {
  const [groups, setGroups] = useState<any>([]);
  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);
  const [isResp, setIsResp] = useState(initialIsResp);
  const [group, setGroup] = useState(initialGroup);
  const [resp, setResp] = useState(initialResp);

  useEffect(() => {
    fetchGroups();
  }, []);

  const handleGroupChange = (event: any) => {
    setGroup(event.target.value);
  };

  const getGroupById = (id: string) => {
    return groups.find((el: any) => el.id === id);
  }

  const fetchGroups = async () => {
    try {
      const groupData = await API.graphql<ListGroupsQuery>({ query: listGroups }) as any;
      const groupItems = groupData.data.listGroups.items;
      setGroups(groupItems);
    } catch (error) {
      console.log('Error fetching grous:', error);
    }
  };

	return (
    <>
		<Grid container justifyContent="flex-start" spacing={2} sx={{ ml: { xs: -2, md: 0 }, mb: 2 }}>
			<Grid item xs={12} md={8}>
				<TextField
					label="Nome"
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
					fullWidth
				/>
			</Grid>
			<Grid item xs={12} md={8}>
				<TextField
					label="Cognome"
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
					fullWidth
				/>
			</Grid>
			<Grid item xs={12} md={5}>
				<FormControl fullWidth>
					<InputLabel id="leader-group-label">Gruppo</InputLabel>
					<Select
						label="Gruppo"
						labelId="leader-group-label"
						value={group}
						onChange={handleGroupChange}
						displayEmpty
						renderValue={group ? () => <Typography>{getGroupById(group).name}</Typography> : undefined}
						fullWidth
						inputProps={{ 'aria-label': 'Seleziona gruppo' }}
						startAdornment={group ? <GroupAvatar color={getGroupById(group).color} /> : undefined}
					>
						{groups.map((group: any) => (
							<MenuItem key={group.id} value={group.id}>
								<Box display="flex" alignItems="center" alignContent="center">
									<GroupAvatar color={group.color} />
									<Typography>{group.name}</Typography>
								</Box>
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Grid>
      <Grid item xs={12} md={3}>
				<FormControlLabel control={<Switch color="secondary" />} label="Sono un responsabile" />
			</Grid>
		</Grid>
    <CancelSaveButtons onCancel={onCancel} onSave={onSave} />
    </>
	);
}

export default AccountForm;