export const CheckWin = (props) => {
	const { space, setIsWin, setIsDrow, count } = props;

	const winningCombinations = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (const combination of winningCombinations) {
		const [a, b, c] = combination;
		if (
			space[a].value &&
			space[a].value === space[b].value &&
			space[a].value === space[c].value
		) {
			setIsWin(true);
			return;
		} else if (count === 10) {
			setIsDrow(true);
		}
	}
};
