import React from 'react'
import MainPage from '../pages/Page/MainPage'
import { Route, Routes } from 'react-router-dom'

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
