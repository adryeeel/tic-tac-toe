import { useReducer } from 'react';
import { GameContext } from '@core/providers';
import { gameInitial, gameReducer } from '@core/reducers';

function GameProvider({ children }) {
	const [game, gameDispatch] = useReducer(gameReducer, gameInitial);
	const { history, moves, winner } = game;

	const context = {
		game,
		flip: () => gameDispatch({ type: 'FLIP' }),
		reset: () => gameDispatch({ type: 'RESET' }),
		forward: () => gameDispatch({ type: 'FORWARD' }),

		replay: () =>
			setTimeout(() => {
				gameDispatch({ type: 'REPLAY' });
			}, 500),

		backward: () => {
			gameDispatch({ type: 'BACKWARD' });
			if (moves === 1) context.flip();
		},

		score: () => {
			gameDispatch({ type: 'SCORE' });
			context.replay();
		},

		move: (i) => {
			if (history[moves][i] || winner) return;
			gameDispatch({ type: 'MOVE', i });
		},
	};

	return <GameContext value={context}>{children}</GameContext>;
}

export { GameProvider };
