import React, { useState } from 'react'
import './SlideWrap.scss'

import CloseBtn from '../CloseBtn'
import OptionWrap from '../OptionWrap'

const SlideWrap = () => {
	const [isActive, setActive] = useState(false)
	const classes = ['filter__button-wrap']
	if (isActive) classes.push('open__wrap')
	return (
		<div className={classes.join(' ')}>
			<div className='filter__button_close-btn'>
				<CloseBtn isActive={isActive} onClose={() => setActive(!isActive)} />

				<div className='option__btns'>
					<OptionWrap isActive={isActive} />
				</div>
			</div>
		</div>
	)
}

export default SlideWrap
