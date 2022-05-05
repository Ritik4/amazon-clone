//set up data layer
//we need this to track the basket

import { createContext, useContext, useReducer } from "react";

// Data layer
export const StateContext = createContext();

//Build a Provider

export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

//this. is how we use it inside of a components
export const useStateValue = () => useContext(StateContext);
