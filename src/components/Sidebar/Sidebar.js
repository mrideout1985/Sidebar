import React, { useState } from "react";
import styles from "./Sidebar.module.scss";
import Burger from "../Burger/Burger";


const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const handleToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <>

            <div
                className={`${styles["sidebar"]} ${isSidebarOpen ? styles["sidebar-open"] : ""}`}
            >
                <Burger toggleState={handleToggle} isToggled={isSidebarOpen} />
                <h1>Sidebar</h1>
            </div>
            {/* <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                {isSidebarOpen ? "Close" : "Open"}
            </button> */}
        </>

    )

}

export default Sidebar
