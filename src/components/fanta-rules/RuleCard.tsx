// components/RuleCard.js
import { Box, Grid, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import RuleDisplay from '../shared/RuleDisplay';

const RuleCard = ({ rule, isUserAdmin, onDelete }: any) => {
	return (
		<Grid container justifyContent="space-between" alignItems="center">
			{isUserAdmin && <Grid item xs={12}>
        <Box display="flex" justifyContent="end">
          <IconButton onClick={() => onDelete(rule)}><Delete /></IconButton>
        </Box>
			</Grid>}
			<RuleDisplay rule={rule} variant="h6" />
		</Grid>
	);
};

export default RuleCard;