import { Icon } from '@features';
import { useGame } from '@core/hooks';

function Backward() {
	const { backward } = useGame();

	const styles = `
		p-2 rounded-md cursor-pointer
		flex items-center justify-center

		text-zinc-400 dark:text-zinc-600
		hover:text-zinc-400 hover:dark:text-zinc-500

		bg-zinc-200 dark:bg-zinc-800
		hover:bg-zinc-300 hover:dark:bg-zinc-700
	`;

	return (
		<button className={styles} onClick={backward}>
			<Icon.Backward />
		</button>
	);
}

export { Backward };
