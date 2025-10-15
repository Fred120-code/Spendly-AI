"use client";

import React, { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import { useUser } from "@clerk/nextjs";
import EmojiPicker from "emoji-picker-react";
import { addBudget, getBudgetsByUser } from "../actions";
import Notification from "../components/Notification";
import { Plus } from "lucide-react";
import { Budgets } from "@/type";

const page = () => {
  const user = useUser();
  const [budgetName, setBudgetName] = useState<string>("");
  const [budgetAmount, setBudgetAmount] = useState<string>("");
  const [showEmoji, setShowEmoji] = useState<boolean>(false);
  const [selectedEmoji, setSelectedEmoji] = useState<string>("");
  const [notification, setNotification] = useState<string>("");
  const [budgets, setBudgets] = useState<Budgets[]>([]);

  const closeNotification = () => {
    setNotification("");
  };

  const handleEmjiSelect = (emojiObject: { emoji: string }) => {
    setSelectedEmoji(emojiObject.emoji);
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

      const modal = document.getElementById("my_modal_3") as HTMLDialogElement;
      if (modal) {
        modal.close();
      }

      setNotification("Nouveau budget crée avec succes");
      setBudgetName("");
      setBudgetAmount("");
      setSelectedEmoji("");
      setShowEmoji(false);
    } catch (error) {
      setNotification(`Erreur lors de la creation du budget : ${error}`);
    }
  };

  const fetchBudgets = async () => {
    if (user.user?.primaryEmailAddress?.emailAddress) {
      try {
        const userBudget = await getBudgetsByUser(
          user.user?.primaryEmailAddress.emailAddress
        );

        setBudgets(userBudget);        

      } catch (error) {
        setNotification(`Erreur lors de la recuperation des budget : ${error}`);
      }
    }
  };

  return (
    <Wrapper>
      {notification && (
        <Notification
          message={notification}
          onclose={closeNotification}
        ></Notification>
      )}
      <div className="flex justify-end mt-6">
        <button
          className="btn btn-soft rounded-sm bg-[#1D283A] border-[#1D283A] border text-white text-xs font-normal"
          onClick={() =>
            (
              document.getElementById("my_modal_3") as HTMLDialogElement
            ).showModal()
          }
        >
          Ajouter un budget <Plus className="w-4 h-4" />
        </button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
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
    </Wrapper>
  );
};

export default page;
