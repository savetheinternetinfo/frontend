import * as React from "react";
import FlagIconFactory from "react-flag-icon-css";
// Please only use `FlagIconFactory` one time in your application, there is no
// need to use it multiple times (it would slow down your app).
const FlagIcon = FlagIconFactory(React, { useCssModules: false });

export default FlagIcon;
