import { Grid, Typography, Box, Chip } from '@mui/material';
import PointsTypography from './PointsTypography';
import GroupRespAvatar from './GroupRespAvatar';
import { MilitaryTech } from '@mui/icons-material';

const CardHeaderTitlePoints = ({ name, score, variant, position, owner, color, showMultiplier = false }: any) => {
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item xs={9}>
        <Box display="flex" alignItems="center">
          {color && <GroupRespAvatar color={color} />}
          {position && <Chip icon={<MilitaryTech />} label={position} color="primary" sx={{marginRight: 1.5, fontWeight: 'bold'}} />}
          {owner ? <Box display="flex" alignItems="baseline"><Typography variant={variant} mr={1}>
            {name}
          </Typography><Typography variant="body1">{owner}</Typography></Box> : <Typography variant={variant} mb={-0.25} mr={0.5}>
            {name}
          </Typography>}
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