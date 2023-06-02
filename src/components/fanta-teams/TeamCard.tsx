// components/TeamCard.js
import { Box, Button, Card, CardActions, CardContent, CardHeader, Chip, Grid, IconButton, Link, Typography } from '@mui/material';
import PointsTypography from '../shared/PointsTypography';
import { styled } from '@mui/system';
import { useRef, useState } from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const StyledCardHeader = styled(CardHeader)({
  paddingTop: '0.75rem',
  paddingBottom: '0.75rem',
});

const StyledCardContent = styled(CardContent)({
  paddingTop: 0,
});

const TeamCard = ({ team }: any) => {
  const [showTeamInfo, setShowTeamInfo] = useState(false);
  const cardRef = useRef<any>(null);

  const toggleCardContent = () => {
    setShowTeamInfo(!showTeamInfo);
    cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }

  return (
    <Card ref={cardRef} variant="elevation">
      <CardHeader
        sx={{ px: '1.75rem' }}
        title={
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={10}>
              <Typography variant="h5">{team.teamName}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Box display="flex" justifyContent="end">
                <PointsTypography variant="h5" points={team.teamScore} pointDescription={team.teamScore} />
              </Box>
            </Grid>
          </Grid>
        }
      />
      <StyledCardContent>
        <Card variant="outlined">
          <StyledCardHeader
            title={
              <Grid container justifyContent="space-between" alignItems="center">
                <Grid item xs={10}>
                  <Typography variant="h6">{team.leaderGroup.groupName} <Chip label="x2" size="small" color="secondary" sx={{ color: "white" }} /></Typography>
                </Grid>
                <Grid item xs={2}>
                  <Box display="flex" justifyContent="end">
                    <PointsTypography variant="h6" points={team.leaderGroup.groupScore} pointDescription={team.leaderGroup.groupScore} />
                  </Box>
                </Grid>
              </Grid>
            }
          />
          {showTeamInfo && <StyledCardContent>
            {team.leaderGroup.groupScoreEntries.map((entry: any) => (
              <Typography key={entry.date}>
                {entry.date}
                {entry.scoreEntries.map((scoreEntry: any) => (
                  <Typography key={scoreEntry.id}>{scoreEntry.rule.title}: {scoreEntry.points}</Typography>
                ))}
              </Typography>
            ))}
          </StyledCardContent>}
        </Card>
        {team.groups.map((group: any) => (
          <Card variant="outlined" key={group.groupName} sx={{ mt: '1rem' }}>
            <StyledCardHeader
              title={
                <Grid container justifyContent="space-between" alignItems="center">
                  <Grid item xs={10}>
                    <Typography variant="h6">{group.groupName}</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Box display="flex" justifyContent="end">
                      <PointsTypography variant="h6" points={group.groupScore} pointDescription={group.groupScore} />
                    </Box>
                  </Grid>
                </Grid>
              }
            />
            {showTeamInfo && <StyledCardContent>
              {group.groupScoreEntries.map((entry: any) => (
                <Typography key={entry.date}>
                  {entry.date}
                  {entry.scoreEntries.map((scoreEntry: any) => (
                    <Typography key={scoreEntry.id}>{scoreEntry.rule.title}: {scoreEntry.points}</Typography>
                  ))}
                </Typography>
              ))}
            </StyledCardContent>}
          </Card>
        ))}
      </StyledCardContent>
      <CardActions>
        <Box display="flex" justifyContent="center" width={1}>
          <Button
            variant="text"
            color="secondary"
            onClick={toggleCardContent}
            endIcon={showTeamInfo ? <ExpandLess /> : <ExpandMore />}
            disableRipple
            sx={{
              '&:hover': {
                backgroundColor: 'transparent',
              },
            }}
          >
            {showTeamInfo ? 'Nascondi' : 'Mostra tutto'}
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default TeamCard;