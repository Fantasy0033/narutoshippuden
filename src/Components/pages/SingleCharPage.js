import SingleChar from "../SingleChar/SingleChar";
import bg from '../../resources/img/bg3.png';
const SingleCharPage = () => {
    return (
        <>
            <SingleChar/>
            <img className='bg' src={bg} alt='vision'/>
        </>
    )
}

export default SingleCharPage;