import axios from 'axios';

export const getStatistics = async () => {
    try {
        const res = await axios.get(`/api/v1/statistics`)
        console.log(res, 'res iz servisa');
        if (res && res.status === 200 && res.data.status === 'success') return res.data.stats
    } catch (err) {
        console.log(err, 'err iz servisa');
        return { status: 404, message: err.response.data.message }
    }
}