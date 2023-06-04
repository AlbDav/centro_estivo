import { Box, Grid, Tooltip, Typography, IconButton, Popover } from '@mui/material';
import { InfoOutlined } from '@mui/icons-material';
import PointsTypography from './PointsTypography';
import { useState } from 'react';

const RuleDisplay = ({ rule, variant="body1", hideDescription = false }: any) => {
  const [isPopperOpen, setIsPopperOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <>
      <Grid item xs={10}>
        <Box display="flex" flexWrap={hideDescription ? "nowrap" : "wrap"} alignItems="center">
          <Typography variant={variant} sx={{ width: hideDescription ? 'auto' : '100%' }}>{rule.title}</Typography>
          {hideDescription ? (
            <IconButton sx={{ padding: '2px' }}
            onClick={(event: any) => {
              setAnchorEl(event.currentTarget);
              setIsPopperOpen(true);
            }}>
              <InfoOutlined />
            </IconButton>
          ) : (
            <Typography>{rule.description}</Typography>
          )}
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box display="flex" justifyContent="end">
          <PointsTypography points={rule.points} pointDescription={rule.pointDescription} />
        </Box>
      </Grid>

      <Popover
        PaperProps={{ sx: { padding: 1 } }}
        open={isPopperOpen}
        anchorEl={anchorEl}
        onClose={() => setIsPopperOpen(false)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>{rule.description}</Typography>
      </Popover>
    </>
  );
};

export default RuleDisplay;