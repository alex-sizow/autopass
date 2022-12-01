import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../Signin/signin.module.scss';

const SignIn = ({ active, setActive }) => {
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
		<div
			className={active ? styles.modalactive : styles.modal}
			onClick={() => setActive(false)}>
			<div
				className={styles.signin}
				onClick={(e) => e.stopPropagation()}>
				<button className={styles.signin__close}>
					<Image
						src='/Close.svg'
						alt='Picture of the author'
						width={13}
						height={14}
					/>
				</button>
				<div className={styles.signin__title}>
					Sign in your AutoPass account
				</div>
				<button className={styles.signin__facebook}>
					<Image
						src='/Facebook.svg'
						alt='Picture of the author'
						width={35}
						height={35}
					/>
				</button>
				<div className={styles.signin__border}>
					<hr />
					<div>or</div>
					<hr />
				</div>

				<form
					onSubmit={handleSubmit}
					className={styles.signin__input}>
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
					<div className={styles.signin__input_button}>
						<button className={styles.signin__input_button_forgot}>
							Forgot password?
						</button>
						<button
							className={styles.signin__input_button_signin}
							type='submit'
							value='Login'>
							Sign In
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignIn;
