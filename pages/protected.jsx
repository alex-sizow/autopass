import { useSession } from 'next-auth/react';
import SignIn from '../components/Signin/signin';

const Protected = () => {
	const session = useSession();
	console.log(session);
	return (
		<div>
			<SignIn />
		</div>
	);
};

export default Protected;
