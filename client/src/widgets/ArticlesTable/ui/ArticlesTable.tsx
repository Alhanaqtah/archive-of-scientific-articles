import { useNavigate } from "react-router-dom";
import styles from "./style.module.scss";
import { PAGE_ROUTES } from "@/shared/utils/constants";
import { Article } from "@/entities/article";
import { getDate } from "@/shared/utils/dateConverter";

interface ArticlesTableProps {
  articles: Article[];
}

export function ArticlesTable({ articles }: ArticlesTableProps) {
  const navigate = useNavigate();
  const handleArticleClick = (id: string) => () => {
    navigate(PAGE_ROUTES.ARTICLES, { state: { articleId: id } });
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Название</th>
          <th>Автор</th>
          <th>Область</th>
          <th>Дата публикации</th>
        </tr>
      </thead>
      <tbody>
        {articles.map((article) => (
          <tr key={article.id} onClick={handleArticleClick(article.id)}>
            <td>{article.title}</td>
            <td>{article.author.email}</td>
            <td>{article.sci_area}</td>
            <td>{getDate(article.created_at)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
