import { Dispatch, SetStateAction } from "react";
import { GameModes } from "./GameModes"
import { TileCoords } from "./TileCoords";

export type GameContext = {
  gameModes: GameModes[],
  selectedMode: string,
  setSelectedMode: Dispatch<SetStateAction<string>>;
  selectedTiles: TileCoords[];
  setSelectedTiles: Dispatch<React.SetStateAction<TileCoords[]>>;
  isGameStart: boolean;
  setIsGameStart: Dispatch<React.SetStateAction<boolean>>;
}