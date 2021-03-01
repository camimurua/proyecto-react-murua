import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import NavbarComponent from './Components/Navbar/Index';
import ItemListContainer from './Containers/ItemListContainer';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import CartComponent from './Components/Cart/Cart';

import {CartContext} from './Context/CartContext';

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

                <Route path="*" children={<div>Not found</div>} />

            </Switch>
        </BrowserRouter>
      </CartContext>
    </>
  );
}

export default App;
