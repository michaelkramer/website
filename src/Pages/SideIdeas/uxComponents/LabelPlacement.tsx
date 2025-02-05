import { Grid, Typography, CardHeader, Card, styled, CardContent, TextField } from "@mui/material";
import React from "react";

const FormPlacement = styled(Card)({
  minHeight: 274
});

const Label1 = styled("label")({
  paddingRight: 12
})


export const LabelPlacement = () => {

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
