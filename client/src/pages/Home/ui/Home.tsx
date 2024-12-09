import { ArticlesTable } from "@/widgets/ArticlesTable";
import { Pagination } from "@/widgets/Pagination";
import styles from "./style.module.scss";
import { Button } from "@/shared/ui/Button";
import { Link } from "react-router-dom";
import { PAGE_ROUTES } from "@/shared/utils/constants";
import { Header } from "@/widgets/Header";
import { useEffect, useState } from "react";
import { Article, ArticleService } from "@/entities/article";
import { NotificationService } from "@/shared/utils/notificationService";

export function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [page, setPage] = useState(1);

  const getArticles = async (pageNumber?: number) => {
    const res = await ArticleService.getArticles(pageNumber);
    setArticles(res.data);
  };

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
    getArticles(pageNumber);
  };

  useEffect(() => {
    getArticles();
  }, []);

  useEffect(() => {
    NotificationService.subscribe("ArticleCreated", getArticles);

    return () => {
      NotificationService.unsubscribe("ArticleCreated", getArticles);
    };
  }, []);

  return (
    <>
      <Header />

      <main className={styles.homePage}>
        <h1>Все статьи</h1>
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
