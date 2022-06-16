import { createSlice } from '@reduxjs/toolkit'
import { data } from '../assets/data/employees'

const sortByTag = (a, b, payload) => {
	if (payload.sortTag === 'имя') {
		if (a.name < b.name) return -1
		if (a.name > b.name) return 1
		return 0
	} else {
		const A = Date.parse(
			`${a.birthday.slice(6)}-${a.birthday.slice(3, 5)}-${a.birthday.slice(0, 2)}`
		)
		const B = Date.parse(
			`${b.birthday.slice(6)}-${b.birthday.slice(3, 5)}-${b.birthday.slice(0, 2)}`
		)
		return A - B
	}
}

const usersSlice = createSlice({
	name: 'users',
	initialState: {
		selectUser: [],
		data,
		sortedUsers: [],
	},
	reducers: {
		chooseUser(state, action) {
			state.selectUser = []
			state.selectUser = state.data.filter((i) => i.id == action.payload)
		},
		editUser(state, action) {
			state.data = state.data.map((v) => {
				if (v.id === action.payload.id) {
					return action.payload
				} else {
					return v
				}
			})
			state.selectUser = []
		},
		addNewUser(state, action) {
			state.data.push(action.payload)
		},
		defaultUsers(state) {
			state.sortedUsers = []
		},
		onlyArchive(state) {
			state.sortedUsers = state.data.filter((v) => {
				if (v.isArchive) return v
			})
		},
		setOptionUsers(state, action) {
			const payload = action.payload

			const hasIsArchive = payload.hasOwnProperty('isArchive')
			const hasRoleTag = payload.hasOwnProperty('roleTag')
			const hasSortTag = payload.hasOwnProperty('sortTag')

			if (hasIsArchive && !hasRoleTag && !hasSortTag) {
				state.sortedUsers = state.data.filter((v) => {
					if (v.isArchive) return v
				})
				return
			}
			if (hasIsArchive && hasRoleTag && !hasSortTag) {
				state.sortedUsers = state.data.filter((v) => {
					if (v.isArchive && v.role === payload.roleTag) return v
				})
				return
			}
			if (hasIsArchive && hasRoleTag && hasSortTag) {
				state.sortedUsers = state.data.filter((v) => {
					if (v.isArchive && v.role === payload.roleTag) return v
				})
				state.sortedUsers = state.sortedUsers
					.slice()
					.sort((a, b) => sortByTag(a, b, payload))
				return
			}
			if (!hasIsArchive && hasRoleTag && !hasSortTag) {
				state.sortedUsers = state.data.filter((v) => {
					if (v.role === payload.roleTag) return v
				})
				return
			}
			if (!hasIsArchive && hasRoleTag && hasSortTag) {
				state.sortedUsers = state.data.filter((v) => {
					if (v.role === payload.roleTag) return v
				})
				state.sortedUsers = state.sortedUsers
					.slice()
					.sort((a, b) => sortByTag(a, b, payload))
				return
			}
			if (!hasIsArchive && !hasRoleTag && hasSortTag) {
				state.sortedUsers = state.data
					.slice()
					.sort((a, b) => sortByTag(a, b, payload))
				return
			}
			if (hasIsArchive && !hasRoleTag && hasSortTag) {
				console.log('isArchive && sortTag')
				state.sortedUsers = state.data
					.slice()
					.sort((a, b) => sortByTag(a, b, payload))
				state.sortedUsers = state.sortedUsers.filter((v) => {
					if (v.isArchive) return v
				})
				return
			}
			if (!hasIsArchive && !hasRoleTag && !hasSortTag) {
				state.sortedUsers = []
				return
			}
		},
	},
})

export const {
	chooseUser,
	editUser,
	addNewUser,
	defaultUsers,
	onlyArchive,
	setOptionUsers,
} = usersSlice.actions
export default usersSlice.reducer
