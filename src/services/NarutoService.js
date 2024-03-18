import { useHttp } from "../hooks/http";

const useNarutoService = () => {
    const {loading, request, error, clearError} = useHttp();

    const _apiBase = 'https://narutodb.xyz/api/';
    const _limit = 4;
    const _page = 1;

    const getAllCharacter = async (limit = _limit, page = _page) => {
        const res = await request(`${_apiBase}character?page=${page}&limit=${limit}`);
        const dataArray = Object.values(res.characters);
        return dataArray.map(_transformCharacter);
    }

    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}character/${id}`);
        return _transformCharacter(res);
    }

    const _transformCharacter = (char) => {
/*         console.log(char); */
        return {
            id: char.id,
            name: char.name,
            image: char.images[0],
            jutsu: char.jutsu ? `${char.jutsu[0].slice(0, 300)}` : 'No information about jutsu'
        }
    }


    return {loading, error,clearError, getAllCharacter, getCharacter}
}

export default useNarutoService;