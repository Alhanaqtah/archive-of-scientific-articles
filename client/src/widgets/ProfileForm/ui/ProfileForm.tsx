import { Button } from "@/shared/ui/Button";
import styles from "./style.module.scss";

export function ProfileForm() {
  return (
    <form className={styles.profileForm}>
      <h2>Мои данные</h2>
      <div>
        <div>
          <label htmlFor="firstName">Имя</label>
          <input
            type="text"
            placeholder="Имя"
            name="firstName"
            id="firstName"
          />
        </div>
        <div>
          <label htmlFor="secondName">Фамилия</label>
          <input
            type="text"
            placeholder="Фамилия"
            name="secondName"
            id="secondName"
          />
        </div>
      </div>
      <Button color="red">Выйти</Button>
    </form>
  );
}
