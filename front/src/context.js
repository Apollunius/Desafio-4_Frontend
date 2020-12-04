import { createContext, useContext, useState } from "react";

export const tokenctx = createContext();

export function useStores() {
	return useContext(tokenctx);
}

export function StoreProvider(props) {
  const [token, setToken] = useState();
  return (
    <tokenctx.Provider value={{ token, setToken }}>
      {props.children}
    </tokenctx.Provider>
  );
}
