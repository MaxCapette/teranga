import Image from "next/image";
import "./intro.css";


export default function Intro() {
    return (
      <section className="bg-gray-800 py-12 md:py-20 lg:py-24">
      <div className="intro">
      <Image src="/images/introia.png" alt="Intelligence Artificielle" width={512} height={512} className="introImage" />
      <div className="introText">
        <p className="description">
          Chez TERANGA CONSULTING, nous transformons les défis technologiques en opportunités de croissance.
          Grâce à notre expertise en Intelligence Artificielle, nous aidons les entreprises à optimiser
          leurs processus, à innover et à se démarquer dans un marché compétitif. Découvrez comment
          nous pouvons propulser votre entreprise vers de nouveaux sommets.
        </p>
        <a href="#services" className="ctaButton">Découvrez nos services</a>
      </div>
    </div>
</section>
    );
}
