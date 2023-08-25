import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "Name",
        drink_type: "Drink Type",
        flavor_profile: "Flavor Profile",
        id: "id"
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        chooseType: (state, action) => { state.drink_type = action.payload},
        chooseFlavor: (state, action) => { state.flavor_profile = action.payload},
        chooseId: (state, action) => { state.id = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseType, chooseFlavor } = rootSlice.actions