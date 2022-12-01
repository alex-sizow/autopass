import Image from 'next/image';
import styles from '../inputSearch/inputsearch.module.scss';
import TimeSlider from './../timeslider/timeslider';

const InputSearch = ({ active, setActive }) => {
	return (
		<div
			className={active ? styles.modalactive : styles.modal}
			onClick={() => setActive(false)}>
			<form className={styles.inputsearch}>
				<div className={styles.inputsearch__town}>
					<input
						type='text'
						placeholder='Daugavpils'></input>
					<Image
						src='/TwoArrow.svg'
						alt='Picture of the author'
						width={22}
						height={22}
					/>
					<input
						type='text'
						placeholder='Daugavpils'></input>
				</div>
				<div className={styles.inputsearch__city}>
					<input
						type='text'
						placeholder='Baldone'
					/>
					<input
						type='text'
						placeholder='Baldone'
					/>
					<input
						type='text'
						placeholder='Baldone'
					/>
				</div>
				<div className={styles.inputsearch__time}>
					<input
						type='text'
						placeholder='28.10.2022'
					/>
					<input
						type='text'
						placeholder='28.10.2022'
					/>
				</div>
				<div className={styles.inputsearch__timeslider}>
					<TimeSlider />
				</div>
			</form>
		</div>
	);
};

export default InputSearch;
