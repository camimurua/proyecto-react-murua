import { Link } from 'react-router-dom';

const CartVacioComponent = () => {

    return (
        <>
            <div>
                <h2>Tu carrito de compras está vacío</h2>
                <Link to={`/`}> Volver a Inicio </Link>
            </div> 
        </>
    )
}
    
export default CartVacioComponent;   