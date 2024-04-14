import { Grid, Typography, Box, Chip } from '@mui/material';
import PointsTypography from './PointsTypography';
import GroupRespAvatar from './GroupRespAvatar';

const CardHeaderTitlePoints = ({ name, score, variant, color, showMultiplier = false }: any) => {
	return (
		<Grid container justifyContent="space-between" alignItems="center">
			<Grid item xs={9}>
				<Box display="flex" alignItems="center">
					{color && <GroupRespAvatar color={color} />}
					<Typography variant={variant} mb={-0.25} mr={0.5}>
						{name}
					</Typography>
            {showMultiplier && <Chip label="x2" size="small" color="secondary" sx={{ color: "white" }} />}
				</Box>
			</Grid>
			<Grid item xs={3}>
				<Box display="flex" justifyContent="end">
					<PointsTypography variant={variant} points={score} pointDescription={score} />
				</Box>
			</Grid>
		</Grid>
	);
};

export default CardHeaderTitlePoints;