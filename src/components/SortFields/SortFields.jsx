import React from 'react'
import './SortFields.scss'

const SortFields = ({ value, selected, setSelected }) => {
	return (
		<div
			className='modern-radio-container'
			onClick={() => {
				setSelected(value)
			}}
		>
			<div className={`radio-outer-circle ${value !== selected && 'unselected'}`}>
				<div
					className={`radio-inner-circle ${
						value !== selected && 'unselected-circle'
					}`}
				/>
			</div>
			<div className={`helper-text ${value == selected && 'selected-text'}`}>
				{value}
			</div>
		</div>
	)
}

export default SortFields
