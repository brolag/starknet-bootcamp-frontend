import { useAccount, useBalance } from "@starknet-react/core";



function AccountBalance() {
  const { address } = useAccount();
  const { isLoading, isError, error, data } = useBalance({
      address,
      watch: true
  })

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg rounded-xl p-8 transition-all duration-300 hover:shadow-xl">
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">Account Balance</h2>
      {isError && <div className="text-red-500">Error fetching balance</div>}
      {isLoading && <div>Loading...</div>}
      {data && !isError && !isLoading && (
      <div className="flex items-center justify-between">
        <span className="text-lg">Balance:</span>
        <span className="text-xl font-semibold">{data?.formatted} {data?.symbol}</span>
        </div>
      )}
    </div>
  );
}

export default AccountBalance;
