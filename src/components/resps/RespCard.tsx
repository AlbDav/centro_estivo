import { Card, CardContent, Typography } from '@mui/material';

const RespCard = ({ resp }: any) => {
  return (
    <Card>
      <CardContent>
	  	<Typography variant="h6">{resp.firstName}</Typography>
	  	<Typography variant="h6">{resp.lastName}</Typography>
      </CardContent>
    </Card>
  );
};

export default RespCard;