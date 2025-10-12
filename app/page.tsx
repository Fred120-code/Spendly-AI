import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-center flex-col w-full bg-[#151425] bg-blend-overlay h-full">
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
          <div className="flex flex-col text-center">
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
          </div>
        </div>
      </div>
    </div>
  );
}
