import React, { useState } from 'react'
import './OptionWrap.scss'

import FilterFields from '../FilterFields'
import SortFields from '../SortFields'
import { defaultUsers, setOptionUsers } from '../../redux/usersSlice'

import { useDispatch } from 'react-redux'

const OptionWrap = ({ isActive }) => {
	const dispatch = useDispatch()

	const [selected, setSelected] = useState(null)
	const [role, setRole] = useState(null)
	const [checked, setChecked] = useState(false)

	const check = () => {
		const roleEng =
			role !== null && role === 'Водитель'
				? 'driver'
				: role !== null && role === 'Официант'
				? 'waiter'
				: role !== null && role === 'Повар'
				? 'cook'
				: false

		const sortTag =
			selected !== null && selected === 'Имени'
				? 'имя'
				: selected !== null && selected === 'Дате'
				? 'дата'
				: false

		checked && !roleEng && !sortTag
			? dispatch(setOptionUsers({ isArchive: checked }))
			: checked && roleEng && !sortTag
			? dispatch(setOptionUsers({ isArchive: checked, roleTag: roleEng }))
			: checked && roleEng && sortTag
			? dispatch(setOptionUsers({ isArchive: checked, roleTag: roleEng, sortTag }))
			: !checked && roleEng && !sortTag
			? dispatch(setOptionUsers({ roleTag: roleEng }))
			: !checked && roleEng && sortTag
			? dispatch(setOptionUsers({ roleTag: roleEng, sortTag }))
			: !checked && !roleEng && sortTag
			? dispatch(setOptionUsers({ sortTag }))
			: !checked && !roleEng && !sortTag
			? dispatch(setOptionUsers({}))
			: false
	}

	const toDefaultUser = () => {
		dispatch(defaultUsers())
		setSelected(null)
		setRole(null)
		setChecked(false)
	}

	return (
		<div className={`option__wrap ${!isActive ? 'close__wrap' : ''}`}>
			<SortFields selected={selected} setSelected={setSelected} />

			<FilterFields role={role} setRole={setRole} />

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
				<button onClick={check}>Применить</button>
				<button onClick={toDefaultUser}>Очистить</button>
			</div>
		</div>
	)
}

export default OptionWrap
