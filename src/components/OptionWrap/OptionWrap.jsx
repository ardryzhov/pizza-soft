import React, { useState } from 'react'
import './OptionWrap.scss'

import FilterFields from '../FilterFields'
import SortFields from '../SortFields'

const OptionWrap = ({ isActive }) => {
	const [selected, setSelected] = useState(null)
	const [optionSelect, setOptionSelect] = useState(null)
	const [checked, setChecked] = useState(false)

	return (
		<div className={`option__wrap ${!isActive ? 'close__wrap' : ''}`}>
			<SortFields selected={selected} setSelected={setSelected} />

			<FilterFields
				optionSelect={optionSelect}
				setOptionSelect={setOptionSelect}
			/>

			<div className='archive__checkbox'>
				<label htmlFor='archive'>
					<input
						type='checkbox'
						onChange={() => setChecked(!checked)}
						checked={checked}
						id='archive'
					/>
					В архиве
				</label>
			</div>

			<div className='option__wrap_btn'>
				<button>Применить</button>
			</div>
		</div>
	)
}

export default OptionWrap
