"use client";

import { useState } from "react";
import TransactionsTable from "../../components/transactions/transaction-table";
import TransactionModal from "../../components/transactions/transaction-modal";

const TransactionsManagement = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => setIsOpen(false);
  const handleViewDetails = () => setIsOpen(true);

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-2xl font-bold">Transactions Management</h1>
        <p className="opacity-50">Verify incoming payments and manage orders.</p>
      </div>

      <TransactionsTable onViewDetails={handleViewDetails} />

      {/* Render modal */}
      <TransactionModal isOpen={isOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default TransactionsManagement;