import React, {Component} from 'react';

class Navbar extends Component {
    render () {
        return (
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Pizza</a>
                </div>
            </nav>
        )
    }
}

export default Navbar;