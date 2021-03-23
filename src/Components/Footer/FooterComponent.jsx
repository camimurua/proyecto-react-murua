import 'bootstrap/dist/css/bootstrap.min.css';
import './FooterStyle.css';

const FooterComponent = () => {

    return (
        <>
            <div className="footer">
                <p>Contacto:</p>
                    <h2 className="footerh2">11 6564-4129</h2>
                    <h2 className="footerh2">camilamurua99@gmail.com</h2>
                <p className="m-0 small copyright">Copyright &copy; 2021 Camila Murua</p>
            </div>
        </>
    )
}

export default FooterComponent;