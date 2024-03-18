import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import './akatsuki.scss';
import useNarutoService from '../../services/NarutoService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';


const AkatsukiList = () => {

    const [char, setChar] = useState([]);
    const [offset, setOffset] = useState(12);

    const {loading, error, getAllAkatsuki} = useNarutoService();

    useEffect(() => {
        onRequest(offset);
    }, [])

    const onRequest = (offset) => {
        getAllAkatsuki(offset)
        .then(onCharListLoaded);
    }

    const onCharListLoaded = (newCharList) => {
        setChar(char => newCharList);
        setOffset(offset => offset + 8);
    }

    function renderItems(arr) {
        const listVariants = {
            visible: i => ({
                opacity: 1,
                transition: {
                    delay: i * 0.1,
                }
            }),
            hidden: { opacity: 0}
        };
        const items = arr.map((item, i) => {
            return(
            <motion.div
            variants={listVariants} /* для анимации */
                 initial='hidden'
                  animate='visible'
                   custom={i}>
                                <Link to={`/character/${item.id}`} 
                className="char_item" key={item.id}>
                <img src={item.image} alt="img" className="char_img" />
                <div className="char_name">{item.name}</div>
            </Link>
            </motion.div>
            )
        })
        return (
            <div className="char_grid">
                {items}
            </div>
        )
    }

    const items = renderItems(char);

    const spinnerStyle = {
        margin: '40px 680px'
      };

    const spinner = loading ? <Spinner style={spinnerStyle} color='red'/> : null;
    const errorMessage = error ? <ErrorMessage/> : null;

    return (
        <div>
            <div className="char_list">
                {spinner}
                {errorMessage}
                {items}
                <div onClick={() => onRequest(offset)} className="char_button">
                        <div className="char_inner">load more</div>
                </div>
            </div>
        </div>
    )
}

export default AkatsukiList;