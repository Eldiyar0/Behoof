import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/Page/MainPage'

const MyRoutes: React.FC = () => {
	const PublickRoutes = [
		{
			path: '/',
			element: <MainPage />,
			key: 1
		}
	]
	return (
		<Routes>
			{PublickRoutes?.map(element => (
				<Route
					path={element.path}
					element={element.element}
					key={element.key}
				/>
			))}
		</Routes>
	)
}

export default MyRoutes
