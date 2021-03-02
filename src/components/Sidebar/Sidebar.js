import React, { useState, useEffect, useRef } from "react";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const btnRef = useRef();
	const aRef = useRef();

	const handleToggle = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			e.preventDefault();
			handleToggle();
		}
	};

	// useEffect(() => {
	// 	if (btnRef) {
	// 		btnRef.current.focus();
	// 	}
	// 	return;
	// }, []);

	useEffect(() => {
		// btnRef.current.focus();
		if (btnRef.current === document.activeElement) {
			document.addEventListener("keydown", handleKeyPress);
		}
		return () => {
			document.removeEventListener("keydown", handleKeyPress);
		};
	}, [handleKeyPress]);

	useEffect(() => {
		// let focusableElement = "a";

		// let focusableElementString = "a";
		let focusableElements = document.querySelectorAll("a[href]");

		// focusableElements = Array.prototype.slice.call(focusableElements);

		// console.log(focusableElements);

		// let firstTabStop = focusableElements[0];
		// let lastTabStop = focusableElements[focusableElements.length - 1];

		if (isSidebarOpen) {
			focusableElements = Array.prototype.slice.call([focusableElements]);
			console.log("focusableElements", focusableElements);
		}
	}, [isSidebarOpen]);

	return (
		<>
			<div
				aria-expanded={isSidebarOpen}
				className={`${styles["sidebar"]} ${
					isSidebarOpen ? styles["sidebar-open"] : ""
				}`}
			>
				<div
					onClick={() => {
						handleToggle();
					}}
					role="button"
					ref={btnRef}
					className={`${styles["burger"]} ${
						isSidebarOpen ? styles["bar1-open"] : ""
					}`}
					tabIndex={0}
				>
					<div
						className={`${styles["bar1"]} ${
							isSidebarOpen ? styles["bar1-open"] : ""
						}`}
					></div>
					<div
						className={`${styles["bar2"]} ${
							isSidebarOpen ? styles["bar2-open"] : ""
						}`}
					></div>
					<div
						className={`${styles["bar3"]} ${
							isSidebarOpen ? styles["bar3-open"] : ""
						}`}
					></div>
				</div>{" "}
				<div className={styles["menu-links"]}>
					<div className={styles["links"]}>
						<a ref={aRef} id="aref" href="/">
							Home
						</a>
						<a ref={aRef} id="aref" href="/">
							About
						</a>
						<a ref={aRef} id="aref" href="/">
							Services
						</a>
						<a ref={aRef} id="aref" href="/">
							Prices
						</a>
						<a ref={aRef} id="aref" href="/">
							Contact
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Sidebar;
