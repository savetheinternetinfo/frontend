import React from "react";

let initialState = {
  language: "en-en"
};

export const LanguageContext = React.createContext(initialState);
