import { useParams } from 'react-router';
import {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import './singleChar.scss';
import useNarutoService from '../../services/NarutoService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';


const SingleChar = () => {
    const {id} = useParams();
    const [char, setChar] = useState([]);
    const {loading, error, getCharacter, clearError} = useNarutoService();

    useEffect(() => {
        updateChar();
    }, [id])

    const updateChar = () => {
        clearError();

        getCharacter(id)
        .then(onCharLoaded);
    }

    const onCharLoaded = (char) => {
        setChar(char);
        console.log(char);
    }

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinnerStyle = {
        margin: '230px 309px',
        position: 'absolute'
      };
    const spinner = loading ? <Spinner style={spinnerStyle}/> : null;
    const content = (!loading && !error) ? <View char={char}/> : null;


    return (
        <>
            {errorMessage}
            {spinner}
            {content}
        </>

    )
}

const View = ({char}) => {
    const {name, image, descr, family, jutsu, rank, affiliation, anime} = char;
    return (
    <motion.div
    initial={{ x: -50 }}
    animate={{ x: -10 }}>
        <div className="single">Информация о персонаже</div>
        <div className="single_comic">
            <img src={image} alt="single_img" className="single_comic_img" />
            <div className="single_comic_info">
                <div className="single_comic_name">{name}</div>
                <div className="single_comic_descr">{descr}</div>
                <div className="single_comic_family">Family: {family}</div>
                <div className="single_comic_jutsu">Jutsu: {jutsu}</div>
                <div className="single_comic_unique_character">Rank: {rank}</div>
                <div className="single_comic_manga">Affiliation: {affiliation}</div>
                <div className="single_comic_anime">Anime: {anime}</div>
            </div>
        </div>
    </motion.div>    
    )
}

export default SingleChar;