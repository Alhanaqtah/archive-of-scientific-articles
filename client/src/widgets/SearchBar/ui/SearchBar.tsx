import SearchIcon from "@/shared/assets/Search.svg";
import { FormEvent } from "react";

import styles from "./style.module.scss";

export function SearchBar() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchBar}>
      <input
        type="text"
        placeholder="Название, автор, сфера, дата или ключевые слова"
      />
      <button type="submit">
        <img src={SearchIcon} alt="zoom icon" />
      </button>
    </form>
  );
}
