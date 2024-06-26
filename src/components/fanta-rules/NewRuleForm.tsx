// components/NewRuleForm.js
import { useState } from 'react';
import { TextField, Grid, Card, CardContent, Box, FormControlLabel, Checkbox, RadioGroup, Radio, FormControl, FormLabel } from '@mui/material';
import LargeButton from '../shared/LargeButton';

const NewRuleForm = ({ onCancel, onSave }: any) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [points, setPoints] = useState('0');
  const [pointDescription, setPointDescription] = useState('');
  const [nanRule, setNanRule] = useState(false);
  const [ruleType, setRuleType] = useState('group');

  const handleSubmit = () => {
    const isResp = ruleType === 'resp';
    onSave({ title, description, points: parseInt(points), pointDescription, isResp });
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

  return (
    <Card variant="elevation" sx={{ flexGrow: 1 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl>
            <FormLabel>Tipo di regola</FormLabel>
            <RadioGroup
              value={ruleType}
              onChange={(event) => { setRuleType(event.target.value) }}
              >
              <Box display="flex" flexWrap="wrap">
                <FormControlLabel value="group" control={<Radio color="secondary" />} label="Regola gruppi" />
                <FormControlLabel value="resp" control={<Radio color="secondary" />} label="Regola responsabili" />
              </Box>
            </RadioGroup>
              </FormControl>
          </Grid>
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
          <Grid item xs={12} md={6}>
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
          <Grid item xs={12} md={6}>
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