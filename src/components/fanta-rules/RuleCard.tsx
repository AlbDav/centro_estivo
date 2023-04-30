// components/RuleCard.js
import React from 'react';
import { Box, Grid, Typography, useTheme } from '@mui/material';

const RuleCard = ({ rule }: any) => {
	const theme = useTheme();

	return (
		<Grid container justifyContent="space-between" alignItems="center">
			<Grid item xs={10}>
				<Typography variant="h6">{rule.title}</Typography>
				<Typography variant="body1">{rule.description}</Typography>
			</Grid>
			<Grid item xs={2}>
				<Box display="flex" justifyContent="end">
					<Typography variant="body1" sx={{
						color: rule.points < 0 ? theme.palette.error.light : theme.palette.success.light,
						fontWeight: 'bold'
					}}>
						{rule.pointDescription}
					</Typography>
				</Box>
			</Grid>
		</Grid>
	);
};

export default RuleCard;