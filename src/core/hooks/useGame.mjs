import { useContext } from 'react';
import { GameContext } from '@core/providers';

function useGame() {
	return useContext(GameContext);
}

export { useGame };
