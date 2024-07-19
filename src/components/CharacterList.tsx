import { useCharacters } from "../hooks/useCharacters";
import { Character } from "../types/CharacterTypes";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const { data, status } = useCharacters();

  if (status === "loading") return <div>Loading...</div>;
  if (status === "error") return <div>Error!</div>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.results.map((character: Character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}
