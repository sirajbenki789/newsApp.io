import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            mode: 'dark',
        }
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ position: 'sticky', top: '0', }}>
                    <div className="container-fluid" >
                        <Link className="navbar-brand" to='/'>World Web News</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-itemhref">
                                    <Link className={`nav-link active`} aria-current="page" to="/home">Home</Link>
                                </li>
                                
                                <li className="nav-item"><Link className="nav-link" to="/business">business</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/entertainment">entertainment</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/general">general</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/health">health</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/science">science</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/sports">sports</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/technology">technology</Link></li>
                                {/* <li className="nav-item"><Link className="nav-link" to="/About">About</Link></li> */}
                            </ul>
                        </div>
                        {/* <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckDefault"
                        >
                            Swith to {this.props.mode === 'light' ? 'dark' : 'light'}
                        </label> */}
                    </div>
                </nav>
            </div>
        )
    }
}
