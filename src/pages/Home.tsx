import Pagination from "../components/Pagination";
import CharacterList from "../components/CharacterList";

export default function Home() {
  return (
    <section className="container mx-auto">
      <CharacterList />
      <Pagination />
    </section>
  );
}
