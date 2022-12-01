import Image from 'next/image';
import styles from '../Selected/selected.module.scss';

const Selected = () => {
	return (
		<div className={styles.selected}>
			<div className={styles.selected__title}>ВЫБРАНО</div>
			<div className={styles.selected__list}>
				<div className={styles.selected__list_first}>
					<div className={styles.selected__list_first_item}>
						<div>Brivibas 258, Daugavpils</div>
						<Image
							src='/ArrowDoubleGreen.svg'
							alt='Picture of the author'
							width={9}
							height={16}
						/>
					</div>
					<p></p>
					<div className={styles.selected__list_first_item}>
						<div>Brivibas 258, Daugavpils</div>
						<Image
							src='/ArrowDoubleGreen.svg'
							alt='Picture of the author'
							width={9}
							height={16}
						/>
					</div>
				</div>
				<div className={styles.selected__list_second}>
					<div>Airport, Rīga</div>
					<Image
						src='/ArrowDoubleBlue.svg'
						alt='Picture of the author'
						width={9}
						height={16}
					/>
				</div>
				<div className={styles.selected__list_second}>
					<div>Airport, Rīga</div>
					<Image
						src='/ArrowDoubleBlue.svg'
						alt='Picture of the author'
						width={9}
						height={16}
					/>
				</div>
			</div>
		</div>
	);
};

export default Selected;
