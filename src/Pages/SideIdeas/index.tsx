import React from "react";
import {
  useNavigate,
  Outlet,
  useOutlet
} from "react-router-dom";
import Icon from "../../Common/Icons";
import EslintFacepalmIcon from "../../Common/Icons/eslint-facepalm";
import { Typography, Card, Button, CardContent, CardActions, CardMedia, styled, Paper, Box, ImageList, ImageListItem } from "@mui/material";
import { useSelector } from "react-redux";
import { selectSettings } from "../../State/Settings/selectors";
import { ROUTES } from "../../constants";

const CarMediaStyled = styled(CardMedia)(({ theme }) => ({
  textAlign: "center",
  paddingTop: theme.spacing()
}));


export const SideIdeas = ({ classes = { root: "", } }: any) => {
  const history = useNavigate();
  const checkOutlet = useOutlet();
  const { iconTheme } = useSelector(selectSettings);
  return (
    <div>

      <Typography variant="h3" mb={4}>Small Side Projects I've done.</Typography>

      {/* <Grid container spacing={2}>
        <Grid item xs={6}> */}
      <ImageList variant="standard" cols={3} gap={8} sx={{ p: 1 }}>
        <ImageListItem>
          <Card>
            <CarMediaStyled>
              <EslintFacepalmIcon />
            </CarMediaStyled>
            <CardActions>
              <Button
                component="a"
                variant="text"
                startIcon={<Icon theme={iconTheme} name={"Info"} />}
                onClick={() => history(ROUTES.SIDE_ESLINT)}
              >
                Info
              </Button>
              <Button
                component="a"
                variant="text"
                startIcon={<Icon theme={iconTheme} name={"Github"} />}
                href={"https://github.com/michaelkramer/eslint-plugin-facepalm"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </Button>

            </CardActions>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">eslint-plugin-facepalm</Typography>
              <Typography variant="body2" color="text.secondary">eslint-plugins are really helpful, eslint-plugin-facepalm is designed
                to just present you with cleaner code. By warning you when you left
                some debug code.</Typography>
            </CardContent>
          </Card>
        </ImageListItem>
        <ImageListItem>
          {/* </Grid>
        <Grid item xs={6}> */}
          <Card>
            <CardActions>
              <Button
                component="a"
                variant="text"
                startIcon={<Icon theme={iconTheme} name={"Info"} />}
                onClick={() => history(ROUTES.SIDE_LOOPTEST)}
              >
                Info
              </Button>
            </CardActions>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">Loop Test</Typography>
              <Typography variant="body2" color="text.secondary">Which loop is best to sorting and selecting the lowest numbers from 2 different Arrays.</Typography>
            </CardContent>
          </Card>
        </ImageListItem>
        <ImageListItem>
          {/* </Grid>
        <Grid item xs={6}> */}
          <Card>
            <CardActions>
              <Button
                component="a"
                variant="text"
                startIcon={<Icon theme={iconTheme} name={"Info"} />}
                onClick={() => history(ROUTES.SIDE_GRPC)}
              >
                Info
              </Button>
            </CardActions>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">gRpc Code</Typography>
            </CardContent>
          </Card>
          {/* </Grid>
      </Grid> */}
        </ImageListItem>
        <ImageListItem>
          <Card>
            <CardActions>
              <Button
                component="a"
                variant="text"
                startIcon={<Icon theme={iconTheme} name={"Info"} />}
                onClick={() => history(ROUTES.SIDE_UX)}
              >
                Info
              </Button>
            </CardActions>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">Which form is better?</Typography>
            </CardContent>
          </Card>
        </ImageListItem>
      </ImageList>
      {checkOutlet && <Paper>
        <Box m={2} p={1}>
          <Outlet />
        </Box>
      </Paper>}

    </div >
  );
};
