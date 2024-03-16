import './akatsuki.scss';

import img from '../../resources/img/Amachi.webp';

const AkatsukiList = () => {
    return (
        <div>
            <div className="char_list">
                <div className="char_grid">
                    <div className="char_item">
                        <img src={img} alt="img" className="char_img" />
                        <div className="char_name">Name</div>
                    </div>
                    <div className="char_item">
                        <img src={img} alt="img" className="char_img" />
                        <div className="char_name">Name</div>
                    </div>
                    <div className="char_item">
                        <img src={img} alt="img" className="char_img" />
                        <div className="char_name">Name</div>
                    </div>
                    <div className="char_item">
                        <img src={img} alt="img" className="char_img" />
                        <div className="char_name">Name</div>
                    </div>
                    <div className="char_item">
                        <img src={img} alt="img" className="char_img" />
                        <div className="char_name">Name</div>
                    </div>
                    <div className="char_item">
                        <img src={img} alt="img" className="char_img" />
                        <div className="char_name">Name</div>
                    </div>
                    <div className="char_item">
                        <img src={img} alt="img" className="char_img" />
                        <div className="char_name">Name</div>
                    </div>
                    <div className="char_item">
                        <img src={img} alt="img" className="char_img" />
                        <div className="char_name">Name</div>
                    </div>
                    <div className="char_item">
                        <img src={img} alt="img" className="char_img" />
                        <div className="char_name">Name</div>
                    </div>
                    <div className="char_item">
                        <img src={img} alt="img" className="char_img" />
                        <div className="char_name">Name</div>
                    </div>
                    <div className="char_item">
                        <img src={img} alt="img" className="char_img" />
                        <div className="char_name">Name</div>
                    </div>
                    <div className="char_item">
                        <img src={img} alt="img" className="char_img" />
                        <div className="char_name">Name</div>
                    </div>
                    <div className="char_button">
                        <div className="char_inner">load more</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AkatsukiList;