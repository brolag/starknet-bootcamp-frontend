"use client";
import { useAccount, useConnect, useDisconnect } from "@starknet-react/core";
import { useMemo } from "react";
import { Button } from "../ui/Button";
import Image from "next/image";

function WalletConnected() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();

  const shortenedAddress = useMemo(() => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }, [address]);

  return (
    <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg text-white">
      <div className="flex items-center">
        <span className="font-semibold mr-2">Connected:</span>
        <span className="bg-white text-purple-600 px-3 py-1 rounded-full font-mono text-sm">
          {shortenedAddress}
        </span>
      </div>
      <Button onClick={() => disconnect()} variant="outline" className="bg-white text-purple-600 hover:bg-purple-100 hover:text-purple-800">
        Disconnect
      </Button>
    </div>
  );
}

function ConnectWallet() {
  const { connectors, connect } = useConnect();

  return (
    <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg">
      <h2 className="mb-4 text-xl font-bold text-white">Choose a wallet:</h2>
      <div className="grid grid-cols-2 gap-4">
        {connectors.map((connector) => (
          <Button
            key={connector.id}
            onClick={() => connect({ connector })}
            variant="secondary"
            className="flex items-center justify-center gap-2 bg-white text-purple-600 hover:bg-purple-100 transition-colors duration-300"
          >
            {connector.icon && connector.icon.light && (
              <Image src={connector.icon.light} alt={`${connector.id} icon`} width={24} height={24} />
            )}
            {connector.id}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default function WalletBar() {
  const { address } = useAccount();

  return (
    <div className="max-w-md w-full mx-auto">
      {address ? <WalletConnected /> : <ConnectWallet />}
    </div>
  );
}
