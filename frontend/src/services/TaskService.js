import axios from 'axios';

export const saveTask = async (task) => {
    console.log(task, 'task from service');
    try {
        const res = await axios.post('/api/v1/task', task);
        if (res && res.status === 200 && res.data.status === 'success') return { status: 200, message: res.data.message }
        else return { status: 500, message: 'Internal server error' }
    } catch (err) {
        if (err && err.response.status === 404) return { status: 404, message: err.response.data.message }
        else if (err && err.response.status === 401) return { status: 401, message: err.response.data.message }
        else return { status: 500, message: 'Internal server error' };
    }
}

export const getAllTasks = async () => {
    try {
        const res = await axios.get('/api/v1/task');
        console.log(res, 'res iz servisa');
        if (res && res.status === 200 && res.data.status === 'success') return res.data.allTasks
    } catch (err) {
        console.log(err, 'err is servisa');
        if (err.response.status === 404) return { status: 404, message: err.message }
    }
}

export const getTask = async (id) => {
    console.log(id, 'task ID iz servisa');
    try {
        const res = await axios.get(`/api/v1/task/${id}`)
        console.log(res, 'res iz servisa');
        if (res && res.status === 200 && res.data.status === 'success') return res.data.task
    } catch (err) {
        console.log(err, 'err iz servisa');
        return { status: 404, message: err.response.data.message }
    }
}

export const editTask = async (task) => {
    console.log(task, 'task iz servisa');
    try {
        const res = await axios.put('/api/v1/task', task)
        console.log(res, 'res iz servisa');
        if (res && res.status === 200 && res.data.status === 'success') return { status: 200, message: res.data.message }
        return { status: 401, message: 'Task not edited' }
    } catch (err) {
        console.log(err, 'err iz servisa');
        return { status: 404, message: err.response.data.message }
    }
}

export const deleteTask = async (id) => {
    try {
        const res = await axios.delete(`/api/v1/task/${id}`);
        console.log(res, 'res iz servisa');
        if (res && res.status === 200 && res.data.status === 'success') return { status: 200, message: res.data.message }
        return { status: 401, message: 'Task not edited' }
    } catch (err) {
        console.log(err, 'err iz servisa');
        return { status: 404, message: err.response.data.message }
    }
}

export const editAssignee = async (employee) => {
    try {
        const res = await axios.patch('/api/v1/task/', employee);
        console.log(res, 'res iz servisa');
        if (res && res.status === 200 && res.data.status === 'success') return { status: 200, message: res.data.message }
        return { status: 401, message: 'Task not edited' }
    } catch (err) {
        console.log(err, 'err iz servisa');
        return { status: 404, message: err.response.data.message }
    }
}