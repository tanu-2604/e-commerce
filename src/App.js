
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Login from './components/login/Login';
import Signup from './components/login/Signup';

import Cart from './components/cart/Cart';
import { Provider } from 'react-redux';

/** Store */
import store from './store';
import ProductList from './components/product/ProductList';
import ProductDetails from './components/productdetails/ProductDetails';
import Checkout from './components/confirmed/Checkout';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
        <Header/>
        <Route path="/" exact component={ProductList}/>        
        <Route path="/login" exact component={Login} />
        <Route path="/register"exact component={Signup}/>
        <Route path="/productdetail/:id" exact component={ProductDetails}/>
        <Route path="/carts" exact component={Cart}/>
        <Route path="/checkout" exact component={Checkout} />
        </BrowserRouter>
    </Provider>
    </div>
  );
}

export default App;
