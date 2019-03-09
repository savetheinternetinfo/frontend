import React from "react";

let initialState = {
  language: navigator.language
};

export const LanguageContext = React.createContext(initialState);
