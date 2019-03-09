import React, { useContext } from "react";
import * as Feather from 'react-feather';

import { LanguageContext } from "../contexts/LanguageContext";
// import Button from "./common/Button";
import Icon from './common/Icon'
import NavIcon from "./common/NavIcon";

function Home() {
  const ctx = useContext(LanguageContext);

  return (<React.Fragment>
    <Icon icon={<Feather.Camera/>}/>
    <NavIcon icon={<Feather.Camera/>} route={'test'}/>
  </React.Fragment>);
}

export default Home;
