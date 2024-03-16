import RandomChar from "../randomChar/RandomChar"
import CharList from "../charList/CharList";

import bg from '../../resources/img/bg.jpg';
const MainPage = () => {
    return (
    <>
        <RandomChar/>
        <CharList/>
        <img className='bg' src={bg} alt='vision'/>
    </>

    )
}

export default MainPage;