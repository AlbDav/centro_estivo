import { Avatar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Group } from '@mui/icons-material';
import { isLight } from '@/helpers/ColorHelpers';

const GroupAvatar = ({ color }: any) => {
  const theme = useTheme();
  
  return (
    <Avatar
      sx={{
        bgcolor: color,
        width: '2.25rem',
        height: '2.25rem',
        marginRight: 1,
        border: isLight(color) ? `1px solid ${theme.palette.text.primary}` : 'none',
      }}
    >
      <Group sx={{ color: theme.palette.getContrastText(color) }} />
    </Avatar>
  );
};

export default GroupAvatar;
