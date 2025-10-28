import { Icon } from '@features';
import { useGame } from '@core/hooks';
import { CrossFade } from './CrossFade.jsx';

function Square({ player, onClick }) {
	const { winner } = useGame().game;

	const styles = {
		square: `
			size-20 sm:size-25 rounded-lg 
			bg-zinc-300 dark:bg-zinc-700/50
			flex items-center justify-center
		`,
		empty: `
			cursor-pointer
			hover:bg-zinc-400/40
			hover:dark:bg-zinc-700
		`,
		icon: 'size-full p-3',
	};

	return (
		<button
			onClick={onClick}
			className={`${styles.square} ${!player && !winner && styles.empty}`}
		>
			<CrossFade show={!!player}>
				{player === 'x' ? (
					<Icon.X className={styles.icon} />
				) : player === 'o' ? (
					<Icon.O className={styles.icon} />
				) : null}
			</CrossFade>
		</button>
	);
}

export { Square };
