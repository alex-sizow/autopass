import { useState } from 'react';
import styles from '../Board/board.module.scss';
import Button from '../Elements/buttons/button';
import SearchButton from '../Elements/buttons/search_button';
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

				<List
					active={modalActive}
					setActive={setModalActive}
				/>
			</div>
			<div className={styles.board__button}>
				<button onClick={() => setModalActive(!modalActive)}>
					<SearchButton />
				</button>
			</div>

			<div className={styles.board__button}></div>
		</div>
	);
};

export default Board;
