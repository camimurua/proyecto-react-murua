import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import NavbarComponent from './Components/Navbar/Index';
import ItemListContainer from './Containers/ItemListContainer';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import CartComponent from './Components/Cart/Cart';
import CheckOutComponent from './Components/Checkout/Checkout'

import {CartContext} from './Context/CartContext';
import FooterComponent from './Components/Footer/FooterComponent';

const App = () => {
  return (
    <>
      <CartContext>
        <BrowserRouter>
            <NavbarComponent/>
            <Switch>

                <Route exact path="/">
                  <ItemListContainer/>
                </Route>

                <Route exact path="/product/:id" > 
                  <ItemDetailContainer/>
                </Route>

                <Route exact path="/categoria/:nombre">
                  <ItemListContainer/>
                </Route>

                <Route exact path="/carrito">
                  <CartComponent/>
                </Route>

                <Route exact path="/checkout">
                  <CheckOutComponent/>
                </Route>

                <Route path="*" children={<div>Not found</div>} />

            </Switch>
            <FooterComponent/>
        </BrowserRouter>
      </CartContext>
    </>
  );
}

export default App;
