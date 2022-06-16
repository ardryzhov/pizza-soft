import React, { useState, useEffect } from 'react'
import './RoleDropdown.scss'

import { useOutside } from '../../hooks'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

const RoleDropdown = ({ role, setRole }) => {
	const [option, setOption] = useState(role || '')
	const { ref, isShow, setShow } = useOutside(false)

	useEffect(() => {
		if (role === null) {
			setOption('')
		}
	}, [role])

	const roleRU = ['Водитель', 'Повар', 'Официант']

	if (option === 'driver') {
		setOption('Водитель')
	} else if (option === 'cook') {
		setOption('Повар')
	} else if (option === 'waiter') {
		setOption('Официант')
	}

	const onToggle = () => setShow(!isShow)

	const onOptionClicked = (value) => () => {
		setOption(value)
		setRole(value)
		setShow(false)
	}

	const toDefaultOption = (e) => {
		e.stopPropagation()
		setRole('')
		setOption('')
	}
	return (
		<div className='dropdown__items-container'>
			<div className='dropdown__header' onClick={onToggle}>
				<span>{option || null}</span>
				{option && (
					<div className='default__filter' onClick={toDefaultOption}>
						<FontAwesomeIcon className='default__filter_icon' icon={faClose} />
					</div>
				)}
			</div>

			{isShow && (
				<div className='dropdown__list_container'>
					<ul ref={ref} className='dropdown__list'>
						{roleRU.map((optionValue) => (
							<li
								className='dropdown__item'
								onClick={onOptionClicked(optionValue)}
								key={optionValue}
							>
								{optionValue}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}

export default RoleDropdown
