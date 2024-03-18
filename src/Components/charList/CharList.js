import {useState, useEffect} from 'react';
import './charList.scss';
import arrow from '../../resources/img/kynai.png';
import useNarutoService from '../../services/NarutoService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

const CharList = () => {
    const [char, setChar] = useState([]);

    const {loading, error, getAllCharacter} = useNarutoService();

    useEffect(() => {
        onRequest();
    }, [])

    const onRequest = () => {
        getAllCharacter()
        .then(setChar);
        console.log(char);
    }


    function renderItems(arr) {
        console.log(arr);
        const items = arr.map((item, i) => {
            return (
                <li className="char_item" key={i}>
                <img src={item.image} alt="img" className="char_img" />
                <div className="char_name">{item.name}</div>
            </li>
            )
        });

        return (
            <div className="char_grid">
                {items}
            </div>
        )
    }

    const items = renderItems(char);

    const errorMessage = error ? <ErrorMessage style={{margin: '0 auto'}}/> : null;
    const spinner = loading ? <Spinner/> : null;

    return (
    <div className="char_list">
            {errorMessage}
            {spinner}
            {items}
        <div className="char_arrow">
            <div className="char_arrow_left">
                <img src={arrow} alt="arrow_left" className="char_arrow_leftkon" />
            </div>

            <div className="char_arrow_count">1</div>
            
            <div className="char_arrow_right">
            <img src={arrow} alt="arrow_right" className="char_arrow_rightkon" />
            </div>

        </div>

    </div>
    )
}

export default CharList;