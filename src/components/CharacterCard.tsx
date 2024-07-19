import { Character } from "../types/CharacterTypes";

interface CharacterCardProps {
  character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  return <div>CharacterCard</div>;
}
