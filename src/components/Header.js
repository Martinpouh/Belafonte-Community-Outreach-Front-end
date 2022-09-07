import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <h4 className="navbar-brand">Belafonte Community Outreach</h4>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link to="/consultations"><h6 className="nav-link" aria-current="page">Appointments</h6></Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/patients"><h6 className="nav-link" href="#">Patients</h6></Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                    </div>
                </div>
            </nav>
            <Logo style={{"width": "100%"}}/>
        </div>
    )
}

export default Header;