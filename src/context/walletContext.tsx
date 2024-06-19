"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface WalletContextProps {
  isWeb3Available: boolean;
  isConnected: boolean;
  account: string | null;
  connectWallet: () => Promise<void>;
}

const WalletContext = createContext<WalletContextProps | undefined>(undefined);

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isWeb3Available, setIsWeb3Available] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState<string | null>(null);

  useEffect(() => {
    // Check if Web3 (MetaMask or other wallet provider) is available
    const checkWeb3Availability = async () => {
      if (typeof window.ethereum !== "undefined") {
        setIsWeb3Available(true);

        try {
          const accounts = await window.ethereum.request({
            method: "eth_accounts",
          });
          if (accounts.length > 0) {
            setAccount(accounts[0]);
            setIsConnected(true);
          }
        } catch (error) {
          console.error("Error fetching accounts:", error);
        }
      } else {
        setIsWeb3Available(false);
      }
    };

    checkWeb3Availability();

    if (window.ethereum) {
      window.ethereum.on("accountsChanged", handleAccountsChanged);
      window.ethereum.on("chainChanged", handleChainChanged);
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener(
          "accountsChanged",
          handleAccountsChanged,
        );
        window.ethereum.removeListener("chainChanged", handleChainChanged);
      }
    };
  }, []);

  const handleAccountsChanged = (accounts: string[]) => {
    if (accounts.length > 0) {
      setAccount(accounts[0]);
      setIsConnected(true);
    } else {
      setAccount(null);
      setIsConnected(false);
    }
  };

  const handleChainChanged = () => {
    window.location.reload();
  };

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        handleAccountsChanged(accounts);
      } else if (window.web3) {
        const accounts = await (window.web3 as any).eth.requestAccounts();
        handleAccountsChanged(accounts);
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  return (
    <WalletContext.Provider
      value={{ isWeb3Available, isConnected, account, connectWallet }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = (): WalletContextProps => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
};
