import { ArticlesTable } from "@/widgets/ArticlesTable";
import { Pagination } from "@/widgets/Pagination";
import { SearchBar } from "@/widgets/SearchBar";

export function Home() {
  const articles: string[] = ["apple", "banana", "orange", "pineapple"];

  return (
    <main>
      <h1>Все статьи</h1>
      <SearchBar />
      <Pagination />
      <ArticlesTable articles={articles} />
    </main>
  );
}
