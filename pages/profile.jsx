import Image from 'next/image';
import styles from '../styles/Profile.module.scss';

const Profile = () => {
	return (
		<div className={styles.container}>
			<div className={styles.profile}>
				<div className={styles.profile__settings}>
					<div className={styles.profile__settings_title}>
						Настройки профиля
					</div>
					<div className={styles.profile__settings_avatar}>
						<Image
							src='/AvatarBig.svg'
							alt='Picture of the author'
							width={67}
							height={67}
						/>
						<div
							className={styles.profile__settings_avatar_buttons}>
							<button
								className={
									styles.profile__settings_avatar_buttons_facebook
								}>
								<Image
									src='/Facebook.svg'
									alt='Picture of the author'
									width={25}
									height={25}
								/>
								<div>Подтвердить профиль</div>
							</button>
							<button
								className={
									styles.profile__settings_avatar_buttons_download
								}>
								<Image
									src='/Download.svg'
									alt='Picture of the author'
									width={25}
									height={25}
								/>
								<div>Загрузить фото </div>
							</button>
						</div>
					</div>
					<div className={styles.profile__settings_banner}>
						С подтвержденным профилем тебе доверяют!
					</div>
					<div className={styles.profile__settings_items}>
						<div className={styles.profile__settings_items_item}>
							<div
								className={
									styles.profile__settings_items_item_title
								}>
								<Image
									src='/PhoneSettings.svg'
									alt='Picture of the author'
									width={14}
									height={14}
								/>
								<div>Номер телефона</div>
							</div>
							<div
								className={
									styles.profile__settings_items_item_phone
								}>
								<div>
									<div>+371 00000000</div>
									<Image
										src='/Pen.svg'
										alt='Picture of the author'
										width={7}
										height={11}
									/>
								</div>
								<div>
									<div>
										<div>+371 00000000</div>
										<Image
											src='/Pen.svg'
											alt='Picture of the author'
											width={7}
											height={11}
										/>
									</div>
								</div>
							</div>
							<button>Добавить</button>
						</div>
						<div className={styles.profile__settings_items_item}>
							<div
								className={
									styles.profile__settings_items_item_title
								}>
								<Image
									src='/PhoneSettings.svg'
									alt='Picture of the author'
									width={14}
									height={14}
								/>
								<div>Номер телефона</div>
							</div>
							<div
								className={
									styles.profile__settings_items_item_phone
								}>
								<div>
									<div>+371 00000000</div>
									<Image
										src='/Pen.svg'
										alt='Picture of the author'
										width={7}
										height={11}
									/>
								</div>
								<div>
									<div>
										<div>+371 00000000</div>
										<Image
											src='/Pen.svg'
											alt='Picture of the author'
											width={7}
											height={11}
										/>
									</div>
								</div>
							</div>
							<button>Добавить</button>
						</div>
						<div className={styles.profile__settings_items_item}>
							<div
								className={
									styles.profile__settings_items_item_title
								}>
								<Image
									src='/PhoneSettings.svg'
									alt='Picture of the author'
									width={14}
									height={14}
								/>
								<div>Номер телефона</div>
							</div>
							<div
								className={
									styles.profile__settings_items_item_phone
								}>
								<div>
									<div>+371 00000000</div>
									<Image
										src='/Pen.svg'
										alt='Picture of the author'
										width={7}
										height={11}
									/>
								</div>
								<div>
									<div>
										<div>+371 00000000</div>
										<Image
											src='/Pen.svg'
											alt='Picture of the author'
											width={7}
											height={11}
										/>
									</div>
								</div>
							</div>
							<button>Добавить</button>
						</div>
						<div></div>
					</div>
				</div>
				<div className={styles.profile__info}>
					<div className={styles.profile__info_title}>
						Персональная информация
					</div>
					<div className={styles.profile__info_input}>
						<div className={styles.profile__info_input_names}>
							<div>Имя</div>
							<div>Фамилия</div>
							<div>Дата рождения</div>
							<div>Пол</div>
							<div>Ваши автомобили</div>
						</div>
						<form
							action=''
							className={styles.profile__info_input_form}>
							<input type='text' />
							<input type='text' />
							<input type='text' />
							<input type='text' />
							<div>AC Ace 2021 </div>
							<button>Добавить</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
