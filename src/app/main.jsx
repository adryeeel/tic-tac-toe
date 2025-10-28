import { App } from './App';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
const reactRoot = createRoot(rootElement);

reactRoot.render(
	<StrictMode>
		<App />
	</StrictMode>,
);
