import React from 'react'
import './CloseBtn.scss'

const CloseBtn = ({ isActive, onClose }) => {
	const classes = ['close__burger']

	if (isActive) classes.push('active__burger')
	return (
		<div onClick={onClose} className={classes.join(' ')}>
			<span></span>
		</div>
	)
}

export default CloseBtn
