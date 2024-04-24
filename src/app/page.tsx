import style from "./page.module.css";
import { MainSection } from "../components/index";
export default function Home() {
  return (
    <main className={style.mainWrapper}>
      <MainSection />
    </main>
  );
}
