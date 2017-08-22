import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app.js';

render(
	<AppContainer>
		<App/>
	</AppContainer>,
	document.querySelector("#app")
);
