import { Grid, Typography, CardHeader, CardActions, Button, Card, styled, CardContent, TextField } from "@mui/material";
import React from "react";

const FormPlacement = styled(Card)({
  minHeight: 274
});

const Label1 = styled("label")({
  paddingRight: 12
})

const FieldSetA = styled("fieldset")({
  textAlign: "left",
  position: "absolute",
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: "0 8px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: 1,
  overflow: "hidden",
  minWidth: "0%",
  borderColor: "rgba(0, 0, 0, 0.23)",
})

const LegendA = styled("legend")({
  float: "unset",
  overflow: "hidden",
  display: "block",
  width: "auto",
  padding: 0,
  height: 11,
  fontSize: "0.75em",
  visibility: "hidden",
  maxWidth: "100%",
  // transition: "max-width 100ms cubic-bezier(0.0, 0, 0.2, 1) 50ms",
  whiteSpace: "nowrap",
})

const LegendSpanA = styled("span")({
  paddingLeft: 5,
  paddingRight: 5,
  display: "inline-block",
  opacity: "0",
  visibility: "visible",
})

export const LabelPlacement = () => {
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

      <Typography variant="h6">Where to Place the Field Label</Typography>

    </Grid>
    <Grid item xs={12}>

      <FormPlacement>
        <CardHeader title="A" />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="body1">Placing the label beside the Field</Typography>
            </Grid>
            <Grid item xs={6}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Label1 htmlFor="input1">Field Name</Label1>

                <TextField variant="outlined" type="text" name="input1" id="input1" />
              </div>
            </Grid>


            <Grid item xs={6}>
              <Typography variant="body1">Placing the label above the Field</Typography>
            </Grid>
            <Grid item xs={6}>
              <div>
                <Label1 htmlFor="input1">Field Name</Label1>
              </div>
              <TextField variant="outlined" type="text" name="input1" id="input1" />
            </Grid>

            <Grid item xs={6}>
              <Typography variant="body1">Placing the label below the Field</Typography>
            </Grid>
            <Grid item xs={6}>

              <TextField variant="outlined" type="text" name="input1" id="input1" />
              <div>
                <Label1 htmlFor="input1">Field Name</Label1>
              </div>
            </Grid>

            <Grid item xs={6}>
              <Typography variant="body1">Placing the label as Placeholder the Field</Typography>
            </Grid>
            <Grid item xs={6}>

              <TextField variant="outlined" type="text" name="input1" id="input1" placeholder="Field Name" />
            </Grid>

          </Grid>
        </CardContent>
      </FormPlacement>

    </Grid>
  </Grid>);
}
