import { useEffect, useState } from 'react';

function useCrossfade(children, duration) {
	const [rendered, setRendered] = useState(children);

	useEffect(() => {
		if (children) return setRendered(children);

		const id = setTimeout(() => setRendered(null), duration);
		return () => clearTimeout(id);
	}, [children, duration]);

	return rendered;
}

export { useCrossfade };
