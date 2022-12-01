import Image from 'next/image';
import styles from '../Suitable/suitable.module.scss';

const Suitable = () => {
	return (
		<div className={styles.suitable}>
			<div className={styles.suitable__title}>
				<div className={styles.suitable__title_name}>
					СОВПАДЕНИЕ
				</div>
				<Image
					src='/SmileBig.svg'
					alt='Picture of the author'
					width={53}
					height={53}
				/>
				<div className={styles.suitable__title_footer}>
					There are results for your search
				</div>
			</div>
			<div className={styles.suitable__list}>
				<div className={styles.suitable__list_item}>
					<div className={styles.suitable__list_item_info}>
						<Image
							src='/Passenger.svg'
							alt='Picture of the author'
							width={25}
							height={30}
						/>
						<div>
							<div>Daugavpils - Rīga</div>
							<div>
								<div>28.10.2022</div> <a>14:00</a>
							</div>
						</div>
					</div>
					<div className={styles.suitable__list_item_message}>
						<div>2 passenger</div>
						<button>Message</button>
					</div>
				</div>
				<div className={styles.suitable__list_item}>
					<div className={styles.suitable__list_item_info}>
						<Image
							src='/Passenger.svg'
							alt='Picture of the author'
							width={25}
							height={30}
						/>
						<div>
							<div>Daugavpils - Rīga</div>
							<div>
								<div>28.10.2022</div> <a>14:00</a>
							</div>
						</div>
					</div>
					<div className={styles.suitable__list_item_message}>
						<div>2 passenger</div>
						<button>Message</button>
					</div>
				</div>
				<div className={styles.suitable__list_item}>
					<div className={styles.suitable__list_item_info}>
						<Image
							src='/Passenger.svg'
							alt='Picture of the author'
							width={25}
							height={30}
						/>
						<div>
							<div>Daugavpils - Rīga</div>
							<div>
								<div>28.10.2022</div> <a>14:00</a>
							</div>
						</div>
					</div>
					<div className={styles.suitable__list_item_message}>
						<div>2 passenger</div>
						<button>Message</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Suitable;
