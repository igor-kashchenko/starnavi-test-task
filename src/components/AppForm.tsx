import React, { useContext } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { GameContext } from "../context/GameContext";

export const AppForm: React.FC = () => {
  const {
    selectedMode,
    gameModes,
    setSelectedMode,
    setIsGameStart,
    isGameStart,
    setSelectedTiles,
  } = useContext(GameContext);

  const handleSelectMode = (event: SelectChangeEvent) => {
    setSelectedMode(event.target.value);
  };

  const handleToggleGame = () => {
    setIsGameStart((prev) => !prev);
    setSelectedTiles([]);
  };

  return (
    <Grid container mb={2}>
      <FormControl sx={{ flexGrow: 1, mr: 2 }}>
        <InputLabel id="game-modes">Pick Mode</InputLabel>

        <Select
          labelId="game-modes"
          label="Pick Mode"
          value={selectedMode}
          onChange={handleSelectMode}
        >
          {gameModes.map((mode) => (
            <MenuItem key={mode.id} value={mode.field}>
              {mode.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button
        variant="contained"
        sx={{ width: "20%" }}
        onClick={handleToggleGame}
        disabled={!selectedMode}
      >
        {isGameStart ? "End" : "Start"}
      </Button>
    </Grid>
  );
};
