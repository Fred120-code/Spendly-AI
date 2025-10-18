"use server";

import { prisma } from "@/lib/prisma";

//pemet de creer une nouveau utlisateur
export async function checkAndAddUser(email: string | undefined) {
  if (!email) return;
  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!existingUser) {
      await prisma.user.create({
        data: { email },
      });
      console.log("Nouvel utilisateur creer");
    }
  } catch (error) {
    console.error(error);
  }
}

//permet d'ajouter un budget pour l'utlisateur connecté
export async function addBudget(
  email: string,
  name: string,
  amount: number,
  selectedEmo: string
) {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      throw new Error("Utitilisateur non trouvé");
    }

    await prisma.budget.create({
      data: {
        name,
        amount,
        emoji: selectedEmo,
        userId: user.id,
      },
    });
    
  } catch (error) {
    console.error("Erreur lors de l'ajout de l'erreur", error);
  }
}

//permet de recher les budget creer par un utilisateur
export async function getBudgetsByUser(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
      include: {
        budgets: {
          include: {
            transactions: true,
          },
        },
      },
    });
    if (!user) {
      throw new Error("utilisateur non trouvé");
    }

    return user.budgets;
  } catch (error) {
    console.error("Erreur lors de la recuperation des budgets:", error);
    throw error;
  }
}
//aficher les transactions d'un busget en particulier
export async function getTrasactionByBdugetId(budgetId: string) {
  try {
    const budget = await prisma.budget.findUnique({
      where: { id: budgetId },
      include: {
        transactions: true,
      },
    });
    if (!budget) {
      throw new Error("budget non trouvé");
    }
    return budget;
  } catch (error) {
    console.error("Erreur lors de la recuperation des transaction:", error);
  }
}

//permet de creer une nouvelle transaction pour le budget donné
export async function addTansactionToBuget(
  budgetId: string,
  amount: number,
  description: string
) {
  try {
    const budget = await prisma.budget.findUnique({
      where: { id: budgetId },
      include: { transactions: true },
    });
    if (!budget) {
      throw new Error("Budget non trouvé");
    }

    // montant du budget dispo
    const totalTransaction = budget.transactions.reduce((sum, transaction) => {
      return sum + transaction.amount;
    }, 0);

    //montant du budget si la transction est realiser
    const totalWithtransac = totalTransaction + amount;
    if (totalWithtransac > budget.amount) {
      throw new Error("Buget insuffisant pour cette transaction");
    }

    //creation d'un nouveau budget si la condition est verifiée
    const newtransac = await prisma.transaction.create({
      data: {
        amount,
        description,
        emoji: budget.emoji,
        budget : {
          connect:{
            id: budget.id
          }
        }
      }
    })

  } catch (error) {
    console.error("Erreur lors de l'ajout de la transaction:", error);
  }
}
