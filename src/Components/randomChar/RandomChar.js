import './randomChar.scss';
import img from '../../resources/img/Amachi.webp';
import znak from '../../resources/img/znak.png';
import naruto from '../../resources/img/znak 2.png';

const RandomChar = () => {
    return (
        <div className='randomchar'>
            <div className="randomchar_block">
                <img src={img} alt="img" className='randomchar_img'/>
                <p className="randomchar_name">Name</p>
                <p className="randomchar_descr">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className='button button_mains'>
                <button className="button button_main">Информация</button>
                </div>
                <div className='randomchar_divider'></div>
            </div>

            <div className="randomchar_static">
                <p className="randomchar_title">Рандомный персонаж Naruto</p>
                <img src={znak} alt="decoration" className='randomchar_decoration'/>
                <img src={naruto} alt="naruto" className='randomchar_imgnaruto'/>
{/*                 <button className="button button_random">Жми</button> */}
            </div>
        </div>
    )
}

export default RandomChar;