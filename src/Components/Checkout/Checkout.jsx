import {useContext,useState} from 'react';
import {GlobalContext} from '../../Context/CartContext';

import swal from 'sweetalert';

import { getFirestore } from '../../Firebase/Index';
import { Link } from 'react-router-dom';

import './CheckoutStyle.css';

import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';


const CheckOutComponent = () => {
    const {list, clearCart} = useContext(GlobalContext);

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [confirmacion, setConfirmacion] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date('2021-03-24'));

    const [loading, setLoading] = useState(true);

      
    const handleDateChange = (date) => {
          setSelectedDate(date);
    };

    const finalizarCheckout = () => {
    
        let nuevaOrden = {
          Buyer:{nombre, email, telefono}, 
          Items:[{...list}], 
          Total: list.precioTotal,
          Fecha: selectedDate,
          Estado: "generada",
        }
  
        const baseDeDatos = getFirestore();
        const OrdenesCollection = baseDeDatos.collection('Ordenes');
  
        OrdenesCollection.add(nuevaOrden)
        .then((value) => {
            swal({
                title: `${nombre} finalizaste tu compra`,
                text: `Tu número de pedido es ${value.id}, 
                El comprobante te llegará a tu mail ${email} y
                nos contactaremos al ${telefono} a la brevedad` ,
                icon: "success" ,
                button: "Hecho",
            })
            .then(() => {
                setLoading(false);
            })
        })
        clearCart();
    }

    return (
        <>
            <div className="checkout"> 
                <div className="checkout2">
                    <h2 className="checkouth2"> CHECKOUT </h2>
                    <p>Completar con sus datos:</p>
                </div>
                <ul>
                    <li>
                        <h4>Nombre</h4>
                        <input type="text" placeholder="NOMBRE" className="input" 
                        onChange={(e) => {setNombre(e.target.value)}} />
                    </li>
                    <li>
                        <h4>Teléfono</h4>
                        <input type="text" placeholder="TELEFONO" className="input" 
                        onChange={(e) => {setTelefono(e.target.value)}} />
                    </li>
                    <li>
                        <h4>Email</h4>
                        <input type="text" placeholder="EMAIL" className="input" 
                        onChange={(e) => {setEmail(e.target.value)}} />
                    </li>
                    <li>
                        <h4>Confirmar Email</h4>
                        <input type="text" placeholder="EMAIL" className="input"
                        onChange={(e) => {setConfirmacion(e.target.value)}} />
                    </li>
                    <li>
                        <h4>Ingresar fecha del pedido</h4>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid>
                                <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="dd/MM/yyyy"
                                id="date-picker-inline"
                                className="fecha"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                />
                            </Grid>
                        </MuiPickersUtilsProvider> 
                    </li>
                </ul>

                {loading ? <button onClick={() => {finalizarCheckout()}} disabled={!nombre || !email || 
                !telefono || !confirmacion || email !== confirmacion}> 
                Realizar Compra </button> : 
                <Link to={`/`} className="volver">Volver al Inicio</Link>}
            </div>
        </>
    )
}

export default CheckOutComponent;