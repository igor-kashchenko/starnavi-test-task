import React, { useContext } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { GameContext } from "../context/GameContext";
import { Breakpoint } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

export const AppContainer: React.FC<Props> = ({ children }) => {
  const { selectedMode } = useContext(GameContext);

  let maxWidth: false | Breakpoint = "lg";

  switch (+selectedMode) {
    case 3:
    case 5: {
      maxWidth = "md";
      break;
    }
    case 10: {
      maxWidth = "xl";
      break;
    }
    case 15: {
      maxWidth = "lg";
      break;
    }
    case 57:
    case 76: {
      maxWidth = false;
      break;
    }
  }

  return (
    <Container
      sx={{ minHeight: "100vh", py: 2, overflow: "auto" }}
      maxWidth={maxWidth}
    >
      <Grid container>{children}</Grid>
    </Container>
  );
};
