import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import ItemDetail from '../Components/ItemDetail/ItemDetail';
import { getFirestore } from '../Firebase/Index';

const ItemDetailContainer = () => {

    const [item, setItem] = useState ([]);

    const [loading, setLoading] = useState(true);

    const {id} = useParams();

    useEffect(() => {

        const baseDeDatos = getFirestore();

        const itemCollection = baseDeDatos.collection('ProductList');

        itemCollection.get().then((value) => {
            
            let aux = value.docs.map(element => {
                return element.data();
            })

            const productoDetalle = aux.find(element => {
                return element.id.toString() === id })

            setItem(productoDetalle);
            setLoading(false);
        })     

    } , [] );

    return (
        <>
        {loading ? <h2> Cargando </h2> : <ItemDetail item={item} /> }
        </>
    )

};

export default ItemDetailContainer;