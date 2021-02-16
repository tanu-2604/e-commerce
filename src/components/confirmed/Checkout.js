import { Button, makeStyles } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    root:{
        paddingTop:"155px"
    },
    head:{
        textAlign:"center"
    }
})
const Checkout = () => {
    const classes = useStyles()
    return (
        <div className={classes.head}>
            <h1 className={classes.root}>Your Order Has Been Confirmed</h1>
            <p>
                Please Go First page and Buy more things
            </p>
            <Link to="/">
            <Button variant="contained" color="primary">
               Go to Product
            </Button>
            </Link>
        </div>
    )
}

export default Checkout
