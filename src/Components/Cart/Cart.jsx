import {useContext} from 'react';
import {GlobalContext} from '../../Context/CartContext';
import CartVacioComponent from '../CartVacio/CartVacioComponent';
import CartCompletoComponent from '../CartCompleto/CartCompletoComponent';

import './styleCart.css';

const CartComponent = () => {
    const {list} = useContext(GlobalContext);

    return (
        <>

        <div>
            {list.length <= 0 ? <CartVacioComponent />
            : <CartCompletoComponent />}
        </div>

        </>
    )
}

export default CartComponent;