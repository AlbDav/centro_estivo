import { Grid, Typography, Box, Chip, Tooltip, IconButton } from '@mui/material';
import PointsTypography from './PointsTypography';
import GroupRespAvatar from './GroupRespAvatar';
import { InfoOutlined, MilitaryTech } from '@mui/icons-material';

const CardHeaderTitlePoints = ({ name, score, variant, position, owner, color, showMultiplier = false, isTeamTitle = false }: any) => {
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item xs={9}>
        <Box display="flex" alignItems="center">
          {color && <GroupRespAvatar color={color} />}
          {position && <Chip icon={<MilitaryTech />} label={position} color="primary" sx={{ marginRight: 1.5, fontWeight: 'bold' }} />}
            <Typography variant={variant} mb={isTeamTitle ? 0 : -0.25} mr={isTeamTitle ? 0 : 0.5}>
              {name}{owner && <Tooltip title={owner} arrow>
              <IconButton size="small">
                <InfoOutlined fontSize="small" />
              </IconButton>
            </Tooltip>}
            </Typography>
          {showMultiplier && <Chip label="x2" size="small" color="secondary" sx={{ color: "white" }} />}
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box display="flex" justifyContent="end" alignItems="center">
          <PointsTypography variant={variant} points={score} pointDescription={score} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default CardHeaderTitlePoints;