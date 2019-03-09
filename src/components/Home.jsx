import React, { useContext } from "react";

import { LanguageContext } from "../contexts/LanguageContext";
// import Button from "./common/Button";
import Icon from "./common/Icon";
import NavIcon from "./common/NavIcon";
import Navbar from "./Navbar";

function Home() {
  const ctx = useContext(LanguageContext);
  return (
    <React.Fragment>
      <Navbar />
      <Icon icon="Camera" />
      <NavIcon icon="Camera" route={"test"} />
    </React.Fragment>
  );
}

export default Home;
