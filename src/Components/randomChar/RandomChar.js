import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
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
    const spinnerStyle = {
        margin: '15px 387.5px 0 0' // Настройка стилей спиннера, чтобы центрировать его
      };
    const spinner = loading ? <Spinner style={spinnerStyle} color='#00000'/> : null;
    const content = !(loading || error) ? <View char={char}/> : null;
 
    
    return (
        <div className='randomchar'>
            {errorMessage}
            {spinner}
            {content}

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
    const shortDescription = jutsu && jutsu.length > 100 ? jutsu.slice(0, 100) + '...' : jutsu;
    return (
        <motion.div 
        className="randomchar_block"
        initial={{ x: -50 }}
        animate={{ x: 0 }}>
            <img src={image} alt="img" className='randomchar_img'/>
            <p className="randomchar_name">{name}</p>
            <p className="randomchar_descr">{shortDescription}</p>
            <Link to={`/character/${id}`} className='button button_mains'>
                <button className="button button_main">Информация</button>
            </Link>
        </motion.div>
    )
} 

export default RandomChar;