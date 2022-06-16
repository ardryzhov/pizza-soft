import React, { useState, useEffect } from 'react'
import './EditUserInfo.scss'

import { editUser, addNewUser } from '../../redux/usersSlice'
import InputPhoneMask from '../InputPhoneMask'
import InputDateMask from '../InputDateMask'
import ErrorsBlock from '../ErrorsBlock'
import RoleDropdown from '../RoleDropdown'

import { useSelector, useDispatch } from 'react-redux'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

const EditUserInfo = ({
	userName,
	userPhone,
	userId,
	userBirthday,
	userRole,
	userIsArchive,
}) => {
	const data = useSelector((state) => state.users.data)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const [errorDate, setErrorDate] = useState(false)
	const [errorPhone, setErrorPhone] = useState(false)
	const [formError, setFormError] = useState(false)

	const [isArchive, setIsArchive] = useState(userIsArchive || false)
	const [name, setName] = useState(userName || '')
	const [phone, setPhone] = useState(userPhone || '')
	const [birthday, setBirthday] = useState(userBirthday || '')
	const [role, setRole] = useState(userRole || '')

	useEffect(() => {
		if (
			name.length === 0 ||
			phone.length === 0 ||
			birthday.length === 0 ||
			role.length === 0
		) {
			setFormError(true)
		} else {
			setFormError(false)
		}
	}, [name, phone, birthday, role])

	const sendForm = () => {
		const idx = userId === undefined ? data.length + 1 : userId
		const reduxRole =
			role === 'Повар' ? 'cook' : role === 'Официант' ? 'waiter' : 'driver'
		const userInfo = {
			id: idx,
			name,
			isArchive,
			role: reduxRole,
			phone,
			birthday,
		}

		if (formError) {
			return
		} else {
			userId === undefined
				? dispatch(addNewUser(userInfo))
				: dispatch(editUser(userInfo))
			navigate('/')
		}
	}

	return (
		<div className='edit__user-wrap'>
			<div className='back__to_home-btn'>
				<FontAwesomeIcon onClick={() => navigate('/')} icon={faArrowLeft} />
			</div>

			<div className='edit__user-list'>
				<div className='edit__user-item'>
					<label htmlFor=''>Имя:</label>
					<input
						type='text'
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder='Саша Капустина'
					/>
				</div>
				<div className='edit__user-item'>
					<label htmlFor=''>Телефон:</label>
					<InputPhoneMask
						phone={phone}
						setPhone={setPhone}
						errorPhone={errorPhone}
						setErrorPhone={setErrorPhone}
						setFormError={setFormError}
					/>
				</div>
				<div className='edit__user-item'>
					<label htmlFor=''>Дата рождения:</label>
					<InputDateMask
						setErrorDate={setErrorDate}
						errorDate={errorDate}
						birthday={birthday}
						setBirthday={setBirthday}
						setFormError={setFormError}
					/>
				</div>
				<div className='edit__user-item'>
					<label htmlFor=''>Должность:</label>
					<RoleDropdown role={role} setRole={setRole} />
				</div>
				<div className='edit__user-item'>
					<label htmlFor='isArchive'>Статус(В архиве):</label>
					<input
						type='checkbox'
						onChange={() => setIsArchive(!isArchive)}
						value={isArchive}
						checked={isArchive}
						id='isArchive'
					/>
				</div>

				<div className='edit__user-bottom'>
					<div className='error__msg'>
						<ErrorsBlock
							formError={formError}
							errorDate={errorDate}
							errorPhone={errorPhone}
						/>
					</div>
					<div className='edit__user-btn'>
						<button onClick={sendForm}>Применить</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default EditUserInfo
