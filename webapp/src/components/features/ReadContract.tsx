import React from 'react';
import { useContractRead } from "@starknet-react/core";
import { Button } from '../ui/Button';
import { address, abi } from '../../abi/HelloStarknet';

function ReadContract() {
  const { data, isError, isLoading, error, refetch } = useContractRead({
    args: [],
    functionName: "get_balance",
    abi,
    address,
    watch: true,
  });

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg rounded-xl p-8 transition-all duration-300 hover:shadow-xl">
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">Read Contract</h2>
      <div className="flex flex-col items-start gap-4">
        <Button onClick={() => refetch()}>Read Contract</Button>
        <div className="flex items-center justify-between w-full">
          <span className="text-lg">Balance:</span>
          {isError && <div className="text-red-500">Error fetching contract data</div>}
          {isLoading && <div>Loading...</div>}
          {data && !isError && !isLoading && (
            <span className="text-xl font-semibold">{data.toString()} </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ReadContract;