// components/TeamCard.js
import { Box, Button, Card, CardActions, CardContent, CardHeader, Chip, Grid, IconButton, Link, Typography } from '@mui/material';
import PointsTypography from '../shared/PointsTypography';
import { styled } from '@mui/system';
import { useRef, useState } from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import CardHeaderTitlePoints from '../shared/CardHeaderTitlePoints';

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
    if (cardRef.current !== null) {
      const topOffset = cardRef.current.getBoundingClientRect().top + window.pageYOffset - 74;
      window.scrollTo({ top: topOffset });
    }
  }
  console.log(team);

  return (
    <Card ref={cardRef} variant="elevation">
      <CardHeader
        sx={{ px: '1.75rem' }}
        title={<CardHeaderTitlePoints
          name={team.teamName}
          score={team.teamScore}
          variant="h5"
        />}
      />
      <StyledCardContent>
        <Card variant="outlined">
          <StyledCardHeader
            disableTypography
            title={<CardHeaderTitlePoints
              name={team.leaderGroup.groupName}
              score={team.leaderGroup.groupScore}
              variant="h6"
              color={team.leaderGroup.groupColor}
              showMultiplier
            />}
          />
          {showTeamInfo && <StyledCardContent>
            {team.leaderGroup.groupScoreEntries.map((entry: any) => (
              <Box key={entry.date}>
                {entry.date}
                {entry.scoreEntries.map((scoreEntry: any) => (
                  <Typography key={scoreEntry.id}>{scoreEntry.rule.title}: {scoreEntry.points}</Typography>
                ))}
              </Box>
            ))}
          </StyledCardContent>}
        </Card>
        {team.groups.map((group: any) => (
          <Card variant="outlined" key={group.groupName} sx={{ mt: '1rem' }}>
            <StyledCardHeader
              disableTypography
              title={<CardHeaderTitlePoints
                  name={group.groupName}
                  score={group.groupScore}
                  variant="h6"
                  color={group.groupColor}
                />}
            />
            {showTeamInfo && <StyledCardContent>
              {group.groupScoreEntries.map((entry: any) => (
                <Box key={entry.date}>
                  {entry.date}
                  {entry.scoreEntries.map((scoreEntry: any) => (
                    <Typography key={scoreEntry.id}>{scoreEntry.rule.title}: {scoreEntry.points}</Typography>
                  ))}
                </Box>
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