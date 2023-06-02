import { Typography, useTheme } from '@mui/material';

function PointsTypography({ variant = "body1", points = 0, pointDescription = "0" }: any) {
  const theme = useTheme();
  
  return (
    <Typography 
      variant={variant} 
      sx={{
        color: points < 0 ? theme.palette.error.light : theme.palette.success.light,
        fontWeight: 'bold'
      }}
    >
      {pointDescription}
    </Typography>
  );
}

export default PointsTypography;