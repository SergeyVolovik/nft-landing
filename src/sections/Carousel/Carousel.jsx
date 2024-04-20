import React from "react";
import Marquee from "react-fast-marquee";

export const Carousel = ({ direction, duration, gallery }) => {
	const settings = {
		direction: direction,
		className: "carousel__slider",
		duration: duration,
		gradientColor: [],
	};

	return (
		<div className="carousel">
			<Marquee {...settings}>
				{gallery.map((p, i) => (
					<img
						className="carousel__img"
						key={i}
						src={p}
						alt="Parrot from Parrots' Fight Club"
					/>
				))}
			</Marquee>
		</div>
	);
};
