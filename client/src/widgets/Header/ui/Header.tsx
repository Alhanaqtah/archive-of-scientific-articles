import { Link, useLocation } from "react-router-dom";

import styles from "./style.module.scss";

import LogoIcon from "@/shared/assets/Logo.svg";
import HelpIcon from "@/shared/assets/Help.svg";
import { FavoritesIcon } from "@/shared/ui/FavoritesIcon";
import { PAGE_ROUTES } from "@/shared/utils/constants";
import classNames from "classnames";

export function Header() {
  const { HOME, PROFILE, FAVORITES } = PAGE_ROUTES;
  const path = useLocation().pathname;

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={LogoIcon} alt="company logo" />
        <p>PaperHive</p>
      </div>
      <nav className={styles.navBar}>
        <Link className={classNames({ link__active: path === HOME })} to={HOME}>
          Главная
        </Link>
        <Link
          className={classNames({ link__active: path === PROFILE })}
          to={PROFILE}
        >
          Профиль
        </Link>
        <Link to={FAVORITES}>
          <FavoritesIcon isActive={path === FAVORITES} />
        </Link>
        <p>
          <img src={HelpIcon} alt="help icon" />
        </p>
      </nav>
    </header>
  );
}
