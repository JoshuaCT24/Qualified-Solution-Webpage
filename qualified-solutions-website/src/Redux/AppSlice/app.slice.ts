//dependencies
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
    servicesTabNum: number
}

const initialState: InitialState = {
    servicesTabNum: 0
}

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setServicesTabNum: (state, action: PayloadAction<number>) => {
            state.servicesTabNum = action.payload;
        }
    }
});

export const { setServicesTabNum } = appSlice.actions;
export default appSlice.reducer;