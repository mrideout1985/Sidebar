import React, { useState, useEffect } from "react";
import styles from "./Burger.module.scss"

const Burger = (props) => {
    return (
        <div
            onClick={() => {
                props.toggleState();
            }}
            className={`${styles["burger"]} ${
                props.isToggled ? styles["bar1-open"] : ""
                }`}
        >
            <div
                className={`${styles["bar1"]} ${
                    props.isToggled ? styles["bar1-open"] : ""
                    }`}
            ></div>
            <div
                className={`${styles["bar2"]} ${
                    props.isToggled ? styles["bar2-open"] : ""
                    }`}
            ></div>
            <div
                className={`${styles["bar3"]} ${
                    props.isToggled ? styles["bar3-open"] : ""
                    }`}
            ></div>
        </div>
    );
}

export default Burger;