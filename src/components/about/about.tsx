/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import "./about.css";


export default function About() {
    return (
          <section className="aboutUs" id="about">
            
          <div className="aboutUsContent">
            <h2 className="aboutUsTitle">À propos de nous</h2>
            <p className="aboutUsDescription">
              Chez TERANGA CONSULTING, nous sommes passionnés par l&apos;innovation et la transformation digitale. 
              Avec une expertise approfondie en Intelligence Artificielle et en systèmes informatiques, 
              notre mission est de fournir des solutions technologiques de pointe qui permettent à nos clients 
              de prospérer dans un environnement commercial en constante évolution. Nous nous engageons à 
              offrir un service personnalisé, en travaillant en étroite collaboration avec chaque client pour 
              comprendre leurs défis uniques et les aider à atteindre leurs objectifs stratégiques.
            </p>
          </div>
          <img src="/images/about.png" alt="Intelligence Artificielle" width={512} height={512} className="aboutImage" />
        </section>

    );
}
