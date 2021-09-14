import React, { Component } from "react";

import styles from "./TopNavigation.module.css";

import LoginModal from "../../Modals/LoginModal";

class TopNavigation extends Component {
  render() {
    return (
      <div className={styles.Header}>
        <div className={styles.Link}>
          <a href="/">NEWS</a>
        </div>
        <div className={styles.Links}>
          <span className={styles.Link}>
            <a href="/">Home</a>
          </span>
          <span className={styles.Link}>
            <a href="/">More NEWS</a>
          </span>
        </div>
      </div>
    );
  }
}

export default TopNavigation;
