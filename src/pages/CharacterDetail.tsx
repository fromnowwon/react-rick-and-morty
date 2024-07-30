import { useCharacterDetail } from "@/hooks/useCharacters";
import { useParams } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";

export default function CharacterDetail() {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useCharacterDetail(id);

  if (isLoading)
    return (
      <div className="container mx-auto py-6">
        <div className="flex flex-col items-center gap-6">
          <div className="max-w-md w-full flex flex-col items-center">
            <Skeleton className="w-full h-6" />
            <Skeleton className="w-full h-6 mt-4" />
          </div>
          <div className="max-w-md w-full h-80 rounded overflow-hidden shadow-lg">
            <Skeleton className="w-full h-full" />
          </div>
          <div className="max-w-md w-full flex-1 space-y-4">
            <Skeleton className="w-full h-6" />
            <Skeleton className="w-full h-6 mt-4" />
            <Skeleton className="w-full h-6 mt-4" />
            <Skeleton className="w-full h-6 mt-4" />
          </div>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="text-center text-red-500">Error loading character!</div>
    );

  return (
    <section className="container mx-auto py-6">
      <div className="flex flex-col items-center gap-6">
        <div className="max-w-md w-full flex flex-col items-center">
          <h2 className="text-3xl font-bold">{data.name || "Unknown"}</h2>
          <p className="text-lg">
            {data.status === "Alive" && (
              <>
                <span className="inline-block mr-2 rounded-full w-3 h-3 bg-green-500"></span>
                <span className="font-semibold">{data.status}</span>
              </>
            )}
            {data.status === "Dead" && (
              <>
                <span className="inline-block mr-2 rounded-full w-3 h-3 bg-red-500"></span>
                <span className="font-semibold">{data.status}</span>
              </>
            )}
            {data.status === "unknown" && (
              <>
                <span className="inline-block mr-2 rounded-full w-3 h-3 bg-gray-300"></span>
                <span className="font-semibold">Unknown</span>
              </>
            )}
          </p>
        </div>
        <div className="max-w-md w-full h-80 rounded overflow-hidden shadow-lg">
          <img
            className="w-full h-full object-cover"
            src={data.image}
            alt={data.name}
          />
        </div>
        <div className="max-w-md w-full flex-1 space-y-4">
          <p className="text-xl">
            <span className="text-lg text-gray-500 dark:text-gray-400">
              Type:{" "}
            </span>
            {data.type || "Unknown"}
          </p>
          <p className="text-xl">
            <span className="text-lg text-gray-500 dark:text-gray-400">
              Species:{" "}
            </span>
            {data.species || "Unknown"}
          </p>
          <p className="text-xl">
            <span className="text-lg text-gray-500 dark:text-gray-400">
              Gender:{" "}
            </span>
            {data.gender || "Unknown"}
          </p>
          <p className="text-lg">
            <span className="text-gray-500 dark:text-gray-400">
              Last known location:{" "}
            </span>
            {data.location.name || "Unknown"}
          </p>
          <p className="text-xl">
            <span className="text-lg text-gray-500 dark:text-gray-400">
              First seen in:{" "}
            </span>
            {data.origin.name || "Unknown"}
          </p>
        </div>
      </div>
    </section>
  );
}
