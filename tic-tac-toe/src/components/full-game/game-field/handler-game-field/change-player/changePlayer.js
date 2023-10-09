export const ChangePlayer = (props) => {
	const { setPlayer, player } = props;
	setPlayer(() => (player === 'Нолик' ? 'Крестик' : 'Нолик'));
};
