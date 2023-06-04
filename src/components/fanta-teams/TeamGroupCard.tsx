import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { styled } from "@mui/system";
import CardHeaderTitlePoints from "../shared/CardHeaderTitlePoints";

const StyledCardHeader = styled(CardHeader)({
  paddingTop: '0.75rem',
  paddingBottom: '0.75rem',
});

const StyledCardContent = styled(CardContent)({
  paddingTop: 0,
});

const TeamGroupCard = ({ group, showGroupInfo, date, showMultiplier = false }: any) => {
  const filteredScoreEntries = date === "all" ? group.groupScoreEntries : group.groupScoreEntries.filter((entry: any) => entry.date === date);

  return (
    <Card variant="outlined" sx={{ mt: '1rem' }}>
      <StyledCardHeader
          disableTypography
          title={<CardHeaderTitlePoints
          name={group.groupName}
          score={group.groupScore}
          variant="h6"
          color={group.groupColor}
          showMultiplier={showMultiplier}
        />}
      />
      {showGroupInfo && <StyledCardContent>
        {filteredScoreEntries.length > 0 ? (
          filteredScoreEntries.map((entry: any) => (
            <Box key={entry.date}>
              {entry.date}
              {entry.scoreEntries.map((scoreEntry: any) => (
                <Typography key={scoreEntry.id}>{scoreEntry.rule.title}: {scoreEntry.points}</Typography>
              ))}
            </Box>
          ))
        ) : (
          <Typography>Nessun punteggio registrato per questa data</Typography>
        )}
      </StyledCardContent>}
    </Card>
  );
}

export default TeamGroupCard;