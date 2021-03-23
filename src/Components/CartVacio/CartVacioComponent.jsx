import { Link } from 'react-router-dom';
import './VacioStyle.css';

const CartVacioComponent = () => {

    return (
        <>
            <div>
                <h2 className="carritoh2">Tu carrito de compras está vacío!</h2>
                <Link to={`/`} className="inicio"> Volver a Inicio </Link>
            </div> 
        </>
    )
}
    
export default CartVacioComponent;   