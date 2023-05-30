import React, { useState, useEffect } from "react";
import { ethers, BigNumber } from "ethers";
import Web3Modal from "web3modal";

//INTERNAL IMPORT
import {
  checkIfWalletConnected,
  connectWallet,
  connectingWithBooToken,
  connectingWithLifeToken,
  connectingWithSingleSwapToken,
  connectingWithIWETHToken,
  connectingWithDAIToken,
} from "../utils/appFeatures";

import { IWETHABI } from "./constants";
import ERC20 from "./ERC20.json";

export const SwapTokenContext = React.createContext();

export const SwapTokenContextProvider = ({ children }) => {
  const swap = "welcome to swap my token";

  //USESTATE
  const [account, setAccount] = useState('');
  const [ether,setEther] = useState("");
  const [networkConnected, setNetworkConnected] = useState('');
  const [weth9, setWeth9] = useState("");
  const [dai, setDai] = useState("");

  const [tokenData, setTokenData] = useState([]);

  return (
    <SwapTokenContext.Provider value={{ swap }}>
      {children}
    </SwapTokenContext.Provider>
  );
};
