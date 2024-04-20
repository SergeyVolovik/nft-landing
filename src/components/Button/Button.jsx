import React from "react";

export const Button = ({ href, btn_class, children }) => {
	return (
		<a href={href} className={btn_class} target="_blank" rel="noreferrer">
			{children}
		</a>
	);
};
