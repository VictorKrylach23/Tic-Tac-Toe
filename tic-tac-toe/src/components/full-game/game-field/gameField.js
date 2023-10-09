import { HandlerGameField } from './handler-game-field/handlerGameField';
import styles from './gameField.module.css';

export const GameField = (props) => {
	const { player, space, setCount, setPlayer, setSpace, count } = props;
	return (
		<>
			<div>Сейчас ходит: {player}</div>
			<ul className={styles.gameField}>
				{space.map(({ id, value }) => (
					<li
						key={id}
						onClick={() =>
							HandlerGameField({
								id: id,
								setCount: setCount,
								setPlayer: setPlayer,
								player: player,
								setSpace: setSpace,
								space: space,
								count: count,
							})
						}
					>
						{value}
					</li>
				))}
			</ul>
		</>
	);
};
