import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
const authOptions = {
	session: { strategy: 'jwt' },
	providers: [
		CredentialsProvider({
			credentials: {},
			authorize(credentials, req) {
				const { email, password } = credentials;
				if (email !== 'john@gmail.com' || password !== '1234') {
					throw new Error('Error invalid 1');
				}
				return {
					id: '1234',
					name: 'John Doe',
					email: 'john@gmail.com',
				};
			},
		}),
	],
	pages: { signIn: '/auth/signin' },
	callbacks: {
		async redirect({ url, baseUrl }) {
			return baseUrl;
		},
	},
};
export default NextAuth(authOptions);
