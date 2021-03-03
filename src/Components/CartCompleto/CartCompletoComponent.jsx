import CartProdComponent from '../CartProd/CartProdComponent';
import {useContext} from 'react';
import {GlobalContext} from '../../Context/CartContext';
import { Link } from "react-router-dom";

const CartCompletoComponent = () => {

  const { list, clearCart } = useContext(GlobalContext);

  return (
    <>
      <div>
        <h2> CARRITO </h2>
        <div>
          {list.map((cartProd) => {
            return <CartProdComponent key={cartProd.item.id} cartProd={cartProd} />;
          })}
          <div>
          <Link to={`/`} className="volver"> Volver a Productos </Link>
            <h2>
              Subtotal: 
              $ <b>{list.precioTotal}</b>
            </h2>
          </div>
          <button>Finalizar compra</button>
          <button onClick={clearCart}>
            Vaciar carrito
          </button>
        </div>
      </div>

    </>
  );
};

export default CartCompletoComponent;