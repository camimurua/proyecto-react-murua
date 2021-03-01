import {createContext, useEffect, useState} from 'react';

export const GlobalContext = createContext();

export const CartContext = ({children}) => {

    const cartLocalStorage = JSON.parse(localStorage.getItem('list'));

    const [list, setList] = useState(cartLocalStorage && cartLocalStorage.length > 0 ? cartLocalStorage : []);

    list.precioTotal = list.length > 0 ? list.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.item.precio), 0) : '';

    list.cantidadTotal = list.length > 0 ? list.reduce((totalItems, cartItem) => totalItems + cartItem.quantity, 0) : '';

    const addCart = (item, quantity) => {

        if (!isInCart (item.id)) {
            const newCart = [...list, {item:item, quantity:quantity}];
            setList(newCart);
        } else {
            setList(list.map(cartItem => {
                if (cartItem.item.id === item.id) {
                    return {...cartItem, quantity:cartItem.quantity + quantity};
                } else {
                    return cartItem;
                };
            }));
        };

    }
    const isInCart = (id) => {
        return list.findIndex(cartItem => cartItem.item.id === id) >= 0 ? true : false;
    }

    const deleteItem = (id) => {
        setList(list.filter(itemDeleted => itemDeleted.item.id !== id));
    }

    const clearCart = () => {
        setList([]);
    }
    
    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
    }, [list]);

    return (
        <GlobalContext.Provider value={{
            list,
            addCart,
            clearCart,
            deleteItem
        }} >
            {children}
        </GlobalContext.Provider>
    );
}