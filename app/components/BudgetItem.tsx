import { Budgets } from "@/type";
import React from "react";

// Props du composant BudgetItem:
// - budget: objet Budget contenant les informations et transactions
// - enableHover: si égal à 1, ajoute des classes de survol (shadow, border)
interface BudgetItemProps {
  budget: Budgets;
  enableHover?: number;
}

const BudgetItem: React.FC<BudgetItemProps> = ({ budget, enableHover }) => {
  // Nombre de transactions liées au budget
  const transactionCount = budget.transaction ? budget.transaction.length : 0;

  // Somme des montants des transactions associées
  const totaltransactionAmount = budget.transaction
    ? budget.transaction.reduce(
        (sum, transaction) => sum + transaction.amount,
        0
      )
    : 0;

  // Montant restant du budget
  const remainingAmount = budget.amount - totaltransactionAmount;

  // Calcul de la valeur de progression 
  const progressvalue =
    totaltransactionAmount > budget.amount
      ? 100
      : (totaltransactionAmount / budget.amount) * 100;

  // Classe CSS optionnelle pour effet au survol
  const hoverClasse =
    enableHover === 1 ? "hover:shadow-xl hover:border-accent" : "";

  return (
    <li
      key={budget.id}
      className={`rounded-2xl list-none border-2 p-4 bg-[#1D283A] ${hoverClasse}`}
    >
      {/* En‑tête du budget: emoji, nom et nombre de transactions */}
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center">
          <div className="bg-accent/20 text-xl h-10 w-10 rounded-full flex justify-center items-center">
            {budget.emoji}
          </div>
          <div className="flex flex-col ml-3">
            <span className="font-bold text-xl text-white">{budget.name}</span>
            <span className="text-white text-sm">
              {transactionCount} transaction(s)
            </span>
          </div>
        </div>

        {/* Montant total alloué au budget */}
        <div className="text-xl font-bold text-white">{budget.amount} XFA</div>
      </div>

      {/* Résumé des dépenses et reste */}
      <div className="flex items-center justify-between mt-4">
        <span className="text-white text-sm">
          {totaltransactionAmount} XFA dépensé
        </span>
        <span className="text-white text-sm">
          {remainingAmount} XFA restant
        </span>
      </div>

      {/* Barre de progression visuelle */}
      <div>
        <progress
          className="progress progress-success w-full mt-4"
          value={progressvalue}
          max="100"
        ></progress>
      </div>
    </li>
  );
};

export default BudgetItem;
