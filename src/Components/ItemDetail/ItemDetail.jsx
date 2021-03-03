import {useContext} from 'react';
import {GlobalContext} from '../../Context/CartContext';

import {useState} from 'react';
import { Link } from "react-router-dom";
import ItemCount from '../ItemCount/Index';
import './styleDetail.css';

const ItemDetail = ( {item} ) => {

    const [contador, setContador] = useState(1);

    const [carrito, setCarrito] = useState(false);

    const {addCart} = useContext(GlobalContext);

    const onAdd = () => {

        if(contador < item.stock) {
            setContador(contador+1)
        } else {
            alert("No contamos con más stock")
        }
    }

    const onRest = () => {

        if(contador > 1) {
            setContador(contador-1)
        } else {
            alert("El mínimo de compra es 1")
        }
    }

    const onProx = (e) => {
        setCarrito(true);
        addCart(item,contador);
    }

    return (
        <>
            <div className="card">
                <img src={item.img} alt={item.nombre} />
                <div>
                    <h2> {item.nombre} </h2>
                    <p>{item.descripcion}</p>
                    <p> Llega el viernes por la mañana. </p>
                    <p> Tiene hasta 12 cuotas sin interés. </p>
                </div>
                <ul>
                    <li> Precio: $ {item.precio} </li>
                    <li> Stock: {item.stock} </li>
                </ul>
                {carrito ? <Link to={`/carrito`} className="boton" > Terminar Compra</Link> 
                : <ItemCount onAdd={onAdd} onRest={onRest} onProx={onProx} 
                contador={contador} />}
            </div>
            <Link to={`/`} className="volver"> Volver a Inicio </Link>
        </>
    );
};

export default ItemDetail;