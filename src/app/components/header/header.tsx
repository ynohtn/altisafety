import Image from "next/image";
import styles from "./header.module.scss";
import logo from "../../../../public/assets/landingBG.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <figure className={styles.bg}>
          <Image 
            src={logo}
            alt="logo"
            sizes="100%, 100%"
            style={{width: '100%', height: '100%', objectFit:'cover'}}
          />
        </figure>
        
        <ul>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
