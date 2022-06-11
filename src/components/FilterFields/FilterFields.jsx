import React, { useState } from 'react'
import './FilterFields.scss'

import { useOutside } from '../../hooks'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

const FilterFields = ({ optionSelect, setOptionSelect }) => {
	const { ref, isShow, setShow } = useOutside(false)

	const role = ['Водитель', 'Повар', 'Официант']

	const onToggle = () => setShow(!isShow)

	const onOptionClicked = (value) => () => {
		setOptionSelect(value)
		setShow(false)
	}

	const toDefaultOption = (e) => {
		e.stopPropagation()
		setOptionSelect(null)
	}

	return (
		<div className='filter__option'>
			<div className='dropdown__container'>
				<h5>Фильтровать по должности:</h5>
				<div className='dropdown__header' onClick={onToggle}>
					<span>{optionSelect || null}</span>
					{optionSelect && (
						<div className='default__filter' onClick={toDefaultOption}>
							<FontAwesomeIcon className='default__filter_icon' icon={faClose} />
						</div>
					)}
				</div>

				{isShow && (
					<div className='dropdown__list_container'>
						<ul ref={ref} className='dropdown__list'>
							{role.map((option) => (
								<li
									className='dropdown__item'
									onClick={onOptionClicked(option)}
									key={option}
								>
									{option}
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	)
}

export default FilterFields
