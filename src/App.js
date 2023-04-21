import React, { Component } from 'react';
import About from './Components/About/about';
import { ShoppingCartProvider } from './Components/Context/cartContext';
import Footer from './Components/Footer/footer';
import Menu from './Components/Menu/menu';
import Navbar from './Components/Navbar/navbar';
import Product from './Components/Product/product';

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeSection: '',
    };
  }
  componentDidMount() {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
        this.setState({ activeSection: id });
      }
    }

    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.getBoundingClientRect().top <= window.innerHeight / 2) {
          const id = section.getAttribute('id');
          if (id !== window.location.hash.substring(1)) {
            window.history.pushState(null, null, `#${id}`);
            this.setState({ activeSection: id });
          }
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', handleScroll);
  }
  render() {
    return (
      <div className="App">
        <ShoppingCartProvider>
          <Navbar activeSection={this.state.activeSection} />
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
