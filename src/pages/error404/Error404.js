import React from 'react'
import {Link} from 'react-router-dom';


import './Errro404.scss';

const Error404 = () => {
    return (
        <div className="error-404">
            <h1>Error 404</h1>
            <h2>Página no encontrada</h2>
            <Link to="/">
                <h3>Volver al inicio</h3>
            </Link>

        </div>
    )
}

export default Error404
