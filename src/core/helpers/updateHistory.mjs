import { updateSquares } from './updateSquares.mjs';

const updateHistory = (history, moves, turn, i) => {
	const cutHistory = history.slice(0, moves + 1);
	const newSquares = updateSquares(cutHistory[moves], turn, i);

	return [...cutHistory, newSquares];
};

export { updateHistory };
