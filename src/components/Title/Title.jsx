import React from "react";
import Fade from "react-reveal/Fade";

export const Title = ({
	variant,
	title_class,
	text,
	children,
	action,
	animation,
}) => {
	return (
		<>
			{variant === "h1" ? (
				<Fade {...animation}>
					<h1 className={title_class} onClick={action}>
						{text || children}
					</h1>
				</Fade>
			) : variant === "h2" ? (
				<Fade {...animation}>
					<h2 className={title_class} onClick={action}>
						{text || children}
					</h2>
				</Fade>
			) : variant === "h3" ? (
				<Fade {...animation}>
					<h3 className={title_class} onClick={action}>
						{text || children}
					</h3>
				</Fade>
			) : variant === "h4" ? (
				<h4 className={title_class} onClick={action}>
					{text || children}
				</h4>
			) : variant === "h5" ? (
				<h5 className={title_class} onClick={action}>
					{text || children}
				</h5>
			) : variant === "h6" ? (
				<h6 className={title_class} onClick={action}>
					{text || children}
				</h6>
			) : (
				<Fade {...animation}>
					<h1 className={title_class} onClick={action}>
						{text || children}
					</h1>
				</Fade>
			)}
		</>
	);
};
