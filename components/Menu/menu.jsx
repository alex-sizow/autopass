import Image from 'next/image';
import styles from '../Menu/menu.module.scss';

const Menu = () => {
	return (
		<div className={styles.menu}>
			<button className={styles.menu__button}>
				<Image
					src='/ButtonMenu.svg'
					alt='Picture of the author'
					width={33}
					height={21}
				/>
			</button>
			<button className={styles.menu__share}>
				<div>Поездка 1</div>
				<Image
					src='/ButtonShare.svg'
					alt='Picture of the author'
					width={19}
					height={18}
				/>
			</button>
			<div className={styles.menu__add}>
				<Image
					src='/ButtonAdd.svg'
					alt='Picture of the author'
					width={23}
					height={23}
				/>
			</div>
		</div>
	);
};

export default Menu;
