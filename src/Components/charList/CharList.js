import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './charList.scss';
import arrow from '../../resources/img/kynai.png';
import useNarutoService from '../../services/NarutoService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

const CharList = () => {
    const [char, setChar] = useState([]);
    const [page, setPage] = useState(1);

    const {loading, error, getAllCharacter} = useNarutoService();

    useEffect(() => {
        onRequest();
    }, [])

    const onRequest = (page) => {
        getAllCharacter(page)
        .then(setChar);
    }

    const onNext = () => {
            setPage(page => page + 1);
            onRequest(page);
    }

    const onPrev = () => {
        if (page > 1) {
            setPage(page => page - 1);
            onRequest(page);
        }
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
            return (
            <motion.li 
                className="char_item" 
                tabIndex={0}
                variants={listVariants}
                initial='hidden'
                animate='visible'
                custom={i}
                key={item.id}>
                    <Link to={`/character/${item.id}`}>
                        <img 
                        src={item.image}
                        alt="img" 
                        className="char_img"
                        style={item.imageStyle}/>
                        <div className="char_name">{item.name}</div>
                    </Link>
            </motion.li>
            )
        });

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

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner style={spinnerStyle} color='#00000'/> : null;
    const content = (!loading && !error) ? items : null;
    
    return (
    <div className="char_list">
            {errorMessage}
            {spinner}
            {content}
        <motion.div className="char_arrow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1}}
                transition={{ duration: 1 }}>
            <div onClick={() => onPrev()} className="char_arrow_left">
                <img src={arrow} alt="arrow_left" className="char_arrow_leftkon" />
            </div>

            <div className="char_arrow_count">{page}</div>
            
            <div onClick={() => onNext()} className="char_arrow_right">
            <img src={arrow} alt="arrow_right" className="char_arrow_rightkon" />
            </div>

        </motion.div>

    </div>
    )
}

export default CharList;