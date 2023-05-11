// components/NewRuleForm.js
import React, { useState } from 'react';
import { TextField, Button, Grid, Card, CardContent, Box, FormControlLabel, Checkbox } from '@mui/material';
import { styled } from '@mui/system';

const NewRuleForm = ({ onCancel, onSave }: any) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [points, setPoints] = useState('0');
  const [pointDescription, setPointDescription] = useState('');
  const [nanRule, setNanRule] = useState(false);

  const handleSubmit = () => {
    const pointDescriptionToSave = pointDescription ? pointDescription : points.toString();
    onSave({ title, description, points: parseInt(points), pointDescription: pointDescriptionToSave });
    setTitle('');
    setDescription('');
    setPoints('0');
    setPointDescription('');
  };

  const pointsBlurred = (event: any) => {
    const value = parseInt(event.target.value);
    if (isNaN(value)) {
      setPoints('0')
    }
  }

  const nanRuleChanged = (event: any) => {
    const value = event.target.checked;
    if (value) {
      setPoints('0');
    } else {
      setPointDescription('');
    }
    setNanRule(value);
  };


  const LargeButton = styled(Button)(({ theme }) => ({
    padding: '10px 60px', // Aumenta il padding intorno al testo
  }));

  return (
    <Card variant="elevation">
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label="Title" fullWidth value={title} onChange={(e) => setTitle(e.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              fullWidth
              value={description}
              multiline
              rows={3}
              onChange={(e) => setDescription(e.target.value)} />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Points"
              fullWidth
              value={points}
              onChange={(e) => setPoints(e.target.value)}
              onBlur={pointsBlurred}
              type="number"
              disabled={nanRule}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Point Description"
              fullWidth
              value={pointDescription}
              onChange={(e) => setPointDescription(e.target.value)}
              disabled={!nanRule}
            />
          </Grid>
          <Grid item xs={12} sx={{
            marginTop: '-1rem'
          }}>
            <FormControlLabel control={
              <Checkbox
                color="secondary"
                onChange={nanRuleChanged}
              />
            } label="Sto aggiungendo una regola meme" />
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

export default NewRuleForm;