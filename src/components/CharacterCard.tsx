import { Character } from "../types/CharacterTypes";

interface CharacterCardProps {
  character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={character.image} alt={character.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{character.name}</div>
      </div>
    </div>
  );
}
