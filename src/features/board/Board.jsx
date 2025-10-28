import { Square } from './Square';
import { useBoard } from './hooks/useBoard.mjs';

function Board() {
	const { history, moves, move } = useBoard();

	const styles = `
		p-3 rounded-lg
		grid grid-cols-3 gap-3
		bg-zinc-200 dark:bg-zinc-800
	`;

	return (
		<div className={styles}>
			{history[moves].map((player, i) => (
				<Square key={i} player={player} onClick={() => move(i)} />
			))}
		</div>
	);
}

export { Board };
