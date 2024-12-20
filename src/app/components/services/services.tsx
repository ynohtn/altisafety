// 'use client'
import Image from "next/image";
// import { useRef } from 'react';
// import { gsap } from 'gsap';
// import { useGSAP } from '@gsap/react';
import styles from "./services.module.scss";
import window from "../../../../public/assets/window.png";
import net from "../../../../public/assets/net.png";
import roof from "../../../../public/assets/roof.png";
import indus from "../../../../public/assets/indus.png";
import team from "../../../../public/assets/team.png";
import ep from "../../../../public/assets/photos/ep.jpeg";
import apicil from "../../../../public/assets/photos/apicil.jpeg";
import apicil1 from "../../../../public/assets/photos/apicil1.jpeg";
import opera from "../../../../public/assets/photos/opera.jpeg";
import opera2 from "../../../../public/assets/photos/opera2.jpeg";
import vitre from "../../../../public/assets/photos/vitre.jpeg";



export default function Services() {
    // const container = useRef();
    // useGSAP(
    //     () => {
    //         gsap.fromTo(
    //             container,
    //             {
    //                 y: 100,
    //                 opacity: 0
    //             },
    //             {
    //                 y: 0,
    //                 opacity: 1,
    //                 duration: 0.8,
    //                 stagger: 0.1
    //             }
    //         );
    //     },
    //     { scope: container }
    // );

    return (
        <section id="services" className={styles.services}>
            <h1>Services</h1>
            <div className={styles.servicesContainer}>
                <div className={styles.vitres}>
                    <figure>
                        <Image 
                            src={window}
                            alt="icône nettoyage vitre"
                            style={{width: '100px', height: '100px', objectFit:'cover'}}
                        />
                    </figure>
                    <h2>Nettoyage</h2>
                    <ul>
                        <li>Nettoyage, entretien vitrerie</li>
                        <li>Remise en état vitrerie</li>
                        <li>Dépoussièrage de structure</li>
                    </ul>
                </div>

                <div className={styles.secure}>
                    <figure>
                            <Image 
                            src={net}
                            alt="icône sécurisation"
                            style={{width: '100px', height: '100px', objectFit:'cover'}}
                        />
                    </figure>
                    <h2>Sécurisation</h2>
                    <ul>
                        <li>Pose de filet, pare-gravat, antichute ou anti volatile</li>
                        <li>Pose de points d&apos;ancrage</li>
                        <li>Accompagnement de personnel</li>
                    </ul>
                </div>

                <div className={styles.bat}>
                    <figure>
                        <Image 
                            src={roof}
                            alt="icône bâtiment"
                            style={{width: '130px', height: '100px', objectFit:'cover'}}
                        />
                    </figure>
                    <h2>Bâtiment</h2>
                    <ul>
                        <li>Réparation, changement de tuiles</li>
                        <li>Etanchéité</li>
                        <li>Nettoyage, réparation de cheneaux</li>
                        <li>Pose de descente d&apos;eaux pluviales</li>
                        <li>Purge et maçonnerie, en toiture, façade et gaines techniques</li>
                        <li>Peinture, lazure</li>
                    </ul>
                </div>
                
                <div className={styles.indus}>
                    <figure>
                        <Image 
                            src={indus}
                            alt="icône industriel"
                            style={{width: '100px', height: '100px', objectFit:'cover'}}
                        />
                    </figure>
                    <h2>Industrie</h2>
                    <ul>
                        <li>Réparation et maintenance</li>
                        <li>Purge et nettoyage de silo, four, trémies...</li>
                        <li>Pose de sprinkler, système anti incendie, désenfumage</li>
                        <li>Espace confiné</li>
                        <li>Zone ATEX</li>
                        <li>Risque Chimique</li>
                    </ul>
                </div>

                <div className={styles.indus}>
                    <figure>
                        <Image 
                            src={team}
                            alt="icône industriel"
                            style={{width: '100px', height: '100px', objectFit:'cover'}}
                        />
                    </figure>
                    <h2>Renfort d&apos;équipe</h2>
                    <ul>
                        <li>Binôme indépendant</li>
                        <li>Renfort d&apos;équipe en entreprise</li>
                    </ul>
                </div>
            </div>
            <div className={styles.infoctn}>
                <div className={styles.info}>
                    <h2>Qualifications</h2>

                    <ul>
                        <li>CQP Cordiste et Technicien Cordiste</li>
                        <li>SST : Sauveteur secouriste du travail</li>
                        <li>SSC : Sauveteur secouriste sur corde</li>
                        <li>Risque Chimique 1</li>
                        <li>CACES PEMP Catégorie B</li>
                    </ul>
                </div>
                <div className={styles.info}>
                    <h2>Quand faire appel à des cordistes ?</h2>

                    <p>
                        Les interventions sur cordes sont réglementées, l&apos;utilisation de ce moyen d&apos;accès est le dernier recours possible. Lorsque par exemple, l&apos;utilisation d&apos;équipement de protection collective comme une nacelle ou un échaffaudage est impossible.
                        On parle de travaux en hauteur dès lors qu&apos;il y a risque de chute, il n&apos;y a donc pas d&apos;hauteur minimale pour faire appel à une équipe de cordiste. Ce sont les articles <a href="https://www.legifrance.gouv.fr/codes/id/LEGISCTA000018531324">R.4323-89 et R.4323-90</a> du code du travail qui régissent les travaux sur corde.
                        La sécurité est le maître mot. C&apos;est pourquoi une étude de risque est réalisée avant chaque intervention, afin de supprimer ou le cas échéant maîtriser le risque au mieux pour travailler en toute sérénité et offrir aux clients une prestation de qualité.
                    </p>
                </div>
                <div className={styles.photoctn}>
                    <figure>
                        <Image 
                            src={ep}
                            alt="Photo d'installation de descente d'eau pluviale"
                            style={{width: '100%', height: '100%', objectFit:'cover'}}
                        />
                    </figure>
                    <figure>
                        <Image 
                            src={apicil}
                            alt="Photo d'intervention sur la tour Apicil de la Part-Dieu à Lyon"
                            style={{width: '100%', height: '100%', objectFit:'cover'}}
                        />
                    </figure>
                    <figure>
                        <Image 
                            src={apicil1}
                            alt="Photo d'intervention sur la tour Apicil de la Part-Dieu à Lyon"
                            style={{width: '100%', height: '100%', objectFit:'cover'}}
                        />
                    </figure>
                    <figure>
                        <Image 
                            src={opera}
                            alt="Photo d'intervention sur l'Opéra de Lyon"
                            style={{width: '100%', height: '100%', objectFit:'cover'}}
                        />
                    </figure>
                    <figure>
                        <Image 
                            src={opera2}
                            alt="Photo d'intervention sur l'Opéra de Lyon"
                            style={{width: '100%', height: '100%', objectFit:'cover'}}
                        />
                    </figure>
                    <figure>
                        <Image 
                            src={vitre}
                            alt="Photo d'intervention sur un bâtiment d'Arkema à Pierre-Bénite"
                            style={{width: '100%', height: '100%', objectFit:'cover'}}
                        />
                    </figure>
                    
                </div>
            </div>
        </section>
    );
}