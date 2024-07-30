import { useCharacters } from "../hooks/useCharacters";
import { Character } from "../types/CharacterTypes";
import CharacterCard from "./CharacterCard";
import { Skeleton } from "./ui/skeleton";
import Pagination from "../components/Pagination";

export default function CharacterList() {
  const { data, error, isLoading } = useCharacters();

  if (isLoading)
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="max-w-sm rounded overflow-hidden shadow-lg"
          >
            <Skeleton className="w-full h-52" />
            <div className="h-52 px-3 py-2">
              <Skeleton className="w-full h-6 mb-2" />
              <Skeleton className="w-full h-4" />
            </div>
          </div>
        ))}
      </div>
    );

  if (error)
    return (
      <div className="text-center text-red-500">Error loading character!</div>
    );

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.results.map((character: Character, index: number) => (
          <CharacterCard
            key={character.id}
            character={character}
            index={index}
            status={status}
          />
        ))}
      </div>
      <Pagination />
    </>
  );
}
