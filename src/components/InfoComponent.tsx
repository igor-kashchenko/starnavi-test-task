import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { TileCoords } from "../types/TileCoords";

type Props = {
  selectedTile: TileCoords;
};

export const InfoComponent: React.FC<Props> = ({ selectedTile }) => {
  const { row, col } = selectedTile;

  return (
    <Grid
      item
      sx={{
        backgroundColor: "#fbf8e3",
        border: "1px solid #f7ecbe",
        "&:last-child": {
          mb: 0,
        },
      }}
      px={1}
      py={2}
      borderRadius={2}
      mb={2}
    >
      <Typography variant="h6" color={"#a79267"} fontWeight={"bold"}>
        {`${row} row ${col} col`}
      </Typography>
    </Grid>
  );
};
