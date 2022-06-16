import React, { useState } from 'react'
import './InputPhoneMask.scss'

const InputPhoneMask = ({
	errorPhone,
	setErrorPhone,
	phone,
	setPhone,
	setFormError,
}) => {
	const [phoneValue, setPhoneValue] = useState(phone || '')
	const [key, setKey] = useState('')

	const changePhone = (e) => {
		const value = e.target.value
		setPhoneValue(value)
		setPhone(value)

		if (key === 'Backspace') {
			return setPhoneValue(e.target.value)
		}

		if (value === '8' || value === '+7' || value === '7') {
			setErrorPhone(false)
			setPhoneValue('+7 (')
			setPhone('+7 (')
		} else if (value.match(/^\+7\s\(\d{3}$/)) {
			setErrorPhone(false)
			setPhoneValue(`${value}) `)
			setPhone(`${value}) `)
		} else if (value.match(/^\+7\s\(\d{3}\)\s\d{3}$/) !== null) {
			setErrorPhone(false)
			setPhoneValue(`${value}-`)
			setPhone(`${value}-`)
		} else if (
			value.match(/^\+7\s\(\d{3}\)\s\d{3}\-\d{4}$/) !== null &&
			value.length === 17
		) {
			setErrorPhone(false)
		}
	}

	const getError = (e) => {
		const value = e.target.value
		if (
			value.match(/^\+7\s\(\d{3}\)\s\d{3}\-\d{4}$/) === null &&
			value.length === 17
		) {
			setErrorPhone(true)
			return ''
		}
	}

	return (
		<input
			// TODO: Если phoneError == true добавить класс этому инпуту и выделить его как ошибку
			value={phoneValue}
			maxLength='17'
			type='text'
			placeholder='+7 (800) 555-3535'
			onChange={(e) => changePhone(e)}
			onKeyDown={(e) => (e.key === 'Backspace' ? setKey(e.key) : setKey(null))}
			onBlur={(e) => getError(e)}
		/>
	)
}

export default InputPhoneMask
