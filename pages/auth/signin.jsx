import { signIn } from 'next-auth/react';
import { useState } from 'react';

const SignIn = () => {
	const [userInfo, setUserInfo] = useState({
		email: '',
		password: '',
	});
	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await signIn('credentials', {
			email: userInfo.email,
			password: userInfo.password,
			redirect: true,
		});

		console.log(res);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h1>Login</h1>
				<input
					value={userInfo.email}
					type='email'
					placeholder='john@email.com'
					onChange={({ target }) =>
						setUserInfo({ ...userInfo, email: target.value })
					}
				/>
				<input
					value={userInfo.password}
					type='password'
					placeholder='*********'
					onChange={({ target }) =>
						setUserInfo({ ...userInfo, password: target.value })
					}
				/>
				<input
					type='submit'
					value='Login'
				/>
			</form>
		</div>
	);
};

export default SignIn;
