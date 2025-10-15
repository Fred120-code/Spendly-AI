import Link from "next/link";

export default function CtaSection() {
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-white text-xl lg:text-3xl font-bold">
        Prêt à transformer vos finances ?
      </h1>
      <p className="text-[#CEEA63] text-center font-semibold text-sm lg:text-xl">
        Rejoignez des milliers d'utilisateurs qui optimisent leur budget avec
        SmartSpend AI
      </p>
      <div className="bg-[#E0FF67] mt-10 w-1/4 h-9 flex items-center justify-center rounded-sm">
        <Link href="/dashboard">
          <h2 className="text-xs lg:text-sm text-center">
            Commencer maintenant
          </h2>
        </Link>
      </div>
    </div>
  );
}
