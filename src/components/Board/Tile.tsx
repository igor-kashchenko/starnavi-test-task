import React, { useContext, useState, useCallback, useEffect } from "react";
import Box from "@mui/material/Box";
import { GameContext } from "../../context/GameContext";

type Props = {
  currentRow: number;
  currentTile: number;
};

export const Tile: React.FC<Props> = React.memo(
  ({ currentRow, currentTile }) => {
    const { setSelectedTiles, selectedMode, isGameStart } =
      useContext(GameContext);

    const [isTileSelected, setIsTileSelected] = useState(false);

    useEffect(() => {
      if (!isGameStart) {
        setIsTileSelected(false);
      }
    }, [isGameStart]);

    const handleToggleTile = useCallback(() => {
      if (!isGameStart) return;

      setIsTileSelected((prev) => !prev);

      setSelectedTiles((prevSelectedTiles) => {
        const tileToRemove = prevSelectedTiles.find(
          (coords) => coords.row === currentRow && coords.col === currentTile
        );

        if (tileToRemove) {
          return prevSelectedTiles.filter((coords) => coords !== tileToRemove);
        } else {
          return [...prevSelectedTiles, { row: currentRow, col: currentTile }];
        }
      });
    }, [currentRow, currentTile, setSelectedTiles, isGameStart]);

    let tileSize = "62px";

    switch (+selectedMode) {
      case 15:
        tileSize = "30px";
        break;
      case 57:
        tileSize = "16px";
        break;
      case 76:
        tileSize = "12px";
        break;
      default:
        tileSize = "62px";
        break;
    }

    return (
      <Box
        width={tileSize}
        height={tileSize}
        boxSizing={"border-box"}
        border={"1px solid black"}
        sx={{
          backgroundColor: isGameStart
            ? isTileSelected
              ? "#03a8f4"
              : "#fff"
            : "#fff",
        }}
        onMouseOver={handleToggleTile}
      />
    );
  }
);
