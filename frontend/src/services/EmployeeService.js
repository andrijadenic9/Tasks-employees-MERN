import axios from 'axios';

export const saveEmployee = async (employee) => {
    try {
        const res = await axios.post('/api/v1/employee', employee);
        if (res && res.status === 200 && res.data.status === 'success') return { status: 200, message: res.data.message }
        else return { status: 500, message: 'Internal server error' }
    } catch (err) {
        if (err && err.response.status === 404) return { status: 404, message: err.response.data.message }
        else if (err && err.response.status === 401) return { status: 401, message: err.response.data.message }
        else return { status: 500, message: 'Internal server error' };
    }
}

export const getAllEmployees = async () => {
    try {
        const res = await axios.get('/api/v1/employee');
        // console.log(res, 'res iz servisa');
        if (res && res.status === 200 && res.data.status === 'success') return res.data.allEmployee
    } catch (err) {
        console.log(err, 'err is servisa');
        if (err.response.status === 404) return { status: 404, message: err.message }
    }
}

export const getEmployee = async (id) => {
    try {
        const res = await axios.get(`/api/v1/employee/${id}`)
        console.log(res, 'res iz servisa');
        if (res && res.status === 200 && res.data.status === 'success') return res.data.employee
    } catch (err) {
        console.log(err, 'err iz servisa');
        return { status: 404, message: err.response.data.message }
    }
}

export const editEmployee = async (employee) => {
    try {
        const res = await axios.put('/api/v1/employee', employee)
        console.log(res, 'res iz servisa');
        if (res && res.status === 200 && res.data.status === 'success') return { status: 200, message: res.data.message }
        return { status: 401, message: 'Employee not edited' }
    } catch (err) {
        console.log(err, 'err iz servisa');
        return { status: 404, message: err.response.data.message }
    }
}

export const deleteEmployee = async (id) => {
    try {
        const res = await axios.delete(`/api/v1/employee/${id}`);
        console.log(res, 'res iz servisa');
        if (res && res.status === 200 && res.data.status === 'success') return { status: 200, message: res.data.message }
        return { status: 401, message: 'Employee not edited' }
    } catch (err) {
        console.log(err, 'err iz servisa');
        return { status: 404, message: err.response.data.message }
    }
}