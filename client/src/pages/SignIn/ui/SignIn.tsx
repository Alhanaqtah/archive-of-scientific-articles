import { Button } from "@/shared/ui/Button";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import { PAGE_ROUTES } from "@/shared/utils/constants";

export function SignIn() {
  return (
    <main className={styles.page}>
      <div>
        <h1>Для продолжения необходимо войти в систему</h1>
        <form action="">
          <label htmlFor="">Логин</label>
          <input type="text" placeholder="Введите логин" />
          <label htmlFor="">Пароль</label>
          <input type="text" placeholder="Введите пароль" />
          <Button color="yellow">Войти</Button>
        </form>
        <p>
          Еще нету аккаунта?
          <Link to={PAGE_ROUTES.SIGNUP}>Создать</Link>
        </p>
      </div>
    </main>
  );
}
