import styles from '../styles/Balance.module.scss';

const Balance = () => {
	return (
		<div className={styles.container}>
			<div className={styles.balance}>
				<div className={styles.balance__title}>
					Пополнить баланс
				</div>
				<div className={styles.balance__input}>
					<div className={styles.balance__input_names}>
						<div className={styles.balance__input_names_summa}>
							Summa:
						</div>
						<div>Vārds, Uzvārds: </div>
						<div>Kartes numurs:</div>
						<div>Derīga līdz:</div>
						<div>CVC2/CVV2 (?):</div>
					</div>
					<form
						action=''
						className={styles.balance__input_items}>
						<input
							type='text'
							className={styles.balance__input_items_summa}
						/>
						<input type='text' />
						<input type='text' />
						<div className={styles.balance__input_items_valid}>
							<input type='text' />
							<input type='text' />
						</div>
						<input
							type='text'
							className={styles.balance__input_items_cvc}
						/>
					</form>
				</div>
				<button className={styles.balance__button}>Оплатить</button>
			</div>
		</div>
	);
};

export default Balance;
