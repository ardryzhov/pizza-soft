import React, { useState, useEffect } from 'react'
import './EditUserInfo.scss'

import { editUser } from '../../redux/usersSlice'
import InputPhoneMask from '../InputPhoneMask'
import InputDateMask from '../InputDateMask'
import ErrorsBlock from '../ErrorsBlock'
import RoleDropdown from '../RoleDropdown'

import { useSelector, useDispatch } from 'react-redux'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

const EditUserInfo = () => {
	const user = useSelector((state) => state.users.selectUser)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const [errorDate, setErrorDate] = useState(false)
	const [errorPhone, setErrorPhone] = useState(false)
	const [formError, setFormError] = useState(false)

	const [isArchive, setIsArchive] = useState(user[0].isArchive || false)
	const [name, setName] = useState(user[0].name || '')
	const [phone, setPhone] = useState(user[0].phone || '')
	const [birthday, setBirthday] = useState(user[0].birthday || '')
	const [role, setRole] = useState(user[0].role || '')

	// useEffect(() => {
	// 	if (user.length !== 0) {
	// 		setIsArchive(user[0].isArchive)
	// 		setName(user[0].name)
	// 		setPhone(user[0].phone)
	// 		setBirthday(user[0].birthday)
	// 		setRole(user[0].role)
	// 	}
	// }, [])

	useEffect(() => {
		console.log('formError in UseEffect: ', formError)
	}, [formError])

	const sendForm = () => {
		// TODO: Не обновляется стейт formError
		if (
			name.length !== 0 ||
			phone.length !== 0 ||
			birthday.length !== 0 ||
			role.length !== 0
		) {
			console.log('formError before set in first IF', formError)
			setFormError(true)
			console.log('send form, first step: in IF')
			console.log('formError after set in first IF: ', formError)
		} else {
			setFormError(false)
			console.log('send form, first step: in ELSE')
			console.log('phone.length: ', phone.length)
			console.log('phone.length == 0: ', phone.length == 0)
			console.log('name.length: ', name.length)
			console.log('name.length == 0: ', name.length == 0)
		}

		// console.log('phone.length: ', phone.length)
		// console.log('phone: ', phone)
		// console.log('!phone.length', !!phone.length)

		console.log('setFormError: ', formError)
		// console.log('errorDate: ', errorDate)
		// console.log('errorPhone: ', errorPhone)

		if (formError) {
			console.log('send form, second step: in IF')
			return
		} else {
			console.log('send form, second step: in ELSE')
			const reduxRole =
				role === 'Повар' ? 'cook' : role === 'Официант' ? 'waiter' : 'driver'
			dispatch(
				editUser({
					id: user[0].id,
					name,
					isArchive,
					role: reduxRole,
					phone,
					birthday,
				})
			)
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
					/>
				</div>
				<div className='edit__user-item'>
					<label htmlFor=''>Дата рождения:</label>
					<InputDateMask
						setErrorDate={setErrorDate}
						errorDate={errorDate}
						birthday={birthday}
						setBirthday={setBirthday}
					/>
				</div>
				<div className='edit__user-item'>
					<label htmlFor=''>Должность:</label>
					<RoleDropdown optionSelect={role} setRole={setRole} />
				</div>
				<div className='edit__user-item'>
					<label htmlFor='isArchive'>Статус(В архиве):</label>
					<input
						type='checkbox'
						onChange={() => setIsArchive(!isArchive)}
						value={isArchive}
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
