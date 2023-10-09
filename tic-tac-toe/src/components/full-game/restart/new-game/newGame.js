export const NewGame = (props) => {
	const { setIsWin, setIsDrow, setPlayer, setCount, setSpace, space } = props;

	setSpace(() => space.map((item) => ({ ...item, value: null })));
	setCount(1);
	setIsWin(false);
	setIsDrow(false);
	setPlayer('Крестик');
};
