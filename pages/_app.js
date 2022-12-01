import localFont from '@next/font/local';
import { SessionProvider } from 'next-auth/react';
import Layout from '../components/layout';
import '../styles/globals.scss';

const GeometriaFont = localFont({ src: './Geometria.ttf' });

function MyApp({ Component, pageProps }) {
	console.log(pageProps.session);
	return (
		<SessionProvider session={pageProps.session}>
			<main className={GeometriaFont.className}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</main>
		</SessionProvider>
	);
}

export default MyApp;

