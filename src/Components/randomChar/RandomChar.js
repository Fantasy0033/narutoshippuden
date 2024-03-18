import {useState, useEffect} from 'react';
import './randomChar.scss';
import znak from '../../resources/img/znak.png';
import naruto from '../../resources/img/znak 2.png';
import useNarutoService from '../../services/NarutoService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

const RandomChar = () => {

    const [char, setChar] = useState({});

    const {loading, error, getCharacter, clearError} = useNarutoService();

    useEffect(() => {
        updateChar();
    }, [])

    const onCharLoaded = (char) => {
        setChar(char);
    }

    const updateChar = () => {
        clearError();
        const id = Math.floor(Math.random() * (1 - 1450) + 1450);
        getCharacter(id)
        .then(onCharLoaded)
    }

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error) ? <View char={char}/> : null;
 
    
    return (
        <div className='randomchar'>
            {errorMessage}
            {spinner}
            {content}
{/*             <div className="randomchar_block">
                <img src={img} alt="img" className='randomchar_img'/>
                <p className="randomchar_name">Name</p>
                <p className="randomchar_descr">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className='button button_mains'>
                    <button className="button button_main">Информация</button>
                </div>
            </div> */}

            <div className="randomchar_static">
                <p className="randomchar_title">Рандомный персонаж Naruto</p>
                <img src={znak} alt="decoration" className='randomchar_decoration'/>
                <img onClick={updateChar} src={naruto} alt="naruto" className='randomchar_imgnaruto'/>
{/*                 <button className="button button_random">Жми</button> */}
            </div>
        </div>
    )
}

const View = ({char}) => {
    const {id, name, image, jutsu} = char;

    return (
        <div className="randomchar_block">
            <img src={image} alt="img" className='randomchar_img'/>
            <p className="randomchar_name">{name}</p>
            <p className="randomchar_descr">{jutsu}</p>
            <div className='button button_mains'>
                <button className="button button_main">Информация</button>
            </div>
        </div>
    )
} 

export default RandomChar;