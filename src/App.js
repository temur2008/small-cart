
import Header from './components/Header';
import Basket from './components/Basket';
import Main from './components/Main';
import data from './data';
import { useState } from 'react';

function App() 
{ 
  const {products} = data;
  const [cartItems, setCartItems] = useState ([]);
  return(
    <div className = "App">
      <Header></Header>
      <div className="row"> 
      <Main products={products}></Main>
      <Basket cartItems={cartItems}></Basket>
    </div>

    </div>
    
  );
}

export default App;
