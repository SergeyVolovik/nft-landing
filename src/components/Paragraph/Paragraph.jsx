import React from "react";
import Fade from "react-reveal/Fade";

export const Paragraph = ({ paragraph_class = "", text = "", animation }) => {
	return (
		<Fade {...animation}>
			<p className={paragraph_class}>{text}</p>
		</Fade>
	);
};
