import { ArticlesTable } from "@/widgets/ArticlesTable";
import { Pagination } from "@/widgets/Pagination";
import { SearchBar } from "@/widgets/SearchBar";

import styles from "./style.module.scss";
import { Button } from "@/shared/ui/Button";
import { ProfileForm } from "@/widgets/ProfileForm";

export function Profile() {
  const articles: string[] = ["apple", "banana", "orange", "pineapple"];

  return (
    <main className={styles.homePage}>
      <h1>Мои статьи</h1>
      <div className={styles.toolBar}>
        <div className={styles.searchBar}>
          <SearchBar />
        </div>
        <Pagination />
      </div>
      <ArticlesTable articles={articles} />
      <div className={styles.pagination}>
        <Pagination />
        <Button className={styles.button}>Новая статья</Button>
      </div>
      <ProfileForm />
    </main>
  );
}
