"use client";
import React from "react";
import { useWallet } from "../context/walletContext";

const ConnectWallet: React.FC = () => {
  const { isWeb3Available, isConnected, account, connectWallet } = useWallet();

  return (
    <div>
      {!isWeb3Available ? (
        <p className="text-red-600">Wallet connection not available</p>
      ) : (
        <button
          onClick={connectWallet}
          className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${
            isConnected ? "bg-green-500 hover:bg-green-600" : ""
          }`}
          disabled={isConnected}
        >
          {isConnected ? `Connected: ${account}` : "Connect Wallet"}
        </button>
      )}
    </div>
  );
};

export default ConnectWallet;
