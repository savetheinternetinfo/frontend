import React, { useContext } from "react";
import * as Feather from "react-feather";

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
      <Icon icon={<Feather.Camera />} />
      <NavIcon icon={<Feather.Camera />} route={"test"} />
    </React.Fragment>
  );
}

export default Home;
