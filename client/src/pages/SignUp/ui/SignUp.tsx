import { Button } from "@/shared/ui/Button";
import { PAGE_ROUTES } from "@/shared/utils/constants";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";

export function SignUp() {
  return (
    <main className={styles.page}>
      <div>
        <h1>Создание аккаунта</h1>
        <form action="">
          <label htmlFor="">Логин</label>
          <input type="text" placeholder="Введите логин" />
          <label htmlFor="">Пароль</label>
          <input type="text" placeholder="Введите пароль" />
          <label htmlFor="">Повторите пароль</label>
          <input type="text" placeholder="Введите пароль" />
          <Button color="yellow">Создать</Button>
        </form>
        <p>
          Уже есть аккаунт?
          <Link to={PAGE_ROUTES.SIGNIN}>Войти</Link>
        </p>
      </div>
    </main>
  );
}
