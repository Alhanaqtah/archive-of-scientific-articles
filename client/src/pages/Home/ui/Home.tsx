import { ArticlesTable } from "@/widgets/ArticlesTable";
import { SearchBar } from "@/widgets/SearchBar";

export function Home() {
  const articles: string[] = ["apple", "banana", "orange", "pineapple"];

  return (
    <main>
      <h1>Все статьи</h1>
      <SearchBar />
      <ArticlesTable articles={articles} />
    </main>
  );
}
