import { Player } from './Player';
import { useGame } from '@core/hooks';

function Scoreboard() {
	const { score, turn } = useGame().game;

	return (
		<div className="flex gap-3">
			<Player icon="x" score={score.x} isTurn={turn === 'x'} />
			<Player icon="o" score={score.o} isTurn={turn === 'o'} />
		</div>
	);
}

export { Scoreboard };
