import {useContext} from 'react';
import {GlobalContext} from '../../Context/CartContext';

import {useState} from 'react';
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/Index";


import './styleItem.css';

const Item = ({ item }) => {

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
            <div className="card">
                <img src={item.img} alt={item.nombre} />
                <h2>{item.nombre}</h2>
                <Link to={`/product/${item.id}`} className="boton" > VER DETALLE </Link>
                <ul>
                    <li>Precio: $ {item.precio} </li>
                    <li> Stock: {item.stock} </li>
                </ul>
                {carrito ? <Link to={`/carrito`} className="boton" > Terminar Compra</Link> 
                : <ItemCount onAdd={onAdd} onRest={onRest} onProx={onProx} 
                contador={contador} />}
            </div>
    );
};

export default Item;