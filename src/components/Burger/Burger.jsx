import React from "react";

export const Burger = ({ className, handleClick }) => {
	return (
		<div className={className} onClick={handleClick}>
			<span />
			<span />
			<span />
		</div>
	);
};
