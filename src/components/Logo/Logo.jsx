import React, { useEffect } from "react";
import { Link as LinkScroll, Events, scrollSpy } from "react-scroll";

export const Logo = ({ show_abbreviature = false, closeNavBar = () => {} }) => {
	useEffect(() => {
		Events.scrollEvent.register("begin");
		Events.scrollEvent.register("end");

		scrollSpy.update();

		return () => {
			Events.scrollEvent.remove("begin");
			Events.scrollEvent.remove("end");
		};
	}, []);

	return (
		<>
			{!show_abbreviature ? (
				<LinkScroll
					to="home"
					className="logo"
					activeClass="logo-active"
					spy={true}
					smooth={true}
					duration={1500}
					offset={0}
					onClick={closeNavBar}
				>
					Parrots' Fight Club
				</LinkScroll>
			) : (
				<LinkScroll
					to="home"
					className="logo"
					activeClass="logo-active"
					spy={true}
					smooth={true}
					duration={1500}
					offset={0}
					onClick={closeNavBar}
				>
					PFC
				</LinkScroll>
			)}
		</>
	);
};
