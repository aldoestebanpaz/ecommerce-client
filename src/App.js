import React from 'react';
import Axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  async componentDidMount() {
    const res = await Axios.get('/api/products');
    console.log(res.data);
    this.setState({ products: res.data });
  }

  render() {

    const products = this.state.products;

    // const htmlproducts = [];
    // if (products !== null) {
    //   for(let i = 0; i< products.length ; i++) {
    //     htmlproducts.push(
    //       <div>{products[i].brand} - {products[i].name}</div>
    //     );
    //   }
    // }

    let htmlproductsWithMap = [];
    if (products !== null) {
      htmlproductsWithMap = products.map(
        p => <div>{p.brand} - {p.model}</div>
      ); 
    }

    return (
      <div className="App">
        {htmlproductsWithMap}
      </div>
    );


  }
}

export default App;
