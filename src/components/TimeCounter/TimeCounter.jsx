import React from "react";
import Countdown, { zeroPad } from "react-countdown";

const Counter = ({ days, hours, minutes, seconds }) => {
	return (
		<div className="counter">
			<div className="counter__block">
				<span className="number">{zeroPad(days)}</span>
				<span>Days</span>
			</div>
			<div className="counter__block">
				<span className="number">{zeroPad(hours)}</span>
				<span>Hours</span>
			</div>
			<div className="counter__block">
				<span className="number">{zeroPad(minutes)}</span>
				<span>Minutes </span>
			</div>
			<div className="counter__block">
				<span className="number">{zeroPad(seconds)}</span>
				<span>Seconds</span>
			</div>
		</div>
	);
};

export const TimeCounter = () => {
	const saleDate = "01/14/2022 10:00:00 PM UTC+1".toString();

	const renderer = ({ days, hours, minutes, seconds, completed }) => {
		if (completed) {
			// Render a completed state
			return <Counter days="00" hours="00" minutes="00" seconds="00" />;
		} else {
			// Render a countdown
			return (
				<Counter
					days={days}
					hours={hours}
					minutes={minutes}
					seconds={seconds}
				/>
			);
		}
	};

	return <Countdown date={saleDate} renderer={renderer} />;
};
