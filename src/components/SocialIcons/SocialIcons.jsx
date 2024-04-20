import React from "react";
import d from "./img/d.svg";
import i from "./img/i.svg";
import t from "./img/t.svg";
import os from "./img/os.svg";

export const SocialIcons = () => {
	const social_info = [
		{ to: "https://twitter.com/ParrotsFight", title: "Twitter", icon: t },
		{
			to: "https://www.instagram.com/parrotsfightclub/?hl=en",
			title: "Instagram",
			icon: i,
		},
		{
			to: "https://discord.com/invite/parrotsfightclub",
			title: "Discord",
			icon: d,
		},
		{
			to: "https://opensea.io/collection/parrots-fight-club-official",
			title: "OpenSea",
			icon: os,
		},
	];

	return (
		<div className="social">
			{social_info.map((s, i) => (
				<a
					key={i}
					className="social__icon"
					href={s.to}
					target="_blank"
					rel="noreferrer"
				>
					<img src={s.icon} alt={s.title} />
				</a>
			))}
		</div>
	);
};
