import { Box, Grid, Tooltip, Typography, IconButton } from '@mui/material';
import { InfoOutlined } from '@mui/icons-material';
import PointsTypography from './PointsTypography';

const RuleDisplay = ({ rule, hideDescription = false }: any) => {
  return (
    <>
      <Grid item xs={10}>
	  <Box display="flex" flexWrap={hideDescription ? "nowrap" : "wrap"} alignItems="center">
        <Typography variant="h6">{rule.title}</Typography>
        {hideDescription ? (
          <IconButton>
            <Tooltip title={rule.description} arrow>
              <InfoOutlined />
            </Tooltip>
          </IconButton>
        ) : (
          <Typography variant="body1">{rule.description}</Typography>
        )}
		</Box>
      </Grid>
      <Grid item xs={2}>
        <Box display="flex" justifyContent="end">
          <PointsTypography points={rule.points} pointDescription={rule.pointDescription} />
        </Box>
      </Grid>
    </>
  );
};

export default RuleDisplay;