import { FormControlLabel, Grid, Switch, Typography } from "@mui/material";

const AccountData = ({ firstName, lastName, isResp, group, resp }: any) => {
  return (
    <Grid container justifyContent="flex-start" spacing={2} sx={{ ml: { xs: 0 }, mb: 2 }}>
      <Grid item xs={12} md={8}>
        <Typography variant="overline">Nome</Typography><Typography variant="body1">{firstName}</Typography>
      </Grid>
      <Grid item xs={12} md={8}>
        <Typography variant="overline">Cognome</Typography><Typography variant="body1">{lastName}</Typography>
      </Grid>
      <Grid item xs={12} md={8}>
        <FormControlLabel control={<Switch color="secondary" />} label="Sono un responsabile" />
      </Grid>
      <Grid item xs={12}>
      </Grid>
    </Grid>
  );
}

export default AccountData;