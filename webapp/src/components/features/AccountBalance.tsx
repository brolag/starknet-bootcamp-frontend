import React from 'react';

function AccountBalance() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg rounded-xl p-8 transition-all duration-300 hover:shadow-xl">
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">Account Balance</h2>
      <div className="flex items-center justify-between">
        <span className="text-lg">Balance:</span>
        <span className="text-3xl font-semibold">1000 ETH</span>
      </div>
    </div>
  );
}

export default AccountBalance;