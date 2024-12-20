import Image from "next/image";
import styles from "./landing.module.scss";
import bg from "../../../../public/assets/landingBG.svg";

export default function Landing() {
    return (
        <section className={styles.landing}>
            <figure className={styles.bg}>
                <Image 
                    src={bg}
                    alt="background"
                    sizes="100%, 100%"
                    priority={false}
                    style={{width: '100vw', height: '100vh', objectFit:'cover'}}
                />
            </figure>
            <div>
                <h1>AltiSafety</h1>
                <h2>Travaux d&apos;accès difficile</h2>
                <h3>Nettoyage - Maintenance - Sécurisation</h3>
            </div>
        </section>
    );
}