import React from 'react'

import SlideWrap from '../components/SlideWrap'
import UserList from '../components/UserList'

const MainPage = () => {
	return (
		<div style={{ padding: '0px 10px' }} className='main__page-wrap'>
			<SlideWrap />
			<UserList />
		</div>
	)
}

export default MainPage
