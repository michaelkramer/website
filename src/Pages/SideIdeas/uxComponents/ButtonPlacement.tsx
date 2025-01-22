import { Grid, Typography, CardContent, CardActions, Button, Card, styled, CardHeader } from "@mui/material"
import React from "react"

const FormButtonPlacement = styled(Card)({
  minHeight: 299
});

const QuestionCardContent = styled(CardContent)(({ theme }) => ({
  paddingBottom: 0
}));

const AnswerWarningCardContent = styled(CardContent)(({ theme }) => ({
  color: theme.palette.warning.light
}));

const AnswerSuccessCardContent = styled(CardContent)(({ theme }) => ({
  color: theme.palette.success.light
}));

const AnswerErrorCardContent = styled(CardContent)(({ theme }) => ({
  color: theme.palette.error.light
}));
const AnswerErrorDiv = styled('div')(({ theme }) => ({
  color: theme.palette.error.light
}));

export const ButtonPlacement = () => {
  const [answer1, setAnswer1] = React.useState<null | HTMLElement>(null);
  const [answer2, setAnswer2] = React.useState<null | HTMLElement>(null);
  const [answer3, setAnswer3] = React.useState<null | HTMLElement>(null);
  const [answer4, setAnswer4] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const targetId = parseInt(event.currentTarget.id.slice(-1), 10);
    switch (targetId) {
      case 1:
        setAnswer1(answer1 ? null : event.currentTarget);
        break;
      case 2:
        setAnswer2(answer2 ? null : event.currentTarget);
        break;
      case 3:
        setAnswer3(answer3 ? null : event.currentTarget);
        break;
      case 4:
        setAnswer4(answer4 ? null : event.currentTarget);
        break;
    }
  };


  return (<Grid container spacing={2}>
    <Grid item xs={12}>

      <Typography variant="h6">Button Placement</Typography>

    </Grid>
    <Grid item xs={6}>

      <FormButtonPlacement>
        <CardHeader title="A" />
        <QuestionCardContent>
          <Typography gutterBottom variant="body1" component="div">Do these buttons seem well-positioned?</Typography>
        </QuestionCardContent>
        <CardActions>
          <Button
            id={"no1"} type="button" onClick={handleClick}
            variant="text"
          >
            No
          </Button>
          <Button
            id={"yes1"} type="button"
            variant="text"
            onClick={handleClick}
          >
            Yes
          </Button>

        </CardActions>

        {Boolean(answer1) && <AnswerWarningCardContent>
          The placement works but it does not feel right.
        </AnswerWarningCardContent>}

      </FormButtonPlacement>

    </Grid>
    <Grid item xs={6}>

      <FormButtonPlacement>
        <CardHeader title="B" />
        <QuestionCardContent>
          <Typography gutterBottom variant="body1" component="div">Do these buttons feel like they’re in the right spot, or what?</Typography>
        </QuestionCardContent>
        <CardActions>
          <Grid container>
            <Grid item xs={9} sx={{ textAlign: "right" }}>
              {Boolean(answer2) && <AnswerErrorDiv>Stacking creates a lots of white space.</AnswerErrorDiv>}
            </Grid>
            <Grid item xs={3} sx={{ textAlign: "right" }}>
              <Button
                id={"no2"}
                component="button"
                variant="text"
                onClick={handleClick}
              >
                No
              </Button>

            </Grid>
            <Grid item xs={9} />
            <Grid item xs={3} sx={{ textAlign: "right" }}>

              <Button
                id={"yes2"}
                component="button"
                variant="text"
                onClick={handleClick}
              >
                Yes
              </Button>

            </Grid>
          </Grid>
        </CardActions>
      </FormButtonPlacement>

    </Grid>
    <Grid item xs={6}>

      <FormButtonPlacement>
        <CardHeader title="C" />
        <QuestionCardContent>
          <Typography gutterBottom variant="body1" component="div">Would you say these buttons have found their proper home, or are they just loitering aimlessly?</Typography>
        </QuestionCardContent>
        <CardActions>
          <Grid container>
            <Grid item xs={6}>

              <Button
                component="button"
                variant="text"
                onClick={handleClick}
                id={"no3"}
              >
                No
              </Button>

            </Grid>
            <Grid item xs={6} sx={{ textAlign: "right" }}>

              <Button
                component="button"
                variant="text"
                onClick={handleClick}
                id={"yes3"}
              >
                Yes
              </Button>

            </Grid>
          </Grid>
        </CardActions>

        {Boolean(answer3) && <AnswerErrorCardContent>
          These buttons are too far apart.
        </AnswerErrorCardContent>}

      </FormButtonPlacement>

    </Grid>
    <Grid item xs={6}>

      <FormButtonPlacement>
        <CardHeader title="D" />
        <QuestionCardContent>
          <Typography gutterBottom variant="body1" component="div">Do these buttons sit where they ought, or are they ill-placed?</Typography>
        </QuestionCardContent>
        <CardActions sx={{ justifySelf: "end" }}>
          <Button
            component="button"
            variant="text"
            onClick={handleClick}
            id={"no4"}
          >
            No
          </Button>
          <Button
            component="button"
            variant="text"
            onClick={handleClick}
            id={"yes4"}
          >
            Yes
          </Button>
        </CardActions>
        {Boolean(answer4) && <AnswerSuccessCardContent>
          To me this feel best. I read the question, and the options are conveniently placed at the end, right where my eyes naturally finish reading.
        </AnswerSuccessCardContent>}
      </FormButtonPlacement>

    </Grid>

  </Grid>)
}
