import React, { useContext } from "react";
import { Row } from "./Row";
import Grid from "@mui/material/Grid";
import { GameContext } from "../../context/GameContext";

export const Board: React.FC = () => {
  const { selectedMode } = useContext(GameContext);

  return (
    <Grid item width={"fit-content"} border={"1px solid #000"}>
      {Array(+selectedMode)
        .fill(true)
        .map((_, i) => (
          <Row key={i} currentRow={i + 1} />
        ))}
    </Grid>
  );
};
