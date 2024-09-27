import styles from "./style.module.scss";

import NextPageIcon from "@/shared/assets/NextPage.svg";
import PreviousPageIcon from "@/shared/assets/PreviousPage.svg";
import FirstPageIcon from "@/shared/assets/FirstPage.svg";
import LastPageIcon from "@/shared/assets/LastPage.svg";

export function Pagination() {
  return (
    <div className={styles.pagination}>
      <div>
        <img src={FirstPageIcon} alt="first page" />
        <img src={PreviousPageIcon} alt="previous page" />
      </div>
      <div className={styles.pages}>
        <span className={styles.active}>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
      </div>
      <div>
        <img src={NextPageIcon} alt="next page" />
        <img src={LastPageIcon} alt="last page" />
      </div>
    </div>
  );
}
