import styles from "./App.module.css";
import { Footer } from "./components/Footer";
import { Logo } from "./components/Logo";

export function App() {
  return (
    <div className={styles.app}>
      <Logo />
      <main />
      <Footer />
    </div>
  );
}
