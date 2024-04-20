import React, { useState, useEffect } from "react";
import { Logo, Link, SocialIcons, Burger } from "../../components";

export const NavBar = () => {
	// JS responsive
	const [window_size, setWindowSize] = useState(
		window.matchMedia("(max-width: 1271px)").matches
	);
	const [show_abbreviature, setShowAbbreviature] = useState(
		window.matchMedia("(max-width: 428px)").matches
	);
	const [menu_active, setMenuActive] = useState(false);
	const active_navbar = menu_active
		? "navbar__block-mob active"
		: "navbar__block-mob";
	const active_burger = menu_active ? "burger active" : "burger";

	// Events
	const handleWindowSizeChange = () => {
		setWindowSize(window.matchMedia("(max-width: 1271px)").matches);
	};

	const handleWindowSizeChangeLogo = () => {
		setShowAbbreviature(window.matchMedia("(max-width: 428px)").matches);
	};

	const handleClick = () => {
		setMenuActive(!menu_active);
	};

	useEffect(() => {
		window.addEventListener("resize", handleWindowSizeChange);
		window.addEventListener("resize", handleWindowSizeChangeLogo);

		menu_active
			? (document.body.style.overflow = "hidden")
			: (document.body.style = "");

		return () => {
			window.removeEventListener("resize", handleWindowSizeChange);
			window.removeEventListener("resize", handleWindowSizeChangeLogo);
		};
	}, [window_size, menu_active]);

	return (
		<>
			<nav className="navbar">
				<Logo
					show_abbreviature={show_abbreviature}
					closeNavBar={() => {
						setMenuActive(false);
					}}
				/>
				{!window_size && (
					<>
						<ul className="navbar__block">
							<Link />
						</ul>
						<SocialIcons />
					</>
				)}
				<Burger className={active_burger} handleClick={handleClick} />
			</nav>

			{window_size && (
				<ul className={active_navbar}>
					<Link closeNavBar={handleClick} />
					<SocialIcons />
				</ul>
			)}
		</>
	);
};
