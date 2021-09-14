import React, { useState } from "react";

import TopNavigation from "../Navigation/TopNavigation/TopNavigation";
import styles from "./Main.module.css";

const Main = () => {
  const [isLoginModalOpen, setLoginModal] = useState(true);
  const [isSignUpModalOpen, setSignUpModal] = useState(false);

  return (
    <div className={styles.Main}>
      <TopNavigation />
    </div>
  );
};

export default Main;
