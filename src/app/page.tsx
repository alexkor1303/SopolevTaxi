import style from "./page.module.css";
import {
  MainSection,
  Divider,
  AttentionTag,
  TarrifSection,
  ContactSection,
} from "../components/index";
export default function Home() {
  return (
    <main className={style.mainWrapper}>
      <MainSection />
      <Divider />
      <AttentionTag title="Внимание!">
        Уважаемые жители и гости Томпонского района! Пожалуйста, ознакомьтесь с
        нашими обновленными ценами на перевозки.
      </AttentionTag>
      <TarrifSection />
      <ContactSection />
    </main>
  );
}
