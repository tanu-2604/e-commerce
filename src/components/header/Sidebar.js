import { MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'

const Sidebar = () => {
    const[open,setOpen] = useState(false)
    const[status,setStatus] = useState(0)
    const[loading,setLoading] = useState(false)

   const handleOpen = e => {
        document.getElementById("mySidenav").style.width = "250px";
    }

    const handleClose = (e) => {
        document.getElementById("mySidenav").style.width = "0";
    }
    return (
        <div>
            <div className="list_dropdown">
                    <button type="button"  className="navbar-toggle collapsed navbar-toggle1" onClick={(e) => handleOpen()}>
                       <MenuIcon style={{color:"#fff"}}/>
                    </button>
                </div>
                <div id="mySidenav" className="sidenav" >
                    <ul onClick={(e) => handleClose()}>
                        <li><Link to="#" className="closebtn">&times;</Link></li>
                        <li><Link to="#">Product</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>
        </div>
    )
}

export default Sidebar
