import styles from "./style.module.scss";

import NextPageIcon from "@/shared/assets/NextPage.svg";
import PreviousPageIcon from "@/shared/assets/PreviousPage.svg";
import FirstPageIcon from "@/shared/assets/FirstPage.svg";

interface PaginationProps {
  page: number;
  onChange: (page: number) => void;
}

export function Pagination({ page, onChange }: PaginationProps) {
  const first = page - 2 > 1 ? page - 2 : 1;
  const pages = [first, first + 1, first + 2, first + 3, first + 4];

  return (
    <div className={styles.pagination}>
      <div>
        <button onClick={() => onChange(1)}>
          <img src={FirstPageIcon} alt="first page" />
        </button>
        <button disabled={page === 1} onClick={() => onChange(page - 1)}>
          <img src={PreviousPageIcon} alt="previous page" />
        </button>
      </div>
      <div className={styles.pages}>
        {pages.map((pageIndex) => (
          <span className={pageIndex === page ? styles.active : ""}>
            {pageIndex}
          </span>
        ))}
      </div>
      <div>
        <button onClick={() => onChange(page + 1)}>
          <img src={NextPageIcon} alt="next page" />
        </button>
      </div>
    </div>
  );
}
