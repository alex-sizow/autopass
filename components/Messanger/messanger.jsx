import Image from 'next/image';
import { useState } from 'react';
import AddLocation from '../Elements/Addlocation/addlocation';
import AddPhone from '../Elements/Addphone/addphone';
import styles from '../Messanger/messanger.module.scss';
const Messanger = () => {
	const [phoneActive, setPhoneActive] = useState(false);
	const [locationActive, setLocationActive] = useState(false);
	const [message, setMessage] = useState(['blabla']);
	const [text, setText] = useState('');

	const addMessage = () => {
		if (text.trim().length) {
			setMessage([...message, text]);
		}
		setText('');
	};

	return (
		<div className={styles.messanger}>
			<div className={styles.messanger__title}>ПЕРЕПИСКА</div>
			<div className={styles.messanger__header}>
				<button className={styles.messanger__header_arrow}>
					<Image
						src='/BackArrow.svg'
						alt='Picture of the author'
						width={24}
						height={22}
					/>
				</button>
				<button className={styles.messanger__header_avatar}>
					<Image
						src='/AvatarMessage.svg'
						alt='Picture of the author'
						width={30}
						height={30}
					/>
				</button>

				<div className={styles.messanger__header_name}>
					Nick name
				</div>
				<button>
					<Image
						src='/AddContactButton.svg'
						alt='Picture of the author'
						width={30}
						height={30}
					/>
				</button>
			</div>
			<div className={styles.messanger__communication}>
				<div
					className={
						styles.messanger__communication_interlocutor
					}>
					Bla bla bla bla bla bla bla bla bla bla bla bla bla bla
					bla bla bla bla
				</div>
				<div
					className={
						styles.messanger__communication_interlocutor
					}>
					<div>bla bla bla bla</div>
					<Image
						className={
							styles.messanger__communication_interlocutor_arrow
						}
						src='/Graytail.svg'
						alt='Picture of the author'
						width={24}
						height={22}
					/>
				</div>

				{message.map((num) => (
					<div
						className={styles.messanger__communication_my}
						key={num}>
						<div>{num}</div>
						<Image
							className={
								styles.messanger__communication_interlocutor_arrow
							}
							src='/Graytail.svg'
							alt='Picture of the author'
							width={24}
							height={22}
						/>
					</div>
				))}
			</div>
			<div className={styles.messanger__input}>
				<div>
					<button onClick={() => setPhoneActive(true)}>
						<Image
							className={styles.messanger__input_addphonebutton}
							src='/AddPhoneButton.svg'
							alt='Picture of the author'
							width={31}
							height={31}
						/>
					</button>
					<button onClick={() => setLocationActive(true)}>
						<Image
							className={
								styles.messanger__input_addlocationbutton
							}
							src='/AddLocationButton.svg'
							alt='Picture of the author'
							width={31}
							height={31}
						/>
					</button>
				</div>
				<div className={styles.messanger__input_addbutton}>
					<Image
						src='/Clip.svg'
						alt='Picture of the author'
						width={15}
						height={18}
					/>
					<Image
						src='/smile.svg'
						alt='Picture of the author'
						width={16}
						height={16}
					/>
				</div>
				<input
					type='text'
					className={styles.messanger__input_field}
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				<button
					className={styles.messanger__input_send}
					onClick={addMessage}>
					<Image
						src='/SendButton.svg'
						alt='Picture of the author'
						width={16}
						height={16}
					/>
				</button>
			</div>
			<AddLocation
				active={locationActive}
				setActive={setLocationActive}
				key={1}
			/>
			<AddPhone
				active={phoneActive}
				setActive={setPhoneActive}
				key={2}
			/>
		</div>
	);
};

export default Messanger;
