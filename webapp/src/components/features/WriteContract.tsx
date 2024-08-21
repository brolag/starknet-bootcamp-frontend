import React from 'react';
import { Button } from '../ui/Button';

function WriteContract() {
  const [contractStatus, setContractStatus] = React.useState('Idle');

  const handleWriteContract = () => {
    // Simulating a contract write operation
    setContractStatus('Processing...');
    setTimeout(() => {
      setContractStatus('Transaction Completed');
    }, 2000);
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg rounded-xl p-8 transition-all duration-300 hover:shadow-xl">
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">Write Contract</h2>
      <div className="flex flex-col items-start gap-4">
        <Button onClick={handleWriteContract}>Update Contract</Button>
        <div className="flex items-center justify-between w-full">
          <span className="text-lg">Status:</span>
          <span className="text-xl font-semibold">{contractStatus}</span>
        </div>
      </div>
    </div>
  );
}

export default WriteContract;
