import React from 'react'
import {Link,NavLink} from 'react-router-dom' //NavLink , permite la navegación

const MainMenu =()=>(
    <header className="mail-header">
        <div className="ed-grid s-grid-5 lg-grid-4">
            <div className="s-cols-4 lg-cols-1 s-cross-center">
                <Link to = "/">
                    <img className="main-logo" src="https://ux.ed.team/img/edteam-ux-logo.svg" alt="Logo"></img>
                </Link>
            </div>
            <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-link">
                <nav className="main-menu" id="main-menu">
                    <ul>
                        <li><NavLink exact to="/" activeClassName="activo">Inicio</NavLink></li>
                        <li><NavLink to="/cursos" activeClassName="activo">Cursos</NavLink></li>
                        <li><NavLink to="/form" activeClassName="activo">Formulario</NavLink></li>
                        <li><NavLink to="/usuarios" activeClassName="activo">Usuarios</NavLink></li>
                    </ul>
                </nav>
                <div className="main-menu-toggle to-1" id = "main-menu-toggle"></div>
            </div>
        </div>
    </header>
)
export default MainMenu