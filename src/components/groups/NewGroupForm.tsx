import { useState } from 'react';
import { Box, TextField, Card, CardContent, Grid } from '@mui/material';
import CustomColorPicker from '../shared/CustomColorPicker';
import LargeButton from '../shared/LargeButton';

const NewGroupForm = ({ onCancel, onSave }: any) => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('#ffffff');
  const [age, setAge] = useState('0');

  const ageBlurred = (event: any) => {
    const value = parseInt(event.target.value);
    if (isNaN(value)) {
      setAge('0');
    }
  }

  const handleSubmit = () => {
    onSave({ name, color, age: parseInt(age) });
    setName('');
    setColor('#ffffff');
    setAge('0');
  };

  return (
    <Card variant="elevation" sx={{ flexGrow: 1 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Nome"
              variant="outlined"
              margin="normal"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomColorPicker
              color={color}
              onChange={(colorSelected: any) => setColor(colorSelected)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Età"
              fullWidth
              value={age}
              onChange={(e) => setAge(e.target.value)}
              onBlur={ageBlurred}
              type="number"
            />
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center">
              <LargeButton variant="outlined" color="secondary" onClick={onCancel}>
                Annulla
              </LargeButton>
              <LargeButton variant="contained" color="primary" onClick={handleSubmit} style={{ marginLeft: '40px' }}>
                Salva
              </LargeButton>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default NewGroupForm;