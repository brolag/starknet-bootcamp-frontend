import React from 'react';
import { useContractWrite, useContract } from "@starknet-react/core";

import { Button } from '../ui/Button';
import {abi, address} from '../../abi/HelloStarknet'

function WriteContract() {
  const [newBalance, setNewBalance] = React.useState("");

  const { contract } = useContract({
    abi,
    address,
  });

  const calls = React.useMemo(() => {
		if (!address || !contract) return [];
		return contract.populateTransaction["increase_balance"]!(BigInt(newBalance), { low: 1, high: 0 });
	}, [contract, newBalance]);

	const {
		writeAsync,
		data,
		isPending,
	} = useContractWrite({
		calls,
	});


  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg rounded-xl p-8 transition-all duration-300 hover:shadow-xl">
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">Write Contract</h2>
      <div className="flex flex-col items-start gap-4">
        <input
          className='w-full text-black'
          type="number"
          value={newBalance}
          onChange={(e) => setNewBalance(e.target.value)}
          placeholder="Enter new balance"
        />
        <Button onClick={() => {
          writeAsync()
          setNewBalance("")
        }}>Update Contract</Button>
        <div className="flex items-center justify-between w-full">
          <span className="text-lg">Status:</span>
          <span className="text-xl font-semibold">{isPending}</span>
        </div>
      </div>
    </div>
  );
}

export default WriteContract;
