import React, { useState } from 'react'
import './InputDateMask.scss'

const InputDateMask = ({
	setErrorDate,
	errorDate,
	birthday,
	setBirthday,
	requiredFields,
	setFormError,
}) => {
	const [dateValue, setDateValue] = useState(birthday || '')
	const [key, setKey] = useState(null)

	const changeDate = (e) => {
		const value = e.target.value
		setDateValue(value)
		setBirthday(value)
		if (key === 'Backspace') {
			return setDateValue(e.target.value)
		}

		// if (value.match(/^\d{2}$/) !== null && +value > 31) {
		// 	setErrorDate(true)
		// 	return ''
		// } else if (value.match(/^\d{2}$/) !== null) {
		// 	setErrorDate(false)
		// 	setDateValue(`${value}.`)
		// } else if (
		// 	value.match(/^\d{2}\.\d{2}$/) !== null &&
		// 	+value.slice(3, 5) > 12
		// ) {
		// 	setErrorDate(true)
		// 	return ''
		// } else if (value.match(/^\d{2}\.\d{2}$/) !== null) {
		// 	setErrorDate(false)
		// 	setDateValue(`${value}.`)
		// }

		if (value.match(/^\d{2}$/) !== null && +value > 31) {
			return ''
		} else if (value.match(/^\d{2}$/) !== null) {
			setErrorDate(false)
			setDateValue(`${value}.`)
		} else if (
			value.match(/^\d{2}\.\d{2}$/) !== null &&
			+value.slice(3, 5) > 12
		) {
			return ''
		} else if (value.match(/^\d{2}\.\d{2}$/) !== null) {
			setErrorDate(false)
			setDateValue(`${value}.`)
		}
	}

	const getError = (e) => {
		const value = e.target.value
		if (value.match(/^\d{2}\.\d{2}\.\d{4}$/) === null && value.length === 10) {
			onBlurError()
			setErrorDate(true)
			// requiredFields()
			return ''
		}
	}

	return (
		<input
			type='text'
			value={dateValue}
			onChange={(e) => changeDate(e)}
			onKeyDown={(e) => (e.key === 'Backspace' ? setKey(e.key) : setKey(null))}
			onBlur={(e) => getError(e)}
			maxLength='10'
			placeholder='дд.мм.гггг'
			// onBlur={requiredFields}
		/>
	)
}

export default InputDateMask
