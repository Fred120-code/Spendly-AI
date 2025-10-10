import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-center flex-col py-10 w-full">
        <div className="flex items-center justify-around gap-20 w-full mb-10 p-10 h-20">
          <h1 className="text-[#E0FF67] font-bold text-xl">Spendly AI</h1>
          <div className="flex gap-3">
            <button className="btn btn-primary btn-soft btn-sm md:btn-md  rounded-2xl">
              <Link href={""}>Se connecter</Link>
            </button>
            <button className="btn btn-primary btn-soft btn-sm md:btn-md  rounded-2xl">
              <Link href={""}>S'inscrire</Link>
            </button>
          </div>
        </div>
        <div>
          <div className="flex flex-col text-center">
            <h1 className="font-bold text-white md:text-3xl">
              Vos <span className="text-[#E0FF67]">finances</span>,réinventer
              par <br />
              "l'intelligene artificielle"{" "}
            </h1>
            <p className="font-bold text-white py-10 sm:text-sm md:text-2xl">
              <span className="text-[#E0FF67]">Spendly AI</span> vous aide à
              suivre vos dépenses, comprendre vos
              <br /> habitudes et prédire vos besoins futurs — automatiquement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
