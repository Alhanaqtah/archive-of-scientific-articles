import { Button } from "@/shared/ui/Button";
import styles from "./style.module.scss";
import { Keyword } from "@/shared/ui/Keyword";
import FileIcon from "@/shared/assets/File.svg";

export function CreateArticle() {
  return (
    <main className={styles.articlesPage}>
      <h1>Новая статья</h1>
      <form action="">
        <label htmlFor="">Название статьи</label>
        <input type="text" placeholder="Введите название статьи" />
        <label htmlFor="">Аннотация к статье</label>
        <input type="text" placeholder="Введите аннотацию к статье" />
        <label htmlFor="">Файл со статьей (только pdf)</label>
        <div className={styles.fileDownload}>
          <input type="file" accept=".pdf" />
          <img src={FileIcon} alt="file icon" />
        </div>
        <div className={styles.bottomArea}>
          <div>
            <label htmlFor="">Автор статьи</label>
            <input type="text" placeholder="Введите автора статьи" />
            <label htmlFor="">Ключевые слова</label>
            <input type="text" placeholder="Введите ключевое слово" />
          </div>
          <div>
            <label htmlFor="">Научная область статьи</label>
            <input type="text" placeholder="Введите научную область статьи" />
            <div className={styles.keywords}>
              <Keyword>ключевое</Keyword>
              <Keyword>ключевое</Keyword>
              <Keyword>ключевое</Keyword>
              <Keyword>ключевое</Keyword>
              <Keyword>ключевое</Keyword>
            </div>
          </div>
        </div>

        <div className={styles.buttons}>
          <Button>Отмена</Button>
          <Button color="yellow">Опубликовать</Button>
        </div>
      </form>
    </main>
  );
}
