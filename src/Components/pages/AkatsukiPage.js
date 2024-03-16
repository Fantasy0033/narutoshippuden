import './AkatsukiPage.scss';
import AnimalsList from '../AkatsukiList/AkatsukiList';
import bg from '../../resources/img/Akatsuki3.jpg';

const AkatsukiPage = () => {
    return (
    <>
        <AnimalsList/>
        <img className='bg' src={bg} alt='vision'/>
    </>
    )
}

export default AkatsukiPage;