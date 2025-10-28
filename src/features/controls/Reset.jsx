import { Icon } from '@features';
import { useGame } from '@core/hooks';

function Reset() {
	const { reset } = useGame();

	const styles = `
		p-2 size-full 
		rounded-md cursor-pointer
		flex items-center justify-center
		bg-yellow-500 dark:bg-yellow-600 text-yellow-100
	`;

	return (
		<button className={styles} onClick={reset}>
			<Icon.Reset />
		</button>
	);
}

export { Reset };
