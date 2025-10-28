import { Reset } from './Reset';
import { Forward } from './Forward';
import { Backward } from './Backward';

function Controls() {
	return (
		<div className="flex gap-3">
			<Backward />
			<Reset />
			<Forward />
		</div>
	);
}

export { Controls };
