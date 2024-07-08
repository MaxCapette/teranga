/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import "./unlock.css";
export default function Unlock() {
    return (
    <section className="bg-gray-800 py-12 md:py-20 lg:py-24 unlock">
<div className="container mx-auto px-4 md:px-6 lg:px-8">
  <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
    <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-white">
            Débloquez le potentiel de votre entreprise avec des solutions alimentées par l&apos;IA
        </h1>
        <p className="text-gray-400 md:text-lg lg:text-xl">
            Notre équipe d&apos;experts se spécialise dans le développement de systèmes IA de pointe et de solutions
            logicielles pour aider votre entreprise à prospérer dans l&apos;ère numérique.
        </p>
        
    </div>
    <div>
      <img
        alt="Image d'accueil"
        className="mx-auto rounded-lg"
        height="400"
        src="/images/unlock.jpg"
        style={{
          aspectRatio: "600/400",
          objectFit: "cover",
        }}
        width="600"
      />
    </div>
  </div>
</div>
</section>

);
}