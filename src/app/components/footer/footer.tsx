// import Image from "next/image";
import styles from "./footer.module.scss";
// import logo from "../../../../public/assets/landingBG.svg";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <h1>AltiSafety EI</h1>
                <p>SIRET : en cours d&apos;attribution par l&apos;INPI</p>
                <p>Anthony Reynaud</p>
                <p><a href="tel:+33636521614">+336 36 52 16 14</a></p>
                <p><a href="mailto:altisafetycontact@gmail.com?subject=Demande de devis">altisafetycontact@gmail.com</a></p>
                <p>6 rue Duhamel, 69002, Lyon</p>
            </div>
            <div>
                <p><a href="https://www.linkedin.com/in/anthony-reynaud/">LinkedIn</a></p>
                {/* <p><a href="https://www.instagram.com/yno.wav/">Instagram</a></p> */}
                <p>Politique de Confidentialité</p>
            </div>
        </footer>
    );
}