import { gameInitial } from './gameInitial.mjs';
import {
	updateTurn,
	updateScore,
	updateMoves,
	updateHistory,
} from '@core/helpers';

const INCREMENT = 1;
const DECREMENT = -1;

function gameReducer(state, action) {
	const { type, i } = action;

	if (type === 'RESET') return gameInitial;

	if (type === 'FLIP') return { ...state, turn: updateTurn(state.turn) };

	if (type === 'FORWARD')
		return {
			...state,
			moves: updateMoves(INCREMENT, state.moves, state.history),
		};

	if (type === 'BACKWARD')
		return {
			...state,
			moves: updateMoves(DECREMENT, state.moves, state.history),
		};

	if (type === 'MOVE') {
		return {
			...state,
			moves: state.moves + 1,
			history: updateHistory(state.history, state.moves, state.turn, i),
		};
	}

	if (type === 'REPLAY')
		return {
			...gameInitial,
			score: state.score,
			turn: updateTurn(state.turn),
		};

	if (type === 'SCORE')
		return {
			...state,
			winner: state.turn,
			score: updateScore(state.score, state.turn),
		};
}

export { gameReducer };
