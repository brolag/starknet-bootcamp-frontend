import { useBlock } from "@starknet-react/core";
import { BlockNumber as StarknetBlockNumber } from "starknet";

function BlockNumber() {

   const { data, isLoading, isError } = useBlock({
    refetchInterval: false,
    blockIdentifier: 'latest' as StarknetBlockNumber
  })

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg rounded-xl p-8 transition-all duration-300 hover:shadow-xl">
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">Block Number</h2>
      {isError && <div className="text-red-500">Error fetching block number</div>}
      {isLoading && <div>Loading...</div>}
      { data && !isError && !isLoading && (
        <div className="flex items-center justify-between">
          <span className="text-lg">Latest:</span>
          <span className="text-3xl font-semibold">{data?.block_number}</span>
        </div>
      )}
    </div>
  );
}
export default BlockNumber;
