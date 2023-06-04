import { Box, Button, Card, CardActions, CardContent, CardHeader, Grid, MenuItem, Select } from '@mui/material';
import { styled } from '@mui/system';
import { useEffect, useRef, useState } from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import CardHeaderTitlePoints from '../shared/CardHeaderTitlePoints';
import TeamGroupCard from './TeamGroupCard';

const StyledCardContent = styled(CardContent)({
  paddingTop: 0,
});

const TeamCard = ({ team }: any) => {
  const [showTeamInfo, setShowTeamInfo] = useState(false);
  const [selectedDate, setSelectedDate] = useState('all');
  const cardRef = useRef<any>(null);

  const toggleCardContent = () => {
    setShowTeamInfo(!showTeamInfo);
    if (cardRef.current !== null) {
      const topOffset = cardRef.current.getBoundingClientRect().top + window.pageYOffset - 74;
      window.scrollTo({ top: topOffset });
    }
  }

  const handleDateChange = (event: any) => {
    setSelectedDate(event.target.value);
  };

  useEffect(() => {
	if (team.dates.length > 0) setSelectedDate(team.dates[0])
  }, [team.dates])

  return (
    <Card ref={cardRef} variant="elevation">
      <CardHeader
        sx={{ px: '1.75rem', pb: '0.5rem' }}
        title={<CardHeaderTitlePoints
          name={team.teamName}
          score={team.teamScore}
          variant="h5"
        />}
      />
      <StyledCardContent>
        {showTeamInfo &&
          <Grid container justifyContent="center">
            <Grid item xs={12} md={6}>
              <Select
              fullWidth
                value={selectedDate}
                onChange={handleDateChange}
              >
                <MenuItem value="all">Tutte le date</MenuItem>
                {team.dates.map((date: string) => (
                  <MenuItem key={date} value={date}>{date}</MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>}
          <TeamGroupCard group={team.leaderGroup} showMultiplier showGroupInfo={showTeamInfo} date={selectedDate} />
        {team.groups.map((group: any) => (
          <TeamGroupCard key={group.groupId} group={group} showGroupInfo={showTeamInfo} date={selectedDate} />
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