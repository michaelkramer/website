import { Grid, Typography, CardContent, CardActions, Button, Card, styled, CardHeader } from "@mui/material"
import React from "react"

const FormButtonPlacement = styled(Card)({
  minHeight: 274
});

const QuestionCardContent = styled(CardContent)(({ theme }) => ({
  paddingBottom: 0
}));

const AnswerSuccessCardContent = styled(CardContent)(({ theme }) => ({
  color: theme.palette.success.light
}));

const AnswerErrorCardContent = styled(CardContent)(({ theme }) => ({
  color: theme.palette.error.light
}));

export const ButtonColor = () => {
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

      <Typography variant="h6">Button Color</Typography>

    </Grid>
    <Grid item xs={6}>

      <FormButtonPlacement>
        <CardHeader title="A" />
        <QuestionCardContent>
          <Typography gutterBottom variant="body1" component="div">Confirm this message.</Typography>
        </QuestionCardContent>
        <CardActions sx={{ justifySelf: "end" }}>
          <Button
            component="button"
            variant="outlined"
            onClick={handleClick}
            id={"no1"}
          >
            No
          </Button>
          <Button
            component="button"
            variant="outlined"
            onClick={handleClick}
            id={"yes1"}
          >
            Yes
          </Button>
        </CardActions>
        {Boolean(answer1) && <AnswerErrorCardContent>
          We're not influencing the user to confirm the message.
        </AnswerErrorCardContent>}
      </FormButtonPlacement>

    </Grid>

    <Grid item xs={6}>

      <FormButtonPlacement>
        <CardHeader title="B" />
        <QuestionCardContent>
          <Typography gutterBottom variant="body1" component="div">Would you be a dear and confirm this message for me?</Typography>
        </QuestionCardContent>
        <CardActions sx={{ justifySelf: "end" }}>
          <Button
            component="button"
            variant="contained"
            color="primary"
            onClick={handleClick}
            id={"no2"}
          >
            No
          </Button>
          <Button
            component="button"
            variant="outlined"
            onClick={handleClick}
            id={"yes2"}
          >
            Yes
          </Button>
        </CardActions>
        {Boolean(answer2) && <AnswerErrorCardContent>
          This prompts the user to lean toward selecting the No button.
        </AnswerErrorCardContent>}
      </FormButtonPlacement>

    </Grid>
    <Grid item xs={6}>

      <FormButtonPlacement>
        <CardHeader title="C" />
        <QuestionCardContent>
          <Typography gutterBottom variant="body1" component="div">Oi! Confirm this blasted message!</Typography>
        </QuestionCardContent>
        <CardActions sx={{ justifySelf: "end" }}>
          <Button
            component="button"
            variant="outlined"
            onClick={handleClick}
            id={"no3"}
          >
            No
          </Button>
          <Button
            component="button"
            variant="contained"
            color="primary"
            onClick={handleClick}
            id={"yes3"}
          >
            Yes
          </Button>
        </CardActions>
        {Boolean(answer3) && <AnswerSuccessCardContent>
          To me, this encourages the user to confirm the message.
        </AnswerSuccessCardContent>}
      </FormButtonPlacement>

    </Grid>
    <Grid item xs={6}>

      <FormButtonPlacement>
        <CardHeader title="D" />
        <QuestionCardContent>
          <Typography gutterBottom variant="body1" component="div">Confirm this message, now!</Typography>
        </QuestionCardContent>
        <CardActions sx={{ justifySelf: "end" }}>
          <Button
            component="button"
            variant="contained"
            color="success"
            onClick={handleClick}
            id={"no4"}
          >
            No
          </Button>
          <Button
            component="button"
            variant="contained"
            color="error"
            onClick={handleClick}
            id={"yes4"}
          >
            Yes
          </Button>
        </CardActions>
        {Boolean(answer4) && <AnswerErrorCardContent>
          This is confusing—RED signifies danger, which will make them hesitate to confirm.
        </AnswerErrorCardContent>}
      </FormButtonPlacement>

    </Grid>


  </Grid>)
}
