import React, { createContext, useContext, useReducer } from "react";
import { initialState } from "./reducer";
// Prepares the datalayer
export const StateContext = createContext();

// Wrap our app and provide teh data layer to all components
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull Information form the data layer
export const useStateValue = () => useContext(StateContext);
