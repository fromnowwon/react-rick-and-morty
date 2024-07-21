import { useQuery } from "react-query";
import { useCharacterStore } from "../store/useCharacterStore";
import { fetchCharacterDetail, fetchCharacters } from "../lib/api";

export const useCharacters = () => {
  const { page } = useCharacterStore();

  return useQuery(["characters", page], () => fetchCharacters(page), {
    keepPreviousData: true,
  });
};

export const useCharacterDetail = (id: string | undefined) => {
  return useQuery(
    ["characterDetail", id],
    () => fetchCharacterDetail(id as string),
    {
      enabled: !!id,
    }
  );
};
