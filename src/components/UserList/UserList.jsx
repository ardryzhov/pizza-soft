import React from 'react'
import './UserList.scss'

import { useSelector } from 'react-redux'
import UserItem from '../UserItem/UserItem'
import { chooseUser } from '../../redux/usersSlice'

import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const UserList = () => {
	const users = useSelector((state) => state.users.data)

	return (
		<div className='user__list-wrap'>
			<div className='user__list-top'>
				<div className='user__list-title'>
					<h2>Список сотрудников</h2>
				</div>

				<div className='user__list-add-new'>
					<Link to='/new'>Добавить нового сотрудника</Link>
				</div>
			</div>

			<div className='user__list-items'>
				{users.map((item) => (
					<UserItem key={item.id} {...item} />
				))}
			</div>
		</div>
	)
}

export default UserList