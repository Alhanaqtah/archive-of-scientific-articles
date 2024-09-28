import { ArticlesTable } from "@/widgets/ArticlesTable";
import { Pagination } from "@/widgets/Pagination";
import { SearchBar } from "@/widgets/SearchBar";

import styles from "./style.module.scss";
import { Button } from "@/shared/ui/Button";
import { ProfileForm } from "@/widgets/ProfileForm";
import { Link } from "react-router-dom";
import { PAGE_ROUTES } from "@/shared/utils/constants";

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
        <Link to={PAGE_ROUTES.CREATE_ARTICLE}>
          <Button className={styles.button}>Новая статья</Button>
        </Link>
      </div>
      <ProfileForm />
    </main>
  );
}
