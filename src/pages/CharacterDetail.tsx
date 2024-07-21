import { useCharacterDetail } from "@/hooks/useCharacters";
import { useParams } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";

export default function CharacterDetail() {
  const { id } = useParams<{ id: string }>();
  const { data, status } = useCharacterDetail(id);

  if (status === "loading")
    return (
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="max-w-md rounded overflow-hidden shadow-lg">
            <Skeleton className="w-full h-100" />
          </div>
          <div>
            <Skeleton className="w-full h-6" />
            <Skeleton className="w-full h-6 mt-4" />
            <Skeleton className="w-full h-6 mt-4" />
            <Skeleton className="w-full h-6 mt-4" />
          </div>
        </div>
      </div>
    );
  if (status === "error") return <div>Error!</div>;

  return (
    <section className="container mx-auto">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="max-w-md rounded overflow-hidden shadow-lg">
          <img
            className="w-full h-100 object-cover"
            src={data.image}
            alt={data.name}
          />
        </div>
        <div>
          <h2>Name: {data.name || "??"}</h2>
          <p>Status: {data.status || "??"}</p>
          <p>Type: {data.type || "??"}</p>
          <p>Species: {data.species || "??"}</p>
          <p>Gender: {data.gender || "??"}</p>
        </div>
      </div>
    </section>
  );
}
