import React, { useEffect } from "react";
import { Link as LinkScroll, Events, scrollSpy } from "react-scroll";

export const Link = ({ closeNavBar }) => {
	const links_info = [
		{ to: "about", title: "About" },
		{ to: "roadmap", title: "Roadmap" },
		{ to: "team", title: "Team" },
		{ to: "faq", title: "Faq" },
	];

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
			{links_info.map((l, i) => (
				<li key={i} className="link">
					<LinkScroll
						to={l.to}
						activeClass="link-active"
						spy={true}
						smooth={true}
						duration={1500}
						offset={-100}
						onClick={closeNavBar}
					>
						{l.title}
					</LinkScroll>
				</li>
			))}
		</>
	);
};
