import { Box, styled, Typography } from "@mui/material"
import React from "react"
import { ButtonPlacement } from "./uxComponents/ButtonPlacement"
import { ButtonColor } from "./uxComponents/ButtonColor"
import { LabelPlacement } from "./uxComponents/LabelPlacement"

const StyledBox = styled(Box)(({ theme }) => ({ paddingBottom: theme.spacing(4) }))

export const UXForms = () => {



  return (<>
    <Typography variant="h3">Which form feels better?</Typography>
    <Typography variant="body1">What I plan to do here is to demonstrated different forms and see how it feels to use them.</Typography>
    <ul>
      <li>The cancel button?</li>
      <li>The lables above, below to the side?</li>
      <li>the Date broken up, input, drop down, or year first</li>
      <li>The set list as autofill, drop down, or radio</li>
      <li>The when to use radio vs check boxes</li>
    </ul>
    <StyledBox><ButtonPlacement /></StyledBox>
    <StyledBox><ButtonColor /></StyledBox>
    <StyledBox><LabelPlacement /></StyledBox>
  </>)
}
