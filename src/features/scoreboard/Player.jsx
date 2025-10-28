import { Icon } from '@features';

function Player({ icon, score, isTurn }) {
	const styles = {
		player: `
			transition-outline duration-300 ease-in-out

			size-full p-2
			flex items-center justify-between

			outline-2 outline-transparent
			border rounded-lg border-zinc-300 dark:border-zinc-700
		`,
		active: 'outline-yellow-500 dark:outline-yellow-600',
	};

	return (
		<div className={`${styles.player} ${isTurn && styles.active}`}>
			{icon === 'x' && <Icon.X className="size-6" />}
			{icon === 'o' && <Icon.O className="size-6" />}
			<span className="text-3xl">{score}</span>
		</div>
	);
}

export { Player };
