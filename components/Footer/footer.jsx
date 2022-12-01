import Image from 'next/image';
import Link from 'next/link';
import styles from '../Footer/footer.module.scss';
const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.footer__title}>
				<div className={styles.footer__title_logo}>
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
				</div>
				<div className={styles.footer__title_faq}>
					<Link href='/'>F.A.Q.</Link>
					<Link href='/'>Политика конфиденциальности</Link>
					<Link href='/'>Контакты</Link>
				</div>
			</div>
			<div className={styles.footer__note}>
				© AutoPass 2022. Visas tiesības aizsargātas
			</div>
		</div>
	);
};

export default Footer;
