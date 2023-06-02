// components/RuleCard.js
import { Box, Grid, IconButton, Typography } from '@mui/material';
import { Delete } from '@mui/icons-material';
import PointsTypography from '../shared/PointsTypography';

const RuleCard = ({ rule, isUserAdmin, onDelete }: any) => {
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
					<PointsTypography points={rule.points} pointDescription={rule.pointDescription} />
				</Box>
			</Grid>
		</Grid>
	);
};

export default RuleCard;