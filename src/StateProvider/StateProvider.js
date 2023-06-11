import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

// provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// we will use this inside components
export const useStateValue = () => useContext(StateContext);
