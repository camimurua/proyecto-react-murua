import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import ItemDetail from '../Components/ItemDetail/ItemDetail';
import productList from '../Base/productList';

const ItemDetailContainer = () => {

    const [item, setItem] = useState ([]);

    const [loading, setLoading] = useState(true);

    const {id} = useParams();

    useEffect(() => {

        const detallePromise = new Promise ((resolve, reject) => {
            resolve(productList);
          });

        detallePromise.then((result) => {
                setLoading(false);
                return setItem(result.find((element) => element.id.toString() === id))
        });

    }, []);


    return (
        <>
        {loading ? <h2> Cargando </h2> : <ItemDetail item={item} /> }
        </>
    )

};

export default ItemDetailContainer;