import React from 'react'
import { Grid, Button } from '@material-ui/core';
import Sidebar from './Sidebar.js';
import { Link } from 'react-router-dom';
const MobileView = () => {
    return (
        <div>
             <Grid container className="header_info">
                    <Grid item xs={2} sm={2} md={2}>
                       <Sidebar />
                    </Grid>
                    <Grid item xs={7} sm={7} md={7}>
                        <div className="logo">
                            <h5>BAZAR</h5>
                        </div>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} style={{ textAlign:'-webkit-center'}}>
                    <Link to="/carts">
                        <Button className="cart_item" variant="outlined">
                            <span className="item_count">1</span>
                            <i className="fa fa-shopping-cart my-cart-icon" aria-hidden="true" />Cart<span></span>
                        </Button>
                    </Link>
                    </Grid>
                    
                </Grid>

        </div>
    )
}

export default MobileView
