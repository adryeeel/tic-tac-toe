import { GameProvider } from '@core/providers';
import { Header, Footer } from '@features/common';
import { Scoreboard, Board, Controls } from '@features';
import '@styles/global.css';

function IndexLayout() {
	const styles = {
		page: `
            min-h-screen flex flex-col
            bg-slate-100 dark:bg-zinc-900
            font-[Fredoka] text-zinc-700 dark:text-zinc-100
        `,
		main: `
            p-3 flex-1
            flex justify-center items-center
        `,
		section: 'flex flex-col gap-3',
	};

	return (
		<div className={styles.page}>
			<Header />
			<main className={styles.main}>
				<section className={styles.section}>
					<GameProvider>
						<Scoreboard />
						<Board />
						<Controls />
					</GameProvider>
				</section>
			</main>
			<Footer />
		</div>
	);
}

export { IndexLayout };
