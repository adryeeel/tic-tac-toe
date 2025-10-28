import { useCrossfade } from './hooks/useCrossfade.mjs';

function CrossFade({ children, show, duration = 300 }) {
	const rendered = useCrossfade(children, duration);

	const styles = {
		inactive: 'opacity-0 scale-95',
		animator: `size-full transition-all duration-${duration} ease`,
	};

	return (
		<div className={`${styles.animator} ${!show && styles.inactive}`}>
			{rendered}
		</div>
	);
}

export { CrossFade };
