import React from 'react';
import { Button } from '../ui/Button';

export default function ReadContract() {
  const [contractData, setContractData] = React.useState('');

  const handleReadContract = () => {
    // Simulating a contract read operation
    setContractData('Dummy contract data');
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg rounded-xl p-8 transition-all duration-300 hover:shadow-xl">
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">Read Contract</h2>
      <div className="flex flex-col items-start gap-4">
        <Button onClick={handleReadContract}>Read Contract</Button>
        <div className="flex items-center justify-between w-full">
          <span className="text-lg">Contract Data:</span>
          <span className="text-xl font-semibold">{contractData || '-'}</span>
        </div>
      </div>
    </div>
  );
}
