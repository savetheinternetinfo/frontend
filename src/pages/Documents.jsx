import React from "react";
import parse from "html-react-parser";

import { useStateValue } from "../contexts/StateContext";

function Documents() {
  const [{ language, translation }] = useStateValue();
  return (
    <div className="container mx-auto -mt-10 px-6 py-8">
      <h1>{translation.documents_title}</h1>
      <p class="mb-10">
        {parse(translation.documents_summary)}
      </p>
      <div>
        <h3>Anhörung Innen- und Rechtsausschuss des Schleswig-Holsteinischen Landtags</h3>
        <p>Description</p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          class="border border-orange rounded-sm p-1 hover:bg-orange hover:text-blue bezier"
          href="https://cdn.discordapp.com/attachments/458283331939729418/616926379321196575/Anhorung_Innen_und_Rechtsausschuss_LT_SH_-_aktuell.pdf"
        >
          Download
        </a>
      </div>
    </div>
  );
}

export default Documents;
