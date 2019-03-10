import axios from "axios";
import React, { useState, useEffect } from "react";

function PetitionSignsCurrent() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    axios
      .get("https://www.change.org/api-proxy/-/petitions/13296527")
      .then(e => {
        setCount(e.data.displayed_signature_count);
      });
  });
  return <p>{count}</p>;
}

export default PetitionSignsCurrent;

//BROKEN BY CORS
