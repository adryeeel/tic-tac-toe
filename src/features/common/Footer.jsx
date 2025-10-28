function Footer() {
	const styles = {
		footer: `
			p-0.5 sm:p-1
			bg-zinc-200 dark:bg-zinc-800
		`,
		message: 'text-center text-sm sm:text-base',
	};

	return (
		<footer className={styles.footer}>
			<p className={styles.message}>Seek the Truth.</p>
		</footer>
	);
}

export { Footer };
