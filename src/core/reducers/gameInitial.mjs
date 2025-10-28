const gameInitial = {
	turn: 'x',
	moves: 0,
	winner: null,
	score: { x: 0, o: 0 },
	history: [Array(9).fill(null)],
};

export { gameInitial };
