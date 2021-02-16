import { Button, Grid } from '@material-ui/core';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../product/ProductList';
import MobileView from './MobileView';


const Header = () => {
    const [state, setstate] = useState({
        width: window.innerWidth,
    })
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);

        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, [])

    const handleWindowSizeChange = () => {
        setstate({ width: window.innerWidth });
    };
    const { width } = state;
    const isMobile = width <= 800;
    if (isMobile) {
        return (
            <div>
                <MobileView />
            </div>
        );
    } else {
        return (
            <>
                <Grid container className="header_info">
                    <Grid item lg={1} xl={2}></Grid>
                    <Grid item md={12} lg={11} xl={10} className="header_fixed">
                        <Grid container>
                            <Grid item md={3} lg={2} xl={2}>
                                <div className="logo">
                                    <h1><Link to="/">BAZAR</Link></h1>
                                </div>
                            </Grid>
                            <Grid item md={6} lg={7} xl={6}>
                            </Grid>
                            <Grid item md={3} lg={4} xl={4}>
                                <Grid container className="bk_cart_sd">
                                    <Grid item md={6} lg={4} xl={6} className="btn_login">
                                        <Link to={"/login"}>
                                            <Button className="login" variant="outlined"><span>Login</span></Button>
                                        </Link>
                                    </Grid>
                                    <Grid item md={6} lg={4} xl={6} className="cart">
                                        <Link to="/carts">
                                            <Button className="cart_item" variant="outlined">
                                                <span className="item_count">1</span>
                                                <i className="fa fa-shopping-cart my-cart-icon" aria-hidden="true" /><span>Cart</span>
                                            </Button>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </>
        )
    }
}
export default Header
