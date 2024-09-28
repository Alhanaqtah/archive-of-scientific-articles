import { useNavigate } from "react-router-dom";
import styles from "./style.module.scss";
import { PAGE_ROUTES } from "@/shared/utils/constants";

interface ArticlesTableProps {
  articles: string[];
}

export function ArticlesTable({ articles }: ArticlesTableProps) {
  const navigate = useNavigate();
  const handleArticleClick = (id: number) => () => {
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
        {articles.map((article, index) => (
          <tr key={article} onClick={handleArticleClick(index)}>
            <td>{article}</td>
            <td>{article}</td>
            <td>{article}</td>
            <td>{article}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
