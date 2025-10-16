"use client";

// Page client pour la gestion des budgets
// Ce fichier contient le formulaire d'ajout de budget (modal), la récupération
// des budgets de l'utilisateur et l'affichage de la liste.
import React, { useEffect, useState, useRef } from "react";
import Wrapper from "../components/Wrapper";
import { useUser } from "@clerk/nextjs";
import EmojiPicker from "emoji-picker-react";
import { addBudget, getBudgetsByUser } from "../actions";
import Notification from "../components/Notification";
import { Plus } from "lucide-react";
import { Budgets } from "@/type";
import Link from "next/link";
import BudgetItem from "../components/BudgetItem";

const page = () => {
  // Composant principal de la page /budgets
  // Données utilisateur (Clerk)
  const user = useUser();

  // États pour le formulaire d'ajout de budget
  const [budgetName, setBudgetName] = useState<string>("");
  const [budgetAmount, setBudgetAmount] = useState<string>("");
  const [showEmoji, setShowEmoji] = useState<boolean>(false);
  const [selectedEmoji, setSelectedEmoji] = useState<string>("");

  // Notifications et liste des budgets récupérés depuis le serveur
  const [notification, setNotification] = useState<string>("");
  const [budgets, setBudgets] = useState<Budgets[]>([]);

  // Contrôle du modal natif <dialog> et affichage d'un overlay fallback
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const closeNotification = () => {
    // Ferme la notification affichée en haut
    setNotification("");
  };

  const handleEmjiSelect = (emojiObject: { emoji: string }) => {
    // Lorsque l'utilisateur sélectionne un emoji dans le picker
    setSelectedEmoji(emojiObject.emoji);
    // on masque le picker
    setShowEmoji(false);
  };

  const handleAddBuget = async () => {
    try {
      const amount = parseFloat(budgetAmount);
      if (isNaN(amount) || amount <= 0) {
        throw new Error("Erreur: veuilleez entrer un nombre positif");
      }

      await addBudget(
        user.user?.primaryEmailAddress?.emailAddress as string,
        budgetName,
        amount,
        selectedEmoji
      );

      // Après création, on recharge la liste des budgets
      fetchBudgets();

      // Ferme le modal (si présent) et met à jour le flag d'affichage
      const modal =
        modalRef.current ??
        (document.getElementById("my_modal_3") as HTMLDialogElement | null);
      if (modal) {
        modal.close();
      }
      setIsModalOpen(false);

      // Reset du formulaire et notification de succès
      setNotification("Nouveau budget crée avec succes");
      setBudgetName("");
      setBudgetAmount("");
      setSelectedEmoji("");
      setShowEmoji(false);
    } catch (error) {
      // Affiche l'erreur à l'utilisateur
      setNotification(`Erreur lors de la creation du budget : ${error}`);
    }
  };

  const fetchBudgets = async () => {
    if (user.user?.primaryEmailAddress?.emailAddress) {
      try {
        const userBudget = await getBudgetsByUser(
          user.user?.primaryEmailAddress.emailAddress
        );

        // Met à jour l'état local avec les budgets récupérés
        setBudgets(userBudget);
      } catch (error) {
        setNotification(`Erreur lors de la recuperation des budget : ${error}`);
      }
    }
  };

  useEffect(() => {
    // Au montage (ou quand l'email utilisateur change), on récupère les budgets
    fetchBudgets();
  }, [user.user?.primaryEmailAddress?.emailAddress]);

  useEffect(() => {
    const m = modalRef.current ?? document.getElementById("my_modal_3");
    if (!m) return;
    const onClose = () => setIsModalOpen(false);
    m.addEventListener("close", onClose as EventListener);
    return () => m.removeEventListener("close", onClose as EventListener);
  }, []);

  return (
    <Wrapper>
      {/* Wrapper fournit le layout général (sidebar, padding, etc.) */}
      {notification && (
        <Notification
          message={notification}
          onclose={closeNotification}
        ></Notification>
      )}
      <div className="flex justify-end mt-6">
        <button
          className="btn btn-soft rounded-sm bg-[#1D283A] border-[#1D283A] border text-white text-xs font-normal"
          onClick={() => {
            const dialog =
              modalRef.current ??
              (document.getElementById(
                "my_modal_3"
              ) as HTMLDialogElement | null);
            if (dialog) {
              dialog.showModal();
              setIsModalOpen(true);
            }
          }}
        >
          Ajouter un budget <Plus className="w-4 h-4" />
        </button>
        {/* Overlay de fallback pour les navigateurs qui ne supportent pas dialog::backdrop
            ce div couvre toute la page et ajoute un flou + teinte sombre */}
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => {
              const dialog =
                modalRef.current ??
                (document.getElementById(
                  "my_modal_3"
                ) as HTMLDialogElement | null);
              if (dialog) dialog.close();
              setIsModalOpen(false);
            }}
          />
        )}

        {/* Modal natif <dialog> : accessible et gère le focus automatiquement */}
        <dialog id="my_modal_3" ref={modalRef} className="modal z-50">
          <div className="modal-box">
            <form method="dialog">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => {
                  const dialog =
                    modalRef.current ??
                    (document.getElementById(
                      "my_modal_3"
                    ) as HTMLDialogElement | null);
                  if (dialog) dialog.close();
                  setIsModalOpen(false);
                }}
              >
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg"> Information du budget</h3>
            <div className="w-full flex flex-col mt-3">
              <input
                type="text"
                value={budgetName}
                placeholder="Nom du budget"
                onChange={(e) => setBudgetName(e.target.value)}
                className="input mb-3"
              />

              <input
                type="number"
                value={budgetAmount}
                placeholder="Montant du budget"
                onChange={(e) => setBudgetAmount(e.target.value)}
                className="input mb-3"
              />
              <button
                className="btn mb-3"
                onClick={() => setShowEmoji(!showEmoji)}
              >
                {selectedEmoji || "selectionner un emoji"}
              </button>

              {showEmoji && <EmojiPicker onEmojiClick={handleEmjiSelect} />}
              <button className="btn" onClick={handleAddBuget}>
                Ajouter
              </button>
            </div>
          </div>
        </dialog>
      </div>
      {/* Liste des budgets */}
      <ul className="grid md:grid-cols-3 gap-3 mt-10">
        {budgets.map((budget) => (
          <Link href={"/"} key={budget.id}>
            <BudgetItem budget={budget} enableHover={1} />
          </Link>
        ))}
      </ul>
    </Wrapper>
  );
};

export default page;
