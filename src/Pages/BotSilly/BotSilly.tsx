import { Box, Button, Divider, Paper, Stack, TextField, Typography } from "@mui/material";
import { range } from "lodash";
import React from "react";

export const BotSilly = () => {

  const beeps = ["beep", "bep", "whirl", "boop", "bop", "chip", "churp", "..."];

  const [question, setQuestion] = React.useState<null | string>(null);
  const [response, setResponse] = React.useState<null | string>(null);

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h2">AI Bot</Typography>
      <Typography variant="body1">This is a silly AI bot to help you with life.</Typography>
      <Divider variant="fullWidth" sx={{ mt: 2, mb: 2 }} />
      <Stack direction="row">

        <Box>
          <Box sx={{ width: 300 }}>
            <TextField
              id="question"
              label="Question"
              multiline
              rows={4}
              value={question}
              onChange={(e) => {
                setQuestion(e.target.value)
              }}
              sx={{ width: '100%' }}
            />
          </Box>
          <Box sx={{ textAlign: "right" }}>
            <Button variant="text" onClick={(e) => {
              if (question !== "") {
                const rand = (Math.random() * (10));
                const response = range(0, rand).map((index) => {
                  return beeps[Math.floor(Math.random() * (beeps.length))];
                });
                setResponse(response.join(' '));
                setQuestion('');
              }
            }}>Submit</Button>
          </Box>
        </Box>
        <Box sx={{ ml: 3 }}>
          {response}
        </Box>
      </Stack>


    </Paper>
  );
};

