import Pagination from "../components/Pagination";
import CharacterList from "../components/CharacterList";

export default function Home() {
  return (
    <section className="container mx-auto">
      <h1 className="text-4xl text-center my-8">Rick and Morty</h1>
      <CharacterList />
      <Pagination />
    </section>
  );
}
