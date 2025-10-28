import { Icon } from '@features';

function GameLogo() {
	const styles = {
		container: `
            flex gap-1 p-2 rounded
            bg-yellow-500 dark:bg-yellow-600
        `,
		icon: 'text-zinc-100',
	};

	return (
		<div className={styles.container}>
			<Icon.O className={styles.icon} />
			<Icon.X className={styles.icon} />
			<Icon.O className={styles.icon} />
		</div>
	);
}

export { GameLogo };
