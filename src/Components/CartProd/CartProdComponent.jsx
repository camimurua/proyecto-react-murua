import {useContext} from 'react';
import {GlobalContext} from '../../Context/CartContext';

import './styleCartProd.css';

const CartProdComponent = ({cartProd}) => {

    const {deleteItem} = useContext(GlobalContext);

    const handlerdeleteItem = () => {
        deleteItem(cartProd.item.id);
    }

    return (
        <>
            <div className="card">
                <img src={cartProd.item.img} alt="producto" className="imagen" />
                <div>
                    <p>{cartProd.item.nombre}</p>
                    <p>{cartProd.item.precio}</p>
                    <p>Cantidad: {cartProd.quantity}</p>
                    <button onClick={handlerdeleteItem}>Eliminar producto</button>
                </div>    
            </div>
        </>
    );
};

export default CartProdComponent;