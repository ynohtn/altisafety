import styles from "./scss/page.module.scss";
import Header from "./components/header/header";
import Landing from "./components/landing/landing";
import Services from "./components/services/services";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <Landing />
        <Services />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
