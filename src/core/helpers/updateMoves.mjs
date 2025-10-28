const updateMoves = (value, moves, history) => {
	return value < 0
		? Math.max(--moves, 0)
		: Math.min(++moves, history.length - 1);
};

export { updateMoves };
