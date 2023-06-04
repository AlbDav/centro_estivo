import { Box, Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import CardHeaderTitlePoints from "../shared/CardHeaderTitlePoints";
import RuleDisplay from "../shared/RuleDisplay";
import { format } from "date-fns";
import { it } from "date-fns/locale";

const StyledCardHeader = styled(CardHeader)({
  paddingTop: '0.75rem',
  paddingBottom: '0.75rem',
});

const StyledCardContent = styled(CardContent)({
  paddingTop: 0,
});

function capitalizeFirstLetter(input: string) {
  return input.charAt(0).toUpperCase() + input.slice(1);
}

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
          filteredScoreEntries.map((entry: any, index: number) => (
            <Grid container key={entry.date} paddingTop={index === 0 ? 0 : 1.5} paddingX={0.5}>
              <Grid item xs={12}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.125rem' }}>{capitalizeFirstLetter(format(new Date(entry.date), 'eeee d MMMM', { locale: it }))}:</Typography>
              </Grid>
              {entry.scoreEntries.map((scoreEntry: any) => (
                <RuleDisplay rule={scoreEntry.rule} key={scoreEntry.rule.id} hideDescription />
              ))}
            </Grid>
          ))
        ) : (
          <Box paddingX={0.5}>
            <Typography>Nessun punteggio registrato per questa data</Typography>
          </Box>
        )}
      </StyledCardContent>}
    </Card>
  );
}

export default TeamGroupCard;