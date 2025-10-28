import { GameLogo } from './GameLogo';
import logo from '@assets/logos/logo-gray.png';

function Header() {
	const styles = {
		name: 'font-semibold text-xl sm:text-2xl',
		header: `
            p-3
            bg-zinc-200 dark:bg-zinc-800
        `,
		logo: `
            absolute left-0
            max-w-8 sm:max-w-9
        `,
		container: `
            relative 
            max-w-6xl mx-auto 
            flex justify-center items-center
        `,
	};

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<img className={styles.logo} src={logo} alt="3D gray letter" />
				<GameLogo />
			</div>
		</header>
	);
}

export { Header };
