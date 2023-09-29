import axios from "axios";
import { GameModes } from "../types/GameModes";

const API_URL = import.meta.env.VITE_API_ENDPOINT;

export const fetchAppModels = async (): Promise<GameModes[]> => {
  try {
    const response = await axios.get(API_URL);

    return response.data;
  } catch (error) {
    console.log(error);
    throw error
  }
}