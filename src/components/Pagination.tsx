import { CgArrowLeft, CgArrowRight } from "react-icons/cg";
import { useCharacterStore } from "../store/useCharacterStore";

export default function Pagination() {
  const { page, setPage } = useCharacterStore();

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  return (
    <div className="flex justify-center items-center my-4">
      <button
        onClick={handlePrevious}
        disabled={page === 1}
        className={`flex items-center justify-center w-12 h-12 m-2 rounded-full shadow-md text-lg transition-all ${
          page === 1
            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
            : "bg-primary text-white hover:bg-primary-dark hover:shadow-lg"
        }`}
      >
        <CgArrowLeft />
      </button>
      <span className="flex items-center justify-center text-lg font-semibold px-4 py-2 mx-3 border rounded-lg">
        {page}
      </span>
      <button
        onClick={handleNext}
        className={`flex items-center justify-center w-12 h-12 m-2 rounded-full shadow-md text-lg transition-all ${
          !page
            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
            : "bg-primary text-white hover:bg-primary-dark hover:shadow-lg"
        }`}
      >
        <CgArrowRight />
      </button>
    </div>
  );
}
