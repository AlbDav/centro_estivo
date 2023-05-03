import React from 'react';
import { Box, Card, CardContent, Chip, Typography } from '@mui/material';

const GroupCard = ({ group }: any) => {
  return (
    <Card>
      <CardContent>
	  	<Typography variant="h6">{group.name}</Typography>
		<Box
        className="swatch"
        sx={{
          borderRadius: '100%',
          width: '2em',
          height: '2em',
          backgroundColor: group.color,
		  border: '1px solid #c4c4c4',
        }}
      />
      </CardContent>
    </Card>
  );
};

export default GroupCard;