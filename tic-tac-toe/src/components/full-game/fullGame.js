import { useState, useEffect } from 'react';
import { Restart } from './restart/restart';
import { GameField } from './game-field/gameField';
import { CheckWin } from './check-win/checkWin';
import styles from './fullGame.module.css';

export const FullGame = () => {
	const [space, setSpace] = useState([
		{ id: '01', value: null },
		{ id: '02', value: null },
		{ id: '03', value: null },
		{ id: '04', value: null },
		{ id: '05', value: null },
		{ id: '06', value: null },
		{ id: '07', value: null },
		{ id: '08', value: null },
		{ id: '09', value: null },
	]);

	const [count, setCount] = useState(1);
	const [player, setPlayer] = useState('Крестик');
	const [isWin, setIsWin] = useState(false);
	const [isDrow, setIsDrow] = useState(false);

	useEffect(() => {
		CheckWin({
			space: space,
			setIsWin: setIsWin,
			setIsDrow: setIsDrow,
			count: count,
		});
	}, [space]);

	return (
		<>
			{isWin ? (
				<div className={styles.resultInfo}>
					Победил: {player === 'Нолик' ? 'Крестик' : 'Нолик'}!
				</div>
			) : isDrow ? (
				<div className={styles.resultInfo}>Ничья!</div>
			) : (
				<GameField
					player={player}
					space={space}
					setCount={setCount}
					setPlayer={setPlayer}
					setSpace={setSpace}
					count={count}
				/>
			)}
			<Restart
				setIsWin={setIsWin}
				setIsDrow={setIsDrow}
				setPlayer={setPlayer}
				setCount={setCount}
				setSpace={setSpace}
				space={space}
			/>
		</>
	);
};
