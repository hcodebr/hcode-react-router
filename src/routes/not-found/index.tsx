import './not-found.scss';
import notFoundImage from '../../assets/images/not-found.webp';

const NotFound = () => {

    return (
        <section id="not-found">
            <h2>Ops, não encontramos esta página.</h2>
            <img src={notFoundImage} alt="Not Found" />
        </section>
    )

}

export default NotFound;