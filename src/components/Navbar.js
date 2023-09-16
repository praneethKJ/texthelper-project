import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar(props) {

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/TextForm">{props.title} </Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/TextForm">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About">About</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark mode</label>
                    </div>
                </div>
            </nav>
        </>
    )
}
