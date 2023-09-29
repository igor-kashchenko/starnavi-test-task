import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { AppContainer } from "./components/AppContainer";
import { Board } from "./components/Board/Board";
import { AppForm } from "./components/AppForm";
import Box from "@mui/material/Box";
import { fetchAppModels } from "./utils/fetchAppModes";
import { GameModes } from "./types/GameModes";
import { GameContext } from "./context/GameContext";
import { InfoComponent } from "./components/InfoComponent";
import Typography from "@mui/material/Typography";
import { TileCoords } from "./types/TileCoords";

export const App: React.FC = () => {
  const [gameModes, setGameModes] = useState<GameModes[]>([]);
  const [selectedMode, setSelectedMode] = useState("");
  const [selectedTiles, setSelectedTiles] = useState<TileCoords[]>([]);
  const [isGameStart, setIsGameStart] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    const getGameModes = async () => {
      try {
        const response = await fetchAppModels();
        setGameModes(response);
        setFetchError(null);
      } catch (error) {
        console.error("Error fetching game modes:", error);
        setFetchError(
          "An error occurred while fetching game modes. Please try again later."
        );
      }
    };

    getGameModes();
  }, []);

  return (
    <GameContext.Provider
      value={{
        gameModes,
        selectedMode,
        setSelectedMode,
        selectedTiles,
        setSelectedTiles,
        isGameStart,
        setIsGameStart,
      }}
    >
      <AppContainer>
        <Grid item xs={6}>
          <Box width={selectedMode ? "fit-content" : "100%"}>
            <AppForm />

            {selectedMode && <Board />}

            {fetchError && (
              <Typography color={"error"}>{fetchError}</Typography>
            )}
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="h3" textAlign={"center"} mb={2}>
            Hover Squares
          </Typography>

          {selectedTiles && (
            <Box sx={{ overflowY: "auto", height: "500px" }}>
              {selectedTiles.map((coords) => (
                <InfoComponent
                  selectedTile={coords}
                  key={`${coords.row}-${coords.col}`}
                />
              ))}
            </Box>
          )}
        </Grid>
      </AppContainer>
    </GameContext.Provider>
  );
};
