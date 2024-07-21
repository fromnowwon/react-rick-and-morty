import { Link } from "react-router-dom";
import { Character } from "../types/CharacterTypes";
import { MotionDiv } from "./MotionDiv";

interface CharacterCardProps {
  character: Character;
  index: number;
  status: string;
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function CharacterCard({
  character,
  index,
}: CharacterCardProps) {
  return (
    <Link
      to={`/character/${character.id}`}
      className="group cursor-pointer dark:bg-primary sm:hover:shadow-slate-300 sm:shadow-md sm:border sm:border-slate-200 sm:m-3 transition-all hover:scale-105 transform duration-300"
    >
      <MotionDiv
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{
          ease: "easeInOut",
          delay: index * 0.1,
          duration: 0.25,
        }}
      >
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full h-52 object-cover"
            src={character.image}
            alt={character.name}
          />
          <div className="flex flex-col justify-center h-20 px-3">
            <p className="font-bold text-xl mb-1 truncate">{character.name}</p>
            <p className="text-sm">{character.species}</p>
          </div>
        </div>
      </MotionDiv>
    </Link>
  );
}
