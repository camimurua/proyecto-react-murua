import 'bootstrap/dist/css/bootstrap.min.css';
import './styleCount.css';

const ItemCount = ({onAdd, onRest, onProx, contador}) => {

    return (
        <>
            <div className="container">
                <button onClick={onRest}>-</button>
                <b>{contador}</b>
                <button onClick={onAdd} >+</button>
            </div>
            <div className="containerB">
                <button onClick={onProx}>Agregar al carrito</button>
            </div> 
        </>
    )
}

export default ItemCount;