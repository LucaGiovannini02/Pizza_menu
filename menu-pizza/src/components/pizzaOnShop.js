import React, {Component} from 'react';

class PizzaOnShop extends Component {
    render() {
        return (
            <div class="row g-0 text-center" style={{marginTop: '15px'}}>
                <div class="col-sm-6 col-md-8">{this.props.pizza.nome} - {this.props.pizza.prezzo} €</div>
                <div class="col-6 col-md-4"><button type="button" class="btn btn-danger" onClick={() => this.props.onClick(this.props.pizza.id)}>Elimina</button></div>
            </div>
        )
    }
}

export default PizzaOnShop;