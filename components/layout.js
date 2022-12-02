import Footer from './Footer/footer';
import Header from './Header/header';
import styles from './layout.module.scss';
import Menu from './Menu/menu';

const Layout = ({ children }) => {
	return (
		<div>
			<Header />

			<div className={styles.container}>
				<Menu />
				{children}
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Layout;
