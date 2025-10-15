import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col text-center justify-center items-center mt-15 mb-10">
      <h1
        data-aos="fade-up"
        data-aos-anchor-placement="center-center"
        className="text-white font-bold text-[2rem] leading-[2.5rem] sm:text-[3rem] sm:leading-[3.5rem] md:text-[3.5rem] md:leading-[4rem] lg:text-[4rem] lg:leading-[5rem]"
      >
        Vos{" "}
        <span className=" bg-clip-text text-transparent bg-gradient-to-b from-[#c4e933] to-[#e6ecccc4] ">
          finances
        </span>
        ,réinventer par <br />
        "l'intelligene artificielle"
      </h1>
      <p
        data-aos="fade-up"
        data-aos-anchor-placement="center-center"
        className="text-[0.875rem] leading-[1rem] font-light sm:text-[1rem] sm:leading-[1.25rem] md:text-[1.125rem] md:leading-[1.5rem] lg:text-[1.25rem] lg:leading-[2rem] text-white mt-16"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#c4e933] to-[#e6ecccc4] ">
          Spendly AI
        </span>{" "}
        vous aide à
        <br /> suivre vos dépenses, comprendre vos habitudes et <br /> prédire
        vos besoins futurs — automatiquement.
      </p>
      <div className="bg-[#E0FF67] mt-10 w-1/4 h-9 flex items-center justify-center rounded-sm">
        <Link href="/dashboard">
          <h2 className="text-xs lg:text-sm">Commencer maintenant</h2>
        </Link>
      </div>
    </div>
  );
}
