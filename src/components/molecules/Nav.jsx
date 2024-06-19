import { Button } from "../atoms/Button";
import Navlink from "../atoms/Navlink";
import styles from "../../styles/navbar.module.css";

function Nav() {
  // const boys = ["mFO", "Kpan", 1, 2, 3, 4];
  // const [fs1, fs2, ...remaining] = boys;

  // console.log("fs1", fs1);
  // console.log("fs2", fs2);
  // console.log(remaining);

  // const girl = { name: "Mary", age: 18 };
  // const { name, age } = girl;
  return (
    <nav className={styles.nav}>
      <div>
        <Navlink href="#" name="About us" />
        <Navlink href="#" name="Contact us" />
        <Navlink href="" name="Home" />
      </div>
      <div>
        <Button content="Sign Up" type="button" />
        <Button content="Login" type="submit" />
      </div>
    </nav>
  );
}

export default Nav;
