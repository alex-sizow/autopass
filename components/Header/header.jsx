import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../Header/header.module.scss';
import SignIn from '../Signin/signin';
//onClick={() => signIn()

const Header = () => {
	const [modalActive, setModalActive] = useState(false);
	return (
		<div className={styles.header}>
			<Link
				href='/'
				className={styles.header__title}>
				<Image
					src='/Logo.png'
					alt='Picture of the author'
					width={42}
					height={41}
				/>

				<Image
					src='/AutoPass.png'
					alt='Picture of the author'
					width={96}
					height={17}
				/>
			</Link>
			<div className={styles.header__menu}>
				<Link href='/balance'>Balance: 0.50 €</Link>
				<Image
					src='/MessageHeader.svg'
					alt='Picture of the author'
					width={37}
					height={37}
				/>
				<Link href='/profile'>
					<Image
						src='/Notification.svg'
						alt='Picture of the author'
						width={37}
						height={37}
					/>
				</Link>
				<button onClick={() => setModalActive(true)}>
					<Image
						src='/Avatar.png'
						alt='Picture of the author'
						width={37}
						height={37}
					/>
				</button>
				<Image
					src='/Flag.png'
					alt='Picture of the author'
					width={35}
					height={22}
				/>
			</div>
			<SignIn
				active={modalActive}
				setActive={setModalActive}
			/>
		</div>
	);
};

export default Header;
