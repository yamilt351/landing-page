import React, { Component } from 'react';
import About from './Components/About/about';
import Footer from './Components/Footer/footer';
import Menu from './Components/Menu/menu';
import Navbar from './Components/Navbar/navbar';
import Product from './Components/Product/product';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Menu />
        <Product />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
