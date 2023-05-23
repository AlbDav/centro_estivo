import React, { useState } from 'react';
import { Box, TextField, Button, Card, CardContent, InputLabel } from '@mui/material';
import CustomColorPicker from '../shared/CustomColorPicker';

const NewGroupForm = ({ onCancel, onSave }: any) => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('#FFFFFF');

  const handleSubmit = () => {
    onSave({ name, color });
    setName('');
    setColor('#FFFFFF');
  };

  return (
    <Card>
      <CardContent>
        <TextField
          label="Name"
          variant="outlined"
          margin="normal"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Box marginTop={2} marginBottom={2}>
          <InputLabel id="color-label">Color</InputLabel>
          <CustomColorPicker
            color={color}
            onChange={(colorSelected: any) => setColor(colorSelected)}
          />
        </Box>
        <Box marginTop={2}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Salva
          </Button>
          <Button variant="outlined" color="secondary" onClick={onCancel} style={{ marginLeft: '10px' }}>
            Annulla
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default NewGroupForm;