import Image from "next/image";
import "./services.css";


export default function Services() {
    return (
      <section className="services" id="services">
        <Image src="/images/services.png" alt="Intelligence Artificielle" width={512} height={512} className="introImage" />
      <div className="servicesContent">
        <h2 className="servicesTitle">Nos Services</h2>
        <p className="servicesDescription">
          Chez TERANGA CONSULTING, nous offrons une gamme complète de services pour répondre à tous vos besoins technologiques. 
          Notre expertise en développement de logiciels, en systèmes informatiques et en Intelligence Artificielle nous permet 
          de fournir des solutions innovantes et sur mesure. Que vous ayez besoin d&apos;optimiser vos processus, de développer de 
          nouvelles applications ou d&apos;intégrer des technologies d&apos;IA avancées, notre équipe est là pour vous accompagner à chaque étape.
        </p>
      </div>
    </section>

    );
}
