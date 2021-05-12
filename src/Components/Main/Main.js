import React from "react";

import TopNavigation from '../Navigation/TopNavigation/TopNavigation';
import styles from './Main.module.css';

const Main = () =>{
    return(
        <div className={styles.Main}>
            <TopNavigation/>    
        </div>
    );
}

export default Main;