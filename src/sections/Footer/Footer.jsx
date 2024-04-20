import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { SocialIcons } from "../../components";

const FooterLinks = ({ links }) => {
	return (
		<ul className="footer__info-block-links">
			{links.map((l, i) => (
				<li key={i} className="link">
					<a href={l.link} target={l.target} download={l.download}>
						{l.link_text}
					</a>
				</li>
			))}
		</ul>
	);
};

const FooterInfo = () => {
	const support = [
		{
			link_text: "Privacy Policy",
			link: "files/Parrots’ Fight Club Policy.pdf",
			download: true,
			target: "_self",
		},
		{
			link_text: "Terms Of Use",
			link: "files/Parrots’ Fight Club Terms.pdf",
			download: true,
			target: "_self",
		},
		{
			link_text: "Smart Contract",
			link: "https://etherscan.io/address/0xe146f096e17e0e613743d781e7a8a305639045bf",
			download: false,
			target: "_blank",
		},
	];

	return (
		<div className="footer__info">
			<div className="footer__info-block">
				<FooterLinks links={support} />
			</div>
		</div>
	);
};

const FooterCreate = () => {
	return (
		<div className="footer__create">
			<span>
				© Copyrights 2021. Parrots’ Fight Club. All rights reserved.
			</span>
		</div>
	);
};

export const Footer = () => {
	return (
		<footer className="footer">
			<Fade left distance="20px">
				<SocialIcons />
			</Fade>
			<Fade right distance="20px">
				<FooterInfo />
			</Fade>
			<Slide top>
				<FooterCreate />
			</Slide>
		</footer>
	);
};
