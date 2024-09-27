import styles from "./style.module.scss"

interface ArticlesTableProps {
  articles: string[];
}

export function ArticlesTable({ articles }: ArticlesTableProps) {
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
          <tr key={article}>
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
