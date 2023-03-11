import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
    name: 'task',
    initialState: {
        task: {},
        taskRerender: false
    },
    reducers: {
        displayTaskRerender: (state, action) => {
            state.taskRerender = action.payload;
            console.log(state.taskRerender, 'taskRerender iz slice');
        },
        setTask: (state, action) => {
            state.task = action.payload;
            console.log(state.task, 'task iz slicer');
        }
    }
});

export const { displayTaskRerender, setTask } = taskSlice.actions;
export default taskSlice.reducer;