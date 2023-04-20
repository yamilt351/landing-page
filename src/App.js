import React, { Component } from 'react';
import About from './Components/About/about';
import { ShoppingCartProvider } from './Components/Context/cartContext';
import Footer from './Components/Footer/footer';
import Menu from './Components/Menu/menu';
import Navbar from './Components/Navbar/navbar';
import Product from './Components/Product/product';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ShoppingCartProvider>
          <Navbar />
          <Menu />
          <Product />
          <About />
          <Footer />
        </ShoppingCartProvider>
      </div>
    );
  }
}

export default App;
