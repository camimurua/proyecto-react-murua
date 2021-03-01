import 'bootstrap/dist/css/bootstrap.min.css';
import './styleCartWidget.css';

const CartWidget = ({cantidadTotal}) => {
    return (
        <>
            <i className="bi bi-cart-check"> {cantidadTotal} </i>
        </>
    )
}

export default CartWidget;