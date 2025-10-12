import { Brain, ChartNoAxesCombined, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const features = [
    {
      id: 0,
      icon: Brain,
      title: "Intelligence Artificielle",
      description:
        "Catégorisation automatique de vos dépenses et recommandations personnalisées.",
    },
    {
      id: 1,
      icon: ChartNoAxesCombined,
      title: "Analyses détaillées",
      description:
        "Visualisez vos habitudes financières avec des graphiques interactifs.",
    },
    {
      id: 2,
      icon: Zap,
      title: "Alertes en temps réel",
      description: "Recevez des notifications lors de dépassements de budget.",
    },
  ];

  const stats = [
    {
      id: 0,
      number: "10K+",
      descriptioin: "Utilisateurs actifs",
    },
    {
      id: 1,
      number: "€2.5M",
      descriptioin: "Économies générées",
    },
    {
      id: 2,
      number: "4.9/5",
      descriptioin: "Note moyenne",
    },
  ];

  return (
    <div className="bg-[#151425]">
      <div className="flex items-center flex-col w-full bg-blend-overlay">
        <div className="flex items-center justify-around gap-20 w-full mb-10 h-20 border-b border-[#e1ff6750]">
          <h1 className="text-[#E0FF67] font-bold md:text-xl sm:text-xs">
            Spendly <span className="text-white">AI</span>
          </h1>
          <div className="flex gap-3">
            <button className="btn hover:bg-[#E0FF67] hover:text-black bg-[#201F31] border-[#E0FF67] btn-sm md:btn-md text-[#201F31] rounded-2xl font-sora text-xs sm:text-sm lg:text-base font-normal tracking-wider animate">
              <Link
                href={"/sign-in"}
                className="text-xs text-white hover:text-[#201F31]"
              >
                Se connecter
              </Link>
            </button>
            <button className="btn bg-[#E0FF67] border-none btn-sm md:btn-md text-[#201F31] rounded-2xl font-sora text-xs sm:text-sm lg:text-base font-normal tracking-wider animate">
              <Link href={"/sign-up"} className="text-xs">
                S'inscrire
              </Link>
            </button>
          </div>
        </div>

        <div>
          <div className="flex flex-col text-center justify-center items-center">
            <h1 className="text-white font-bold text-[2rem] leading-[2.5rem] sm:text-[3rem] sm:leading-[3.5rem] md:text-[3.5rem] md:leading-[4rem] lg:text-[4rem] lg:leading-[5rem]">
              Vos{" "}
              <span className=" bg-clip-text text-transparent bg-gradient-to-b from-[#c4e933] to-[#e6ecccc4] ">
                finances
              </span>
              ,réinventer par <br />
              "l'intelligene artificielle"{" "}
            </h1>
            <p className="text-[0.875rem] leading-[1rem] font-light sm:text-[1rem] sm:leading-[1.25rem] md:text-[1.125rem] md:leading-[1.5rem] lg:text-[1.25rem] lg:leading-[2rem] text-white mt-16">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#c4e933] to-[#e6ecccc4] ">
                Spendly AI
              </span>{" "}
              vous aide à
              <br /> suivre vos dépenses, comprendre vos habitudes et <br />
              prédire vos besoins futurs — automatiquement.
            </p>
            <div className="bg-[#E0FF67] mt-10 w-1/4 h-9 flex items-center justify-center rounded-sm">
              <Link href="/dashboard">
                <h2 className="text-xs lg:text-sm">Commencer maintenant</h2>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-[#e1ff6750] h-[1px] w-full mt-10"></div>

        <div className="mt-10 w-full lg:ml-160 flex flex-col justify-around">
          <div className="flex flex-col text-center lg:items-start lg:justify-start mb-6 ">
            <h2 className="text-white font-bold lg:text-3xl">
              Tout ce dont vous avez besoin
            </h2>
            <p className="text-[#DAF866] text-xs lg:text-lg italic">
              Des fonctionnalités puissantes pour une gestion financière
              simplifiée
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 lg:mb-16 w-full max-w-6xl px-4 mt-6">
            {features.map((item) => (
              <div
                className="bg-white border-2 border-[#DAF866] gap-6 m-0 p-6 w-full h-full flex flex-col items-center lg:items-start text-center rounded-md shadow-md"
                key={item.id}
              >
                <div className="w-20 h-20 bg-[#dbf575c0] flex items-center justify-center rounded-lg mb-4">
                  <item.icon className="text-[#819C22] w-15 h-8" />
                </div>
                <div className="flex flex-col sm:items-center lg:items-start gap-4">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-600 text-center lg:text-start">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div>

          </div>
        </div>
      </div>
    </div>
  );
}
