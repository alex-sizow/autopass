import Footer from './Footer/footer';
import Header from './Header/header';
import Menu from './Menu/menu';

const Layout = ({ children }) => {
	return (
		<div>
			<Header />
			<Menu />
			{children}
			<Footer></Footer>
		</div>
	);
};

export default Layout;
