import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import Fade from "react-reveal/Fade";

import f from "./img/1.png";
import s from "./img/2.png";
import vs_v from "./img/vs-v.svg";
import vs_s from "./img/vs-s.svg";

const VSBlockImgsStatistics = () => {
	const [focus, setFocus] = useState(false);
	const stat = [{ title: "health" }, { title: "mana" }, { title: "rage" }];

	const handleChange = (isVisible) => {
		if (isVisible) {
			setFocus(true);
		}
	};

	return (
		<div className="vs_block__imgs-statistic">
			{stat.map((s, i) => (
				<VisibilitySensor
					key={i}
					onChange={handleChange}
					delayedCall
					intervalDelay={2500}
				>
					<Fade bottom delay={1000}>
						<div className="vs_block__imgs-statistic-block">
							<span className="title">{s.title}</span>
							<span
								className={
									focus ? `progressbar ${s.title}` : undefined
								}
							/>
						</div>
					</Fade>
				</VisibilitySensor>
			))}
		</div>
	);
};

const VSBlockImgs = () => {
	return (
		<div className="vs_block__imgs">
			<div className="vs_block__imgs-shadow" />
			<VSBlockImgsStatistics />
			<Fade left>
				<img
					className="vs_block__imgs-img"
					src={f}
					alt="Parrots' Fight Club parrot"
				/>
			</Fade>
			<div className="vs_block__imgs-vs">
				<Fade bottom delay={2000}>
					<img
						className="vs_block__imgs-vs-img-v"
						src={vs_v}
						alt="v"
					/>
				</Fade>
				<Fade top delay={2000}>
					<img
						className="vs_block__imgs-vs-img-s"
						src={vs_s}
						alt="s"
					/>
				</Fade>
			</div>
			<Fade right delay={1000}>
				<img
					className="vs_block__imgs-img"
					src={s}
					alt="Parrots' Fight Club parrot"
				/>
			</Fade>
			<VSBlockImgsStatistics />
			<div className="vs_block__imgs-shadow" />
		</div>
	);
};

export const VSBlock = () => {
	return (
		<div className="vs_block">
			<VSBlockImgs />
		</div>
	);
};
