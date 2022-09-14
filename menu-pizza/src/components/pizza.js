import React, {Component} from 'react';

class Pizza extends Component {
    render () {
        return (
            <div class="row g-0 text-center" style={{marginTop: '15px'}}>
                <div class="col-sm-6 col-md-8">{this.props.pizza.nome} - {this.props.pizza.prezzo} €</div>
                <div class="col-6 col-md-4"><button type="button" class="btn btn-primary" onClick={() => this.props.onClick(this.props.pizza.id)}>Ordina</button></div>
            </div>
        )
    }
}

export default Pizza;