"use client";
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { makeStore } from "./store";
import { hydrateAuth } from "./authSlice";

export default function StoreProvider({ children }) {
  const storeRef = useRef(null);
  if (!storeRef.current) storeRef.current = makeStore();

  useEffect(() => {
    storeRef.current.dispatch(hydrateAuth());
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
}













