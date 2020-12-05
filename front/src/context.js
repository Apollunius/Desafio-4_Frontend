import { createContext, useContext, useState } from "react";

export const tokenctx = createContext();

export function useStores() {
	return useContext(tokenctx);
}

export function StoreProvider(props) {
  const [token, setToken] = useState();
  const [idDoCliente, setIdDoCliente] = useState();
  return (
    <tokenctx.Provider value={{ token, setToken, idDoCliente, setIdDoCliente }}>
      {props.children}
    </tokenctx.Provider>
    
  );
}
