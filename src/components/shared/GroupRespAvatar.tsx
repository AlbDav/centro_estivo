import { Avatar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Group, Key } from '@mui/icons-material';
import { isLight } from '@/helpers/ColorHelpers';

const GroupRespAvatar = ({ isResp = false, color = '#e2e2e2' }: any) => {
  const theme = useTheme();
  
  return (
    <Avatar
      sx={{
        bgcolor: color,
        width: '2.125rem',
        height: '2.125rem',
        marginRight: 1,
        border: isLight(color) ? `1px solid ${theme.palette.text.primary}` : 'none',
      }}
    >
      {isResp ? <Key sx={{ color: theme.palette.getContrastText(color) }} /> : <Group sx={{ color: theme.palette.getContrastText(color) }} />}
    </Avatar>
  );
};

export default GroupRespAvatar;
