import React, { useEffect } from 'react'
import './UserItem.scss'

import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { chooseUser } from '../../redux/usersSlice'

const UserItem = ({ id, name, role, phone }) => {
	const dispatch = useDispatch()

	const ruRole =
		role === 'waiter'
			? 'Официант'
			: role === 'driver'
			? 'Водитель'
			: role === 'cook'
			? 'Повар'
			: ''
	return (
		<div className='user__item-wrap'>
			<div className='user__item-info'>
				<div className='user__item-field'>
					<label>Имя: </label>
					<span>{name}</span>
				</div>
				<div className='user__item-field'>
					<label>Должность: </label>
					<span>{ruRole}</span>
				</div>
				<div className='user__item-field'>
					<label>Телефон: </label>
					<span>{phone}</span>
				</div>
			</div>

			<div className='user__item-button'>
				<Link onClick={() => dispatch(chooseUser(id))} to='/user'>
					Подробнее
				</Link>
			</div>
		</div>
	)
}

export default UserItem
