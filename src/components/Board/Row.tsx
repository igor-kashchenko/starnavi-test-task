import React, { useContext } from "react";
import { Tile } from "./Tile";
import Grid from "@mui/material/Grid";
import { GameContext } from "../../context/GameContext";

type Props = {
  currentRow: number;
};

export const Row: React.FC<Props> = ({ currentRow }) => {
  const { selectedMode } = useContext(GameContext);

  return (
    <Grid container>
      {Array(+selectedMode)
        .fill(true)
        .map((_, i) => (
          <Tile key={i} currentRow={currentRow} currentTile={i + 1} />
        ))}
    </Grid>
  );
};
