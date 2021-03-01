import {useEffect, useState} from 'react';
import productList from '../Base/productList';
import ItemList from "../Components/ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const [products, setProducts] = useState ([]);

    const [listaProducto, setListaProducto] = useState ([]);

    const [loading, setLoading] = useState(true);

    const {nombre} = useParams();

    useEffect(() => {

        const itemsPromise = new Promise ((resolve, reject) => {

            setListaProducto(productList);
            
            if(nombre) {
                const listaFiltrada = listaProducto.filter((element) => element.categoria === nombre);
                resolve(listaFiltrada);
            } else {
                resolve(productList);
            }

        });
  
        itemsPromise.then((result) => {
            setLoading(false);
            return setProducts(result);
        });

    }, [nombre]);

    return (
        <>
            <h1> Bienvenido a mi Proyecto: </h1>

            {loading ? <h2> Cargando </h2> : <ItemList products={products}/> }

            
        </>
    )
}

export default ItemListContainer;