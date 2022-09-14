import Navbar from './components/navbar';
import Pizza from './components/pizza';
import PizzaOnShop from './components/pizzaOnShop';
import React, {Component} from 'react';

class App extends Component {
  state = {
    cards: [
      {id: 0, nome: "Bavarese", prezzo: 9},
      {id: 1, nome: "Margherita", prezzo: 6},
      {id: 2, nome: "Manuel", prezzo: 7},
      {id: 3, nome: "Agrumi", prezzo: 12}
    ],

    order: [
      {id: 0, nome: "Quattro stagioni", prezzo: 7}
    ]
  }

  handleOrder = cardId => {
    const cards = this.state.cards.filter(card => card.id !== cardId);

    this.setState({
      order: [...this.state.order, this.state.cards.filter(card => card.id === cardId)[0]]
    });
    

    this.setState({cards});
  }

  handleDeleteOrder = cardId => {
    const order = this.state.order.filter(card => card.id !== cardId);

    this.setState ({
      cards: [...this.state.cards, this.state.order.filter(card => card.id === cardId)[0]]
    });


    this.setState({order});
  }

  render () {
    const styleAllDiv = {
      display: "flex",
    }

    const styleLeftDiv = {
      width: "70%",
    }

    const styleRightDiv = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "whitesmoke",
      width: "30%",
    }

    return (
      <>
        <Navbar />
        <div style={styleAllDiv}>
          <div style={styleLeftDiv}>
            {this.state.cards.map(pizza => (
              <Pizza
              pizza = {pizza}
              onClick = {this.handleOrder} />
            ))}
          </div>
          <div style={styleRightDiv}>
            <h2>Carello</h2>
            {this.state.order.map(pizza => (
              <PizzaOnShop
              pizza = {pizza}
              onClick = {this.handleDeleteOrder} />
            ))}
          </div>
        </div>
      </>
    );
    }
}

export default App;