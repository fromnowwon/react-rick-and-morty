import { useCharacterStore } from "../store/useCharacterStore";

export default function Pagination() {
  const { page, setPage } = useCharacterStore();

  return (
    <div className="flex justify-center my-4">
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className="px-4 py-2 m-2 bg-blue-500 text-white rounded"
      >
        Previous
      </button>
      <span className="px-4 py-2 m-2">{page}</span>
      <button
        onClick={() => setPage(page + 1)}
        className="px-4 py-2 m-2 bg-blue-500 text-white rounded"
      >
        Next
      </button>
    </div>
  );
}
