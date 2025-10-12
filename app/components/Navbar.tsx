"use client"
import { UserButton } from "@clerk/nextjs";
import { ArrowLeftRight, Bot, ChartLine, Wallet } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const navLinks = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: ChartLine,
    },
    {
      href: "/budgets",
      label: "Budgets",
      icon: Wallet,
    },
    {
      href: "/transactions",
      label: "Transactions",
      icon: ArrowLeftRight,
    },
    {
      href: "/rappot-ai",
      label: "Rapport IA",
      icon: Bot,
    },
  ];

  //permet de recuperer le chemin de la page courante
  const pathname = usePathname();

  //affiche dynamiquement les liens de navigation
  const renderLinks = () => {
    return (
      <div className="flex flex-col justify-center gap-8 items-start">
        {navLinks.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          const activeClass = isActive
            ? " bg-[#D9F277] text-[#201F31]"
            : " text-white";

          return (
            <Link
              href={href}
              key={href}
              className={` outline-none p-2 flex gap-2 items-center rounded-lg ${activeClass} font-semibold`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </Link>
          );
        })}
      </div>
    );
  };
  return (
    <div className="border-2 bg-[#201F31] mt-7 ml-7 rounded-2xl border-base-100 px-5 md:px-[10%] p-4 relative mx-auto">
      <div className="flex flex-col items-center justify-center">
        <div className="mt-4 mb-12">
          <h1 className="text-white font-bold text-[0.75rem] leading-[1.25rem] sm:text-[0.5rem] sm:leading-[1.5rem] md:text-[0.75rem] md:leading-[1.75rem] lg:text-[1.5rem] lg:leading-[2rem]">
            Spendly <span>AI</span>
          </h1>
        </div>
        <div className="hidden space-x-2 sm:flex items-center flex-col justify-between gap-10">
          {renderLinks()}
          <div className="flex flex-col items-center space-y-2">
            <UserButton />
            <h2 className="text-white">Vous</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
