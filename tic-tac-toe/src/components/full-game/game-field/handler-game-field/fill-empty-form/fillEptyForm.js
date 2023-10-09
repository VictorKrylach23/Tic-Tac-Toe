export const FillEmptyForm = (props) => {
	const { id, setSpace, space, count } = props;
	setSpace(() =>
		space.map((item) =>
			item.id === id && count % 2 === 0
				? { id: item.id, value: 'O' }
				: item.id === id
				? { id: item.id, value: 'X' }
				: item,
		),
	);
};
