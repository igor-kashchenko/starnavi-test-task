import { createContext } from "react";
import { GameContext as GameContextType } from "../types/GameContext";

const defaultValues = {
  gameModes: [],
  selectedMode: "",
  setSelectedMode: () => {},
  isTileSelected: false,
  setIsTileSelected: () => {},
  selectedTiles: [],
  setSelectedTiles: () => {},
  isGameStart: false,
  setIsGameStart: () => {},
};

export const GameContext = createContext<GameContextType>(defaultValues);
