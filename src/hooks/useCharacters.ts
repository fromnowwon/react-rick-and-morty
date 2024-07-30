import { useQuery } from "@tanstack/react-query";
import { useCharacterStore } from "../store/useCharacterStore";
import { fetchCharacterDetail, fetchCharacters } from "../lib/api";

export const useCharacters = () => {
  const { page } = useCharacterStore();
  const queryKey = ["characters", page];
  const queryFn = () => fetchCharacters(page);
  const options = {
    queryKey,
    queryFn,
    keepPreviousData: true,
  };

  return useQuery(options);
};

export const useCharacterDetail = (id: string | undefined) => {
  const queryKey = ["characterDetail", id];
  const queryFn = () => fetchCharacterDetail(id as string);
  const options = {
    queryKey,
    queryFn,
    enabled: !!id,
  };

  return useQuery(options);
};
