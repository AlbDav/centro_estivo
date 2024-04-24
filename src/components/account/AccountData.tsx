import { Box, Grid, Typography } from "@mui/material";
import GroupRespAvatar from "../shared/GroupRespAvatar";
import {  useMemo } from "react";

const AccountData = ({ firstName, lastName, isResp, group, resp }: any) => {
  const groupOrRespName = useMemo(() => {
    if (isResp) {
      if (resp) {
        return `${resp.firstName} ${resp.lastName}`;
      } else return ''
    } else {
      if (group) {
        return group.name;
      } else return '';
    }
  }, [group, resp]);

  const groupOrRespColor = useMemo(() => {
    if (isResp) {
      return process.env.RESP_COLOR;
    } else {
      return group ? group.color : '#e2e2e2';
    }
  }, [group, resp]);

  return (
    <Grid container justifyContent="flex-start" spacing={2} sx={{ ml: { xs: 0 }, mb: 2 }}>
      <Grid item xs={12} md={8}>
        <Typography variant="overline">Nome</Typography><Typography variant="body1">{firstName}</Typography>
      </Grid>
      <Grid item xs={12} md={8}>
        <Typography variant="overline">Cognome</Typography><Typography variant="body1">{lastName}</Typography>
      </Grid>
      {(group || resp) && <Grid item xs={12}>
        <Typography variant="overline">{isResp ? 'Responsabile' : 'Gruppo'}</Typography>
        <Box display="flex" alignItems="center">
          <GroupRespAvatar color={groupOrRespColor} isResp={isResp} />
          <Typography mb={-0.25} mr={0.5}>
            {groupOrRespName}
          </Typography>
        </Box>
      </Grid>}
    </Grid>
  );
}

export default AccountData;