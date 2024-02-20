import React from 'react';
import './Navbar.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import skyflare from './skyflare.png'



function Navbar() {
    const [showSidebar, setShowSidebar] = useState(false);
    function toggleSidebar() {
        setShowSidebar(!showSidebar);
    }
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-transparent'>
            <div className='container'>
                {/* logo */}
                <a className='navbar-brand fs-4' href='#home'><img src={skyflare} alt='SkyFlare' className='sky'></img></a>
                {/* togglebutton */}
                <button className='navbar-toggler shadow-none border-0' type='button' onClick={toggleSidebar}>
                    <span className='navbar-toggler-icon'></span>
                </button>
                {/* sidebar */}
                <div className={`sidebar offcanvas offcanvas-start ${showSidebar ? 'show' : ''}`} tabIndex='-1' id='offcanvasNavbar' aria-labelledby='offcanvasNavbarLabel'>

                    {/* sidebar header */}
                    <div className='offcanvas-header text-white border-bottom'>
                    <a className='navbar-brand fs-4' href='#home'><img src={skyflare} alt='SkyFlare' className='sky'></img></a>
                        <button className='btn-close btn-close-white shadow-none' onClick={toggleSidebar} aria-label="Close"></button>
                    </div>

                    {/* sidebar body */}
                    <div className='offcanvas-body d-flex flex-column flex-lg-row p-4'>
                        {/* navbar links */}
                        <ul className='navbar-nav justify-content-end align-items-center fs-5 flex-grow-1 pe-3'>
                            <li className='nav-item mx-2'>
                                <a className='nav-link active' aria-current="page" href="/">Home</a>
                            </li>
                        
                            <li className='nav-item mx-2'>
                                <a className='nav-link active' aria-current="page" href="/services">Services</a>
                            </li>
                            <li className='nav-item mx-2'>
                                <a className='nav-link active' aria-current="page" href="/contact">Contact Us</a>
                            </li>
                            <li className='nav-item mx-2'>
                                <a className='nav-link active' aria-current="page" href="/blog">Blog</a>
                            </li>
                           

                        </ul>

                    </div>

                </div>

            </div>

        </nav >
    )
}

export default Navbar