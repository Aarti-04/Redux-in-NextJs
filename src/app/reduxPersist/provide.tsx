"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { PersistGate } from "redux-persist/integration/react"; // Import PersistGate
import { persistor } from "./store";
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <Provider store={store}>{children}</Provider> */}
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    </>
  );
};

export default Providers;
