import React from "react";

import first from "./img/l.png";
import second from "./img/1.png";
import third from "./img/2.png";
import fourth from "./img/3.png";
import fifth from "./img/4.png";
import sixth from "./img/5.png";
import seventh from "./img/r.png";

export const ImgsBlock = () => {
	const imgs_block = [
		{
			img: first,
			alt: "Parrot",
		},
		{
			img: second,
			alt: "Parrot",
		},
		{
			img: third,
			alt: "Parrot",
		},
		{
			img: fourth,
			alt: "Parrot",
		},
		{
			img: fifth,
			alt: "Parrot",
		},
		{
			img: sixth,
			alt: "Parrot",
		},
		{
			img: seventh,
			alt: "Parrot",
		},
	];

	return (
		<div className="imgs">
			{imgs_block.map((i, k) => (
				<img key={k} className="img" src={i.img} alt={i.alt} />
			))}
			<div className="imgs__box-shadow" />
		</div>
	);
};
