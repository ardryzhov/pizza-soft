import { createSlice } from '@reduxjs/toolkit'
import { data } from '../assets/data/employees'

const usersSlice = createSlice({
	name: 'users',
	initialState: {
		selectUser: [],
		data,
	},
	reducers: {
		chooseUser(state, action) {
			state.selectUser = []
			state.selectUser = state.data.filter((i) => i.id == action.payload)
		},
		editUser(state, action) {
			state.data = state.data.map((v) => {
				if (v.id === action.payload.id) {
					console.log(action.payload)
					return action.payload
				} else {
					return v
				}
			})
			state.selectUser = []
		},
	},
})

export const { chooseUser, editUser } = usersSlice.actions
export default usersSlice.reducer
