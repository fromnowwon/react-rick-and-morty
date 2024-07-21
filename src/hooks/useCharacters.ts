import { useQuery } from "react-query";
import { useCharacterStore } from "../store/useCharacterStore";
import { fetchCharacters } from "../lib/api";

export const useCharacters = () => {
  const { page } = useCharacterStore();

  return useQuery(["characters", page], () => fetchCharacters(page), {
    keepPreviousData: true,
  });
};
