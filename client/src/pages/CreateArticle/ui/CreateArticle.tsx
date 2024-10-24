import { Button } from "@/shared/ui/Button";
import styles from "./style.module.scss";
import { Keyword } from "@/shared/ui/Keyword";
import FileIcon from "@/shared/assets/File.svg";
import { Header } from "@/widgets/Header";
import { ChangeEvent, FormEvent, KeyboardEvent, useState } from "react";
import { ArticleService } from "@/entities/article";
import { useNavigate } from "react-router-dom";
import { PAGE_ROUTES } from "@/shared/utils/constants";

interface InputData {
  title: string;
  annotation: string;
  blob: File | null;
  author: string;
  sci_area: string;
  keywords: string[];
}

const initialState: InputData = {
  title: "",
  annotation: "",
  blob: null,
  author: "",
  sci_area: "",
  keywords: [],
};

export function CreateArticle() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [inputData, setInputData] = useState<InputData>(initialState);

  const handleTypeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length >= 25) {
      return;
    }

    setKeyword(e.target.value);
  };

  const handleAddKeyword = (e: KeyboardEvent) => {
    if (e.code !== "Enter") {
      return;
    }

    e.stopPropagation();

    if (inputData.keywords.length > 4) {
      return;
    }

    const newKeywords = [...inputData.keywords, keyword];
    setKeyword("");
    setInputData({ ...inputData, keywords: newKeywords });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputData({
      ...inputData,
      [e.target.name as keyof InputData]: e.target.value,
    });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setInputData({
      ...inputData,
      blob: e.target.files ? e.target.files[0] : null,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    ArticleService.createArticle(inputData);
    navigate(PAGE_ROUTES.HOME, { replace: true });
  };

  return (
    <>
      <Header />

      <main className={styles.articlesPage}>
        <h1>Новая статья</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Название статьи</label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Введите название статьи"
            onChange={handleChange}
            value={inputData.title}
            required
          />
          <label htmlFor="annotation">Аннотация к статье</label>
          <input
            id="annotation"
            name="annotation"
            type="text"
            placeholder="Введите аннотацию к статье"
            onChange={handleChange}
            value={inputData.annotation}
            required
          />
          <label htmlFor="blob">Файл со статьей (только pdf)</label>
          <div className={styles.fileDownload}>
            <input
              id="blob"
              name="blob"
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
            />
            <img src={FileIcon} alt="file icon" />
          </div>
          <div className={styles.bottomArea}>
            <div>
              <label htmlFor="author">Автор статьи</label>
              <input
                id="author"
                name="author"
                type="text"
                placeholder="Введите автора статьи"
                onChange={handleChange}
                value={inputData.author}
                required
              />
              <label htmlFor="keywords">Ключевые слова</label>
              <input
                id="keywords"
                name="keywords"
                type="text"
                placeholder="Введите ключевое слово"
                onChange={handleTypeKeyword}
                onKeyDown={handleAddKeyword}
                value={keyword}
              />
            </div>
            <div>
              <label htmlFor="sci_area">Научная область статьи</label>
              <input
                id="sci_area"
                name="sci_area"
                type="text"
                placeholder="Введите научную область статьи"
                onChange={handleChange}
                value={inputData.sci_area}
                required
              />
              <div className={styles.keywords}>
                {inputData.keywords.map((keyword) => (
                  <Keyword key={keyword}>{keyword}</Keyword>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.buttons}>
            <Button>Отмена</Button>
            <Button type="submit" color="yellow">
              Опубликовать
            </Button>
          </div>
        </form>
      </main>
    </>
  );
}
