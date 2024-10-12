import { Button } from "@/shared/ui/Button";
import { PAGE_ROUTES } from "@/shared/utils/constants";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import { ChangeEvent, FormEvent, useState } from "react";
import { registerUser, useAppDispatch } from "@/app/redux";

interface FormData {
  login: string;
  password: string;
  repeatPassword: string;
}

const initialData: FormData = {
  login: "",
  password: "",
  repeatPassword: "",
};

export function SignUp() {
  const [formData, setFormData] = useState<FormData>(initialData);

  const dispatch = useAppDispatch();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newData = { ...formData };
    newData[e.target.name as keyof FormData] = e.target.value;
    setFormData(newData);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.repeatPassword) {
      alert("password do not match");
      return;
    }

    dispatch(
      registerUser({
        email: formData.login,
        name: "",
        password: formData.password,
        surname: "",
      })
    );

    setFormData(initialData);
  };

  return (
    <main className={styles.page}>
      <div>
        <h1>Создание аккаунта</h1>
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
          <label htmlFor="repeatPassword">Повторите пароль</label>
          <input
            type="text"
            placeholder="Введите пароль"
            name="repeatPassword"
            id="repeatPassword"
            value={formData.repeatPassword}
            onChange={handleInputChange}
          />
          <Button color="yellow" type="submit">
            Создать
          </Button>
        </form>
        <p>
          Уже есть аккаунт?
          <Link to={PAGE_ROUTES.SIGNIN}>Войти</Link>
        </p>
      </div>
    </main>
  );
}
