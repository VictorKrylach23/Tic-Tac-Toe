import { NewGame } from './new-game/newGame';
import styles from './restart.module.css';

export const Restart = (props) => {
	const { setIsWin, setIsDrow, setPlayer, setCount, setSpace, space } = props;

	return (
		<button
			className={styles.restartButton}
			onClick={() =>
				NewGame({
					setIsWin: setIsWin,
					setIsDrow: setIsDrow,
					setPlayer: setPlayer,
					setCount: setCount,
					setSpace: setSpace,
					space: space,
				})
			}
		>
			Начать заново
		</button>
	);
};
