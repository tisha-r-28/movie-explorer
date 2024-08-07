import { useAtom } from 'jotai';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { token } from '../atoms/UserAtom';

function Navbar() {

    const [ authToken, setAuthToken ] = useAtom(token);

    const [isHovered, setIsHovered] = useState(false);

    const handleLogout = () => {
        setAuthToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        localStorage.removeItem('password');
    }

    return (
        <>
            <nav className="container-fluid" style={{backgroundColor : "#040404"}}>
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg text-white py-4">
                            <div className="container-fluid">
                                <h1 className='fs-3'>Movie-Explorer</h1>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse ms-4 d-flex justify-content-between" id="navbarNav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link className="nav-link text-white" aria-current="page" to="/">Home</Link>
                                        </li>
                                        <li className="nav-item " onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                                            <Link className="nav-link text-white" aria-current="page" to="/movies" >Movies</Link>
                                            { !authToken && isHovered && <p className="text-white position-absolute">Login required</p> }
                                        </li> 
                                    </ul>
                                    <ul className="navbar-nav">
                                        { !authToken ? <>
                                            <li className="nav-item">
                                                <Link to='/login'> <button className='btn btn-primary' disabled={!authToken}>Login</button> </Link> 
                                            </li>
                                            <li className="nav-item">
                                                <Link to='/signup'> <button className='btn btn-primary ms-3'>Sign-up</button> </Link> 
                                            </li>
                                        </> : <li className="nav-item">
                                                <button className='btn btn-primary ms-3'  onClick={handleLogout}>Log-out</button>
                                            </li>}
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
