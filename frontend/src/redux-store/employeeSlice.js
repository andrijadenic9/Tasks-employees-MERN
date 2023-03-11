import { createSlice } from '@reduxjs/toolkit';

const employeeSlice = createSlice({
    name: 'employee',
    initialState: {
        employee: {},
        employeeRerender: false
    },
    reducers: {
        displayEmployeeRerender: (state, action) => {
            state.employeeRerender = action.payload;
            console.log(state.employeeRerender, 'employeeRerender iz slice');
        },
        setEmployee: (state, action) => {
            state.employee = action.payload;
            console.log(state.employee, 'emoloyee iz slicer');
        }
    }
});

export const { displayEmployeeRerender, setEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;