import React, { useState } from 'react'
import './OptionWrap.scss'

import FilterFields from '../FilterFields'
import SortFields from '../SortFields'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

const OptionWrap = ({ isActive }) => {
	const [selected, setSelected] = useState(null)
	const [optionSelect, setOptionSelect] = useState(null)

	const toDefaultSelect = (e) => {
		e.stopPropagation()
		setSelected(null)
	}
	return (
		<div className={`option__wrap ${!isActive ? 'close__wrap' : ''}`}>
			<div className='sort__option'>
				<h5>Сортировать по:</h5>
				<div className='default__sort' onClick={toDefaultSelect}>
					<FontAwesomeIcon className='default__sort_icon' icon={faClose} />
				</div>
				<div className='sort__fields'>
					<SortFields
						value={'По должности'}
						selected={selected}
						setSelected={setSelected}
					/>
					<SortFields
						value={'По статусу'}
						selected={selected}
						setSelected={setSelected}
					/>
				</div>
			</div>

			<FilterFields
				optionSelect={optionSelect}
				setOptionSelect={setOptionSelect}
			/>
			<div className='option__wrap_btn'>
				<button>Применить</button>
			</div>
		</div>
	)
}

export default OptionWrap
