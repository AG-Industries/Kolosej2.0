import * as api from '../api/index.js';

export const getAll = async () => {
    const { data } = await api.getAllMovies();
    return data;
}