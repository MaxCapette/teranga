import { CogIcon, ChartBarIcon, ServerIcon, PuzzleIcon } from '@heroicons/react/solid';




export default function Icons() {
    return (

<section className="py-12 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            

            <div className="space-y-3">
                <CogIcon className="h-8 w-8 text-primary-400" />
                <h3 className="text-lg font-semibold text-gray-900 ">Développement de logiciels</h3>
                <p className="text-gray-400">
                    Notre équipe de développeurs expérimentés crée des solutions logicielles sur mesure adaptées aux
                    besoins de votre entreprise.
                </p>
            </div>
            <div className="space-y-3">
                <ChartBarIcon className="h-8 w-8 text-primary-400" />
                <h3 className="text-lg font-semibold text-black">Conseil en IA</h3>
                <p className="text-gray-400">
                    Nos experts en IA vous aident à exploiter la puissance de l&apos;intelligence artificielle pour stimuler la
                    croissance et l&apos;innovation de votre entreprise.
                </p>
            </div>
            <div className="space-y-3">
                <ServerIcon className="h-8 w-8 text-primary-400" />
                <h3 className="text-lg font-semibold text-black">Intégration de systèmes informatiques</h3>
                <p className="text-gray-400">
                    Nous intégrons de manière transparente vos systèmes et infrastructures informatiques pour améliorer
                    l&apos;efficacité et la productivité.
                </p>
            </div>
              <div className="space-y-3">
                <PuzzleIcon className="h-8 w-8 text-primary-400" />
                <h3 className="text-lg font-semibold text-black">Services de conseil</h3>
                <p className="text-gray-400">
                  Nos consultants fournissent des conseils stratégiques pour vous aider à atteindre vos objectifs
                  commerciaux.
                </p>
              </div>
            </div>
          </div>
        </section>

);
}
