"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <div className="flex items-center justify-around gap-20 w-full mb-10 h-20 border-b border-[#e1ff6750]">
      <h1 className="text-[#E0FF67] font-bold md:text-xl sm:text-xs">
        Spendly <span className="text-white">AI</span>
      </h1>
      <div className="flex gap-3 items-center">
        <div className="mr-2">
          <ThemeToggle />
        </div>
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
  );
}
