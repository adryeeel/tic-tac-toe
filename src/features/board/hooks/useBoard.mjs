import { useEffect } from 'react';
import { useGame } from '@core/hooks';
import { checkWinner } from '@core/helpers';

function useBoard() {
	const { game, flip, replay, move, score } = useGame();
	const { history, moves } = game;

	useEffect(() => {
		if (checkWinner(history[moves])) score();
		else if (moves === 9) replay();
		else if (moves !== 0) flip();
	}, [history, moves]);

	return { history, moves, move };
}

export { useBoard };
