// components/RuleCard.js
import React from 'react';
import { Box, Grid, IconButton, Typography, useTheme } from '@mui/material';
import { Delete } from '@mui/icons-material';

const RuleCard = ({ rule, isUserAdmin, onDelete }: any) => {
	const theme = useTheme();

	return (
		<Grid container justifyContent="space-between" alignItems="center">
			{isUserAdmin && <Grid item xs={12}>
        <Box display="flex" justifyContent="end">
          <IconButton onClick={() => onDelete(rule)}><Delete /></IconButton>
        </Box>
			</Grid>}
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