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
                <div className="row">
                    <div className="col-sm-5">
                        <img src={cartProd.item.img} alt="producto" className="imagen" />
                    </div>
                    <div className="col-sm-5">
                        <p>{cartProd.item.nombre}</p>
                        <p> $ {cartProd.item.precio}</p>
                        <p>Cantidad: {cartProd.quantity}</p>
                    </div>
                    <div className="col-sm-2">
                        <button onClick={handlerdeleteItem} className="botonEliminar">X</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartProdComponent;