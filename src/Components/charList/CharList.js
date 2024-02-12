import './charList.scss';
import img from '../../resources/img/Amachi.webp';

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
            <div className="arrow-hover_left">
                <div></div>
            </div>
            <div className="arrow-hover_right">
                <div></div>
            </div>
        </div>

    </div>
    )
}

export default CharList;