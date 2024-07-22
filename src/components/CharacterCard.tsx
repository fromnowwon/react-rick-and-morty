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
          <div className="h-60">
            <img
              className="w-full h-full object-cover"
              src={character.image}
              alt={character.name}
            />
          </div>
          <div className="flex flex-col justify-center h-20 px-3">
            <p className="font-bold text-xl mb-1 truncate">
              {character.status === "Alive" && (
                <span className="inline-block mr-2 rounded-full w-3 h-3 bg-green-500"></span>
              )}
              {character.status === "Dead" && (
                <span className="inline-block mr-2 rounded-full w-3 h-3 bg-red-500"></span>
              )}
              {character.status === "unknown" && (
                <span className="inline-block mr-2 rounded-full w-3 h-3 bg-gray-300"></span>
              )}
              {character.name}
            </p>
            <p className="text-sm">{character.species}</p>
          </div>
        </div>
      </MotionDiv>
    </Link>
  );
}
