import { useState } from 'react';
import { Box, TextField, Card, CardContent, Grid } from '@mui/material';
import LargeButton from '../shared/LargeButton';

const NewRespForm = ({ onCancel, onSave }: any) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = () => {
	onSave({ firstName, lastName });
    setFirstName('');
    setLastName('');
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
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Grid>
		  <Grid item xs={12}>
            <TextField
              label="Cognome"
              variant="outlined"
              margin="normal"
              fullWidth
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
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

export default NewRespForm;