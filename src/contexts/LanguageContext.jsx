import React from "react";

let initialState = {
  language: navigator.language,
  translation: {}
};

export const LanguageContext = React.createContext(initialState);
