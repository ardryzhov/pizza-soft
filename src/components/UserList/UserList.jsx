import React from 'react'
import './UserList.scss'

import UserItem from '../UserItem/UserItem'

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const UserList = () => {
	const users = useSelector((state) => state.users.data)
	const sortedUsers = useSelector((state) => state.users.sortedUsers)

	return (
		<div className='user__list-wrap'>
			<div className='user__list-top'>
				<div className='user__list-title'>
					<h2>Список сотрудников</h2>
				</div>

				<div className='user__list-add-new'>
					<Link to='/new-user'>Добавить нового сотрудника</Link>
				</div>
			</div>

			<div className='user__list-items'>
				{sortedUsers.length
					? sortedUsers.map((item) => <UserItem key={item.id} {...item} />)
					: users.map((item) => <UserItem key={item.id} {...item} />)}
			</div>
		</div>
	)
}

export default UserList
