import Image from 'next/image';
import styles from '../list/list.module.scss';
const List = ({ active, setActive }) => {
	return (
		<div
			className={active ? styles.modalactive : styles.modal}
			onClick={() => setActive(false)}>
			<div className={styles.list}>
				<div className={styles.list__title}>From</div>
				<div className={styles.list__items}>
					<div className={styles.list__items_item}> Ādaži</div>
					<div className={styles.list__items_item}> Ādaži</div>
					<div className={styles.list__items_item}> Ādaži</div>
					<div className={styles.list__items_item}> Ādaži</div>
					<div className={styles.list__items_item}> Ādaži</div>
					<div className={styles.list__items_item}> Ādaži</div>
					<div className={styles.list__items_item}> Ādaži</div>
					<div className={styles.list__items_item}> Ādaži</div>
					<div className={styles.list__items_item}> Ādaži</div>
					<div className={styles.list__items_item}> Ādaži</div>
					<div className={styles.list__items_item}> Ādaži</div>
				</div>
				<div className={styles.list__buttons}>
					<button>
						<Image
							src='/Plane.png'
							alt='Picture of the author'
							width={22}
							height={22}
						/>
					</button>
					<button>
						<Image
							src='/Bus.png'
							alt='Picture of the author'
							width={19}
							height={22}
						/>
					</button>
					<button>
						<Image
							src='/Train.png'
							alt='Picture of the author'
							width={19}
							height={22}
						/>
					</button>
				</div>
			</div>
		</div>
	);
};

export default List;
