import axios from 'axios';

axios.defaults.baseURL = 'https://pokeapi.co';

export function getAllPokes({ pageParam = 1 }) {
  return axios(`/api/v2/pokemon?limit=10&offset=${pageParam}`).then(
    (result) => result.data,
  );
}

export default { getAllPokes };
