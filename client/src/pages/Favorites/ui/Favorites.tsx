import { ArticlesTable } from "@/widgets/ArticlesTable";
import { Pagination } from "@/widgets/Pagination";
import styles from "./style.module.scss";
import { Button } from "@/shared/ui/Button";
import { Link } from "react-router-dom";
import { PAGE_ROUTES } from "@/shared/utils/constants";
import { Header } from "@/widgets/Header";
import { useEffect, useState } from "react";
import { Article, ArticleService } from "@/entities/article";
import { useAppSelector, useSelectUser } from "@/app/redux";

export function Favorites() {
  const [articles, setArticles] = useState<Article[] | null>(null);
  const [page, setPage] = useState(1);
  const userId = useAppSelector(useSelectUser)?.sub as string;

  const getArticles = async () => {
    const res = await ArticleService.getFavorites(userId);
    setArticles(res.data);
  };

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
    getArticles();
  };

  useEffect(() => {
    getArticles();
  }, []);

  if (!articles) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header />

      <main className={styles.homePage}>
        <h1>Избранные статьи</h1>
        <ArticlesTable articles={articles} />
        <div className={styles.pagination}>
          <Pagination page={page} onChange={handlePageChange} />
          <Link to={PAGE_ROUTES.CREATE_ARTICLE}>
            <Button className={styles.button}>Новая статья</Button>
          </Link>
        </div>
      </main>
    </>
  );
}
