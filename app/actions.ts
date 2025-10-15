"use server";

import { prisma } from "@/lib/prisma";

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
