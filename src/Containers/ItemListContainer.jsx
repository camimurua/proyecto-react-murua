import {useEffect, useState} from 'react';
import ItemList from "../Components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getFirestore } from '../Firebase/Index';
import './ContainerStyle.css';

const ItemListContainer = () => {

    const [products, setProducts] = useState ([]);

    const [loading, setLoading] = useState(true);

    const {nombre} = useParams();

    useEffect(() => {

        const baseDeDatos = getFirestore();

        const itemCollection = baseDeDatos.collection('ProductList');

        
        itemCollection.get().then((value) => {
            
            let aux = value.docs.map(element => {
                return element.data();
            })
            if(nombre) {
                const listaFiltrada = aux.filter(element => {
                    return element.categoria === nombre })
                     setProducts(listaFiltrada);
                } else {
                    const listaTotal = aux.map(element => {
                        return element;
                    })
                    setProducts(listaTotal);
                }
            setLoading(false);
        })        
    } , [nombre] );
        
        
    return (
        <>
            <h1 className="iniciar"> Bienvenidos a mi Tienda: </h1>

            {loading ? <h2 className="carga"> Cargando... </h2> : <ItemList products={products}/> }

            
        </>
    );
}

export default ItemListContainer;