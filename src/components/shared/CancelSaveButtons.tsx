import { Grid, Button, Box } from '@mui/material';

const CancelSaveButtons = ({ onCancel, onSave }: any) => {
  return (
    <Grid item xs={12}>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={6}>
          <Box display="flex" justifyContent="flex-end">
            <Button size="large" variant="outlined" color="secondary" onClick={onCancel}>
              Annulla
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Button size="large" variant="contained" color="primary" onClick={onSave}>
            Salva
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CancelSaveButtons;