import React from 'react'
import './FilterFields.scss'

import RoleDropdown from '../RoleDropdown'

const FilterFields = ({ role, setRole }) => {
	return (
		<div className='filter__option'>
			<div className='dropdown__container'>
				<h5>Фильтровать по должности:</h5>
				<RoleDropdown role={role} setRole={setRole} />
			</div>
		</div>
	)
}

export default FilterFields
