import { Link, useLocation } from "react-router-dom";

import styles from "./styes.module.scss";

import LogoIcon from "@/shared/assets/Logo.svg";
import HelpIcon from "@/shared/assets/Help.svg";
import FavoritesIcon from "@/shared/assets/Favorite-inactive.svg";
import {
  FAVORITES_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  PROFILE_PAGE_ROUTE,
} from "@/shared/utils/constants";
import classNames from "classnames";

export function Header() {
  const path = useLocation().pathname;

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={LogoIcon} alt="company logo" />
        <p>PaperHive</p>
      </div>
      <nav className={styles.navBar}>
        <Link
          className={classNames({ link__active: path === HOME_PAGE_ROUTE })}
          to={HOME_PAGE_ROUTE}
        >
          Главная
        </Link>
        <Link
          className={classNames({ link__active: path === HOME_PAGE_ROUTE })}
          to={PROFILE_PAGE_ROUTE}
        >
          Профиль
        </Link>
        <Link to={FAVORITES_PAGE_ROUTE}>
          <img src={FavoritesIcon} alt="like image" />
        </Link>
        <p>
          <img src={HelpIcon} alt="help icon" />
        </p>
      </nav>
    </header>
  );
}
