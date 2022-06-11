import { useState, useRef, useEffect } from 'react'

export function useOutside(initial) {
	const [isShow, setShow] = useState(initial)
	const ref = useRef(null)
	const handleOutsideClick = (e) => {
		if (ref.current && !ref.current.contains(e.target)) {
			setShow(false)
		}
	}

	const handeOutsideKeydown = (e) => {
		if (ref.current && isShow && e.key === 'Escape') {
			setShow(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleOutsideClick, true)
		document.addEventListener('keydown', handeOutsideKeydown, true)

		return () => {
			document.removeEventListener('click', handleOutsideClick, true)
			document.removeEventListener('keydown', handeOutsideKeydown, true)
		}
	})

	return { ref, isShow, setShow }
}
