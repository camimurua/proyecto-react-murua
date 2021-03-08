import {useContext,useState} from 'react';
import {GlobalContext} from '../../Context/CartContext';

import swal from 'sweetalert';

import { getFirestore } from '../../Firebase/Index';
import { Link } from 'react-router-dom';

const CheckOutComponent = () => {
    const {list} = useContext(GlobalContext);

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');

    const [loading, setLoading] = useState(true);

    const finalizarCheckout = () => {
    
        let nuevaOrden = {
          Buyer:{nombre, email, telefono}, 
          Items:[{...list}], 
          Total: list.precioTotal
        }
  
        const baseDeDatos = getFirestore();
        const OrdenesCollection = baseDeDatos.collection('Ordenes');
  
        OrdenesCollection.add(nuevaOrden)
        .then((value) => {
            swal({
                title: `${nombre} finalizaste tu compra`,
                text: `Tu numero de pedido es ${value.id}, 
                El comprobante te llegará a tu mail ${email} y
                a tu telefono ${telefono}` ,
                icon: "success" ,
                button: "Hecho",
            })
            .then(() => {
                setLoading(false);
            })
        })

    }

    return (
        <>
            <h2> CHECKOUT </h2>
            <p>Completar datos:</p>
            <ul>
                <li>
                    <b>Nombre</b>
                    <input type="text" placeholder="NOMBRE" onChange={(e) => {setNombre(e.target.value)}} />
                </li>
                <li>
                    <b>Email</b>
                    <input type="text" placeholder="EMAIL" onChange={(e) => {setEmail(e.target.value)}} />
                </li>
                <li>
                    <b>Telefono</b>
                    <input type="text" placeholder="TELEFONO" onChange={(e) => {setTelefono(e.target.value)}} />
                </li>
            </ul>

            {loading ? <button onClick={() => {finalizarCheckout()}}> Confirmar </button> : 
            <Link to={`/`} className="volver">Volver al Inicio</Link>}
        </>
    )
}

export default CheckOutComponent;