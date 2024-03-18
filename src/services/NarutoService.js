import { useHttp } from "../hooks/http";

const useNarutoService = () => {
    const {loading, request, error, clearError} = useHttp();

    const _apiBase = 'https://narutodb.xyz/api/';
    const _offset = 1;
    const _page = 1;

    const getAllCharacter = async (page = _page) => {
        const res = await request(`${_apiBase}character?page=${page}&limit=4`);
        const dataArray = Object.values(res.characters);
        return dataArray.map(_transformCharacter);
    }

    const getAllAkatsuki = async (offset = _offset) => {
        const res = await request(`${_apiBase}akatsuki?page=0&limit=${offset}`);
        console.log(res);
        return res.akatsuki.map(_transformCharacter);
    }

    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}character/${id}`);
        console.log(res);
        return _transformCharacter(res);
    }

    const _transformCharacter = (char) => {
        let imageStyle = {};
        if (!char.images || char.images.length === 0) {
            imageStyle = {
                width: '200px', // Ширина изображения
                height: '230px', // Высота изображения
            };
        }
        return {
            id: char.id,
            name: char.name,
            family: char.family && char.family['lover'] ? char.family['lover'] : 'Unknown',
            anime: char.debut && char.debut.anime ? char.debut.anime : 'Unknown',
            affiliation: char.personal & char.personal.affiliation ? char.personal.affiliation : 'Unknown',
            rank: char.rank && char.rank.ninjaRank && char.rank.ninjaRank['Part II'] ? char.rank.ninjaRank['Part II'] : 'Unknown',
            image: char.images && char.images.length > 0 ? char.images[0] : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-lHyO3kuG60PHcbkfkDemnvp6pPkRxmnaYXqc8SOKqg&s',
            jutsu: char.jutsu && char.jutsu[0] ? char.jutsu[0] : 'Unknown',
            imageStyle: imageStyle
        }
    }


    return {loading, error,clearError, getAllCharacter, getCharacter, getAllAkatsuki}
}

export default useNarutoService;