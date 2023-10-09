export const isPlayerClickOnEmtyForm = (id, space) => {
	const arr = [...space].map((item) =>
		item.id === id && item.value === null ? true : '',
	);
	return arr.includes(true);
};
