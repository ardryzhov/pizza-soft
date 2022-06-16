import React, { useState } from 'react'
import './RoleDropdown.scss'

import { useOutside } from '../../hooks'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

const RoleDropdown = ({ optionSelect, setRole }) => {
	const [option, setOption] = useState(optionSelect || '')
	const { ref, isShow, setShow } = useOutside(false)

	const role = ['Водитель', 'Повар', 'Официант']

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
						{role.map((optionValue) => (
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
