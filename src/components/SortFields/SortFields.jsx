import React from 'react'
import './SortFields'

import SortItemField from '../SortItemField'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

const SortFields = ({ selected, setSelected }) => {
	const toDefaultSelect = (e) => {
		e.stopPropagation()
		setSelected(null)
	}

	return (
		<div className='sort__options'>
			<div className='sort__option_role-title'>
				<h5>Сортировать по:</h5>
				{selected && (
					<div className='default__sort' onClick={toDefaultSelect}>
						<FontAwesomeIcon className='default__sort_icon' icon={faClose} />
					</div>
				)}
			</div>

			<div className='sort__field_role'>
				<SortItemField
					value={'Имени'}
					selected={selected}
					setSelected={setSelected}
				/>
				<SortItemField
					value={'Дате'}
					selected={selected}
					setSelected={setSelected}
				/>
			</div>
		</div>
	)
}

export default SortFields
