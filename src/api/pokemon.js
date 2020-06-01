import { http } from '@/services';

export const getListPokemon = ({ limit, offset }) => http.get(`pokemon?limit=${limit}&offset=${offset}`);
