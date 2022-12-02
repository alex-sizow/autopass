import { useState } from 'react';
import ReactSlider from 'react-slider';

import styles from '../timeslider/timeslider.module.scss';

const TimeSlider = () => {
	const [min, setMin] = useState(1);
	const [middle, setMiddle] = useState(720);
	const [max, setMax] = useState(1430);

	const numtotime = (num) => {
		const hour = Math.floor(num / 60);
		let minute = num - hour * 60;
		if (minute === 0) {
			minute = '00';
		}
		// 1440
		return (num = `${hour}:${minute}`);
	};

	const trackStyle = {
		background: `${(props) =>
			props.index === 2
				? '#f00'
				: props.index === 1
				? '#0f0'
				: '#ddd'}`,
		height: '20px',
	};

	return (
		<div className={styles.timeslider}>
			<div className={styles.timeslider__title}>Choose time</div>
			<ReactSlider
				className={styles.timeslider__line}
				thumbClassName={styles.timeslider__line_thumb}
				trackClassName='example-track'
				value={[min, middle, max]}
				defaultValue={[min, middle, max]}
				ariaLabel={[
					'Leftmost thumb',
					'Middle thumb',
					'Rightmost thumb',
				]}
				renderThumb={(props, state) => (
					<div {...props}>
						<div>{numtotime(state.valueNow)}</div>
					</div>
				)}
				renderTrack={(props, state) => (
					<div
						{...props}
						className={styles.timeslider__line_track}
						index={state.index}></div>
				)}
				pearling={false}
				withTracks={true}
				max={1430}
				minDistance={10}
				step={10}
				onChange={([min, middle, max]) => {
					setMin(min);
					setMiddle(middle);
					setMax(max);
				}}
			/>
		</div>
	);
};

export default TimeSlider;
