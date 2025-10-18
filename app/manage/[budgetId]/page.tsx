"use client";

import { getTrasactionByBdugetId } from "@/app/actions";
import BudgetItem from "@/app/components/BudgetItem";
import Wrapper from "@/app/components/Wrapper";
import { Budgets } from "@/type";
import React, { useEffect, useState } from "react";

const page = ({ params }: { params: Promise<{ budgetId: string }> }) => {
  const [budgetId, setBudgetID] = useState<string>("");
  const [budget, setBudget] = useState<Budgets>();


  //recupere la liste de transactions du budget
  async function fetchBudgetData(budgetId: string) {
    try {
      if (budgetId) {
        const budgetData = await getTrasactionByBdugetId(budgetId);
        setBudget(budgetData);
      }
    } catch (error) {
      console.error("erreur lors de la recuperation", error);
    }
  }

  //apel des fonctions lorsqu'il y a render
  useEffect(() => {
    const getId = async () => {
      const resolvedParams = await params;
      setBudgetID(resolvedParams.budgetId);
      fetchBudgetData(resolvedParams.budgetId);
    };
    getId();
  }, []);

  return (
    <Wrapper>
      <div>
        {budget && (
          <div className="flex md:flex-row flex-col">
            <div className="md:w-1/3">
              <BudgetItem budget={budget} enableHover={0} />
              <button className="btn mt-4">Supprimer le budget</button>
              <div className="space-y-4 flex flex-col mt-4">

              </div>
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default page;
