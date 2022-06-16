import React from 'react'
import './ErrorsBlock.scss'

const ErrorsBlock = ({ errorDate, errorPhone, formError }) => {
	const showError = () => {
		if (formError) {
			return 'Все поля обязательны к заполнению'
		} else if (errorDate && errorPhone) {
			return 'В пол: Дата Рождения и Телефон'
		} else if (errorDate) {
			return 'В поле: Дата Рождения'
		} else {
			return 'В поле: Телефон'
		}
	}

	return (
		<div>
			{(errorDate || errorPhone || formError) && (
				<div className='error__block-wrap'>
					<div className='error__block-message'>
						<span>Ошибка! {showError()}</span>
					</div>
				</div>
			)}
		</div>
	)
}

export default ErrorsBlock
