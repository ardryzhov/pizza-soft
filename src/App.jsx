import React, { useEffect } from 'react'
import './App.scss'

import MainPage from './pages/MainPage'
import UserPage from './pages/UserPage'

import { Routes, Route, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import NewUserPage from './pages/NewUserPage'

const App = () => {
	const x = useSelector((state) => state.users)

	return (
		<div className='app-wrap'>
			{/* <div style={{ display: 'flex', flexDirection: 'column' }}>
				<Link to='/'>Main</Link>
				<Link to='/user'>UserPage</Link>
			</div> */}
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/user' element={<UserPage />} />
				<Route path='/new-user' element={<NewUserPage />} />
			</Routes>
		</div>
	)
}

export default App
