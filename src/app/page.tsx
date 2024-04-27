import style from "./page.module.css";
import {
  MainSection,
  Divider,
  TarrifSection,
  ContactSection,
  LicenseSection,
} from "../components/index";
export default function Home() {
  return (
    <main className={style.mainWrapper}>
      <MainSection />
      <Divider />
      <TarrifSection />
      <ContactSection />
      <LicenseSection />
    </main>
  );
}
