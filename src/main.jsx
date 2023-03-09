import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider } from '@mantine/core'

import './index.css'
import "@fontsource/fira-code";

import {
	BrowserRouter,
	Routes,
	Route,
	Link
} from "react-router-dom";

import {App} from './App.jsx'

const mantineSettings = {
	colorScheme: 'dark',
	fontFamily: 'Fira Code',
}

const docroot = ReactDOM.createRoot(document.getElementById('root'))

const RouterElement = () => {
	return(
		
		<BrowserRouter><Routes>
			
			<Route path="/" element={<App />}>
			
				</Route>
		
			</Routes></BrowserRouter>
	)
}

docroot.render(
	<React.StrictMode><MantineProvider theme={mantineSettings}>

		<RouterElement />

	</MantineProvider></React.StrictMode>
)