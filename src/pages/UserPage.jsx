import React from 'react'

import EditUserInfo from '../components/EditUserInfo'

import { useSelector } from 'react-redux'

const UserPage = () => {
	const user = useSelector((state) => state.users.selectUser)[0]
	return (
		<div>
			<EditUserInfo
				userName={user.name}
				userPhone={user.phone}
				userId={user.id}
				userBirthday={user.birthday}
				userRole={user.role}
				userIsArchive={user.isArchive}
			/>
		</div>
	)
}

export default UserPage
