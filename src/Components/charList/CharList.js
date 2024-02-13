import './charList.scss';
import img from '../../resources/img/Amachi.webp';
import arrow from '../../resources/img/kynai.png';

const CharList = () => {
    return (
    <div className="char_list">
        <div className="char_grid">
            <li className="char_item">
                <img src={img} alt="img" className="char_img" />
                <div className="char_name">Name</div>
            </li>

            <li className="char_item">
                <img src={img} alt="img" className="char_img" />
                <div className="char_name">Name</div>
            </li>

            <li className="char_item">
                <img src={img} alt="img" className="char_img" />
                <div className="char_name_yellow">Name</div>
            </li>

            <li className="char_item">
                <img src={img} alt="img" className="char_img" />
                <div className="char_name_yellow">Name</div>
            </li>
        </div>
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