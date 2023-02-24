import React, { useState } from 'react';
import { BsFillCartFill } from "react-icons/bs";

export const Mainnav = () => {

  const [count, setCount] = useState(0);

  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary w-100 p-3">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Barra</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link1</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Lista
                            </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Acción</a></li>
                            <li><a className="dropdown-item" href="#">Acción 2</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Acción 3</a></li>
                        </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                    <button 
                        type="button"
                        className="btn btn-primary position-relative me-3"
                        onClick={() => setCount((count) => count + 1)}
                    >
                        <BsFillCartFill size={25}/>
                        <span className="position-absolute translate-middle badge rounded-pill bg-danger">
                            {count}
                        </span>
                    </button>
                    <button 
                        type="button"
                        className="btn btn-danger position-relative me-3"
                        onClick={() => setCount(0)}
                    >
                        {/* <BsFillCartFill size={25}/> */}
                            Reset Carro
                    </button>
                </div>
            </div>
        </nav>
    </>
  )
}
