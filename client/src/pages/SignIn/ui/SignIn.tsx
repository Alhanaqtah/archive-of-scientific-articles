import { Button } from "@/shared/ui/Button";
import styles from "./style.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { PAGE_ROUTES } from "@/shared/utils/constants";
import { ChangeEvent, FormEvent, useState } from "react";
import { loginUser, useAppDispatch } from "@/app/redux";

interface FormData {
  login: string;
  password: string;
}

const initialData: FormData = {
  login: "",
  password: "",
};

export function SignIn() {
  const [formData, setFormData] = useState<FormData>(initialData);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newData = { ...formData };
    newData[e.target.name as keyof FormData] = e.target.value;
    setFormData(newData);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch(
      loginUser({
        email: formData.login,
        name: "",
        password: formData.password,
        surname: "",
      })
    );
    navigate(PAGE_ROUTES.HOME);

    setFormData(initialData);
  };

  return (
    <main className={styles.page}>
      <div>
        <h1>Для продолжения необходимо войти в систему</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="login">Логин</label>
          <input
            type="text"
            placeholder="Введите логин"
            name="login"
            id="login"
            value={formData.login}
            onChange={handleInputChange}
          />
          <label htmlFor="password">Пароль</label>
          <input
            type="text"
            placeholder="Введите пароль"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
          />
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
