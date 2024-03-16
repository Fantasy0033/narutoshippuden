import './singleChar.scss';
import img from '../../resources/img/Amachi.webp';

const SingleChar = () => {
    return (
        <>
            <div className="single">Информация о персонаже</div>
            <div className="single_comic">
                <img src={img} alt="single_img" className="single_comic_img" />
                <div className="single_comic_info">
                    <div className="single_comic_name">Name</div>
                    <div className="single_comic_descr">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem nihil beatae doloremque hic asperiores voluptatem? Vero quos nam, mollitia deleniti assumenda dolore dolor quia excepturi magni, maiores quasi consectetur blanditiis.</div>
                    <div className="single_comic_family">Family: Учиха</div>
                    <div className="single_comic_jutsu">Jutsu: Джутсу</div>
                    <div className="single_comic_unique_character">Unique Character: Уникальные черты</div>
                    <div className="single_comic_manga">Манга: Naruto Chapter #234</div>
                    <div className="single_comic_anime">Аниме: Naruto Episode #134</div>
                </div>
            </div>
        </>

    )
}

export default SingleChar;