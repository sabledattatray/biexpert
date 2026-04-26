"use client";

import React, { useState } from "react";
import { Trash2, AlertCircle, X, Check } from "lucide-react";
import { deletePost } from "./actions";

interface DeleteButtonProps {
  id: string;
}

export function DeleteButton({ id }: DeleteButtonProps) {
  const [isConfirming, setIsConfirming] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    await deletePost(id);
    // The page will refresh via revalidatePath in the action
    setIsDeleting(false);
    setIsConfirming(false);
  };

  if (isConfirming) {
    return (
      <div className="flex items-center gap-1 bg-rose-500/10 border border-rose-500/20 p-1 animate-in zoom-in-95 duration-200">
        <button 
          onClick={handleDelete}
          disabled={isDeleting}
          className="p-1 hover:bg-rose-500 hover:text-white text-rose-500 transition-colors"
          title="Confirm Delete"
        >
          <Check size={14} />
        </button>
        <button 
          onClick={() => setIsConfirming(false)}
          className="p-1 hover:bg-muted text-muted-foreground transition-colors"
          title="Cancel"
        >
          <X size={14} />
        </button>
      </div>
    );
  }

  return (
    <button 
      onClick={() => setIsConfirming(true)}
      className="p-2 hover:bg-muted text-muted-foreground hover:text-rose-500 transition-all border border-transparent hover:border-border cursor-pointer"
      title="Delete Resource"
    >
      <Trash2 size={14} />
    </button>
  );
}
