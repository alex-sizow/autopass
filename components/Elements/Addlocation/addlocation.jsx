import Image from 'next/image';
import styles from '../Addlocation/addlocation.module.scss';

const AddLocation = ({ active, setActive }) => {
	return (
		<div
			className={active ? styles.modalactive : styles.modal}
			onClick={() => setActive(false)}>
			<div className={styles.addphone}>
				<div className={styles.addphone__header}>
					<div>Add location</div>
					<button onClick={() => setActive(false)}>
						<Image
							src='/CloseWhite.svg'
							alt='Picture of the author'
							width={10}
							height={12}
						/>
					</button>
				</div>
				<div className={styles.addphone__list}>
					<div className={styles.addphone__list_item}>
						<Image
							src='/ArrowGreen.svg'
							alt='Picture of the author'
							width={21}
							height={10}
						/>
						<div>Riga</div>
					</div>
					<div className={styles.addphone__list_item}>
						<Image
							src='/ArrowGreen.svg'
							alt='Picture of the author'
							width={21}
							height={10}
						/>
					</div>
					<div className={styles.addphone__list_item}>
						<Image
							src='/ArrowGreen.svg'
							alt='Picture of the author'
							width={21}
							height={10}
						/>
					</div>
					<div className={styles.addphone__list_item}>
						<Image
							src='/ArrowGreen.svg'
							alt='Picture of the author'
							width={21}
							height={10}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddLocation;
