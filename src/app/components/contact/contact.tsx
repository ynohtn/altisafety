import Image from "next/image";
import styles from "./contact.module.scss";
import opera1 from "../../../../public/assets/photos/opera1.jpeg";

export default function Contact() {
    return (
        <section id="contact" className={styles.contact}>
            <h1>Contact</h1>
            <div className={styles.pres}>
                <div>
                    <figure>
                        <Image 
                            src={opera1}
                            alt="icône nettoyage vitre"
                            style={{width: '300px', height: '300px', objectFit:'cover'}}
                        />
                    </figure>
                    <div>
                        <p>
                            Cordiste lyonnais passioné par la hauteur et l&apos;escalade depuis toujours, j&apos;ai décidé d&apos;allier passion et travail en devenant cordiste en 2022. Après plusieurs années de pratique au sein d&apos;entreprises majeures du milieu de la corde dans toute la France, j&apos;ai finalement décidé d&apos;investir mon savoir faire et ma rigueur dans ma propre activité en devenant indépendant. Profondément humain, j&apos;aime travailler dans une atmosphère de confiance avec mes collaborateurs et mes clients.
                        </p>
                        <p>
                            Nettoyage de vitre, zinguerie, maçonnerie, sécurisation, maintenance et réparation en milieu urbain, industriel et confiné, je suis capable d&apos;intervenir dans toutes sortes de situations d&apos;accès difficile en toute sécurité. Les CQP Cordiste et Technicien Cordiste, m&apos;ont offert un éventail de techniques permettant de rendre accessible l&apos;inaccessible.
                        </p>
                        <p>
                            J&apos;ai eu l&apos;honneur de pouvoir travailler sur plusieurs chantiers remarquables tels que les chantiers de l&apos;Atlantique à Saint-Nazaire en tant qu&apos;assistant soudeur, l&apos;Opéra de Lyon pour le nettoyage de la vitrerie, la tour Apicil de la Part-dieu, l&apos;immeuble Citroën, l&apos;aéroport de Nice, le Groupama Stadium, le Matmut Stadium et bien d&apos;autres encore. Ma profonde soif d&apos;apprendre et de maîtriser de nouvelles compétences m&apos;a mené sur un panel de chantiers très diversifiés où j&apos;ai pu parfaire mes techniques et mes connaissances pour ainsi devenir polyvalent et efficace en toutes circonstances.
                        </p>  
                    </div>
                </div>
                <div className={styles.devis}>
                    <h3>Besoin d&apos;un devis ?</h3>
                    <p>Réponse dans les 24h suivant votre mail</p>
                    <p>Intervention dans toute la France</p>
                    <div>
                        <a href="mailto:altisafetycontact@gmail.com?subject=Demande de devis">
                            <div>
                                Demander un devis
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}