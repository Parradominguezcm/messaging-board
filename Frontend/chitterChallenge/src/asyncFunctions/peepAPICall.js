import axios from 'axios';

export const getPeeps = async () => {
    try {
        const res = await axios.get(import.meta.env.VITE_PEEPSURL + '/allPeeps');
        if (Array.isArray(res.data) && res.data?.length > 0)
            return { peeps: res.data, status: res.status };
        throw new Error('There are no peeps');

    } catch (e) {
        return {
            peeps: [],
            status: e.response?.status ?? 204,
            error: {
                type: `get`,
                message: `could not get the data from the server: ${e.message ?? e.response.message}`
            }
        }
    }
}


