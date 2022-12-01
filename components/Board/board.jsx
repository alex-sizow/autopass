import { useState } from 'react';
import styles from '../Board/board.module.scss';
import Button from '../Elements/buttons/button';
import InputSearch from './../Elements/inputSearch/inputsearch';
import List from './../Elements/list/list';

const Board = () => {
	const [modalActive, setModalActive] = useState(false);

	return (
		<div className={styles.board}>
			<div className={styles.board__title}>SEARCH</div>
			<div className={styles.board__choice}>
				<div>Я</div>
				<div className={styles.board__choice_buttons}>
					<Button />
					<Button />
				</div>
			</div>
			<div className={styles.board__description}>
				Ищу попутчиков
			</div>
			<div className={styles.board__main}>
				<InputSearch
					active={!modalActive}
					setActive={setModalActive}
				/>

				<List active={modalActive} setActive={setModalActive} />
			</div>

			<button
				className={styles.board__button}
				onClick={() => setModalActive(!modalActive)}>
				SEARCH
			</button>
		</div>
	);
};

export default Board;
