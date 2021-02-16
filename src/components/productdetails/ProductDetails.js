import React, { useState,useEffect } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText, CardContent, Button, makeStyles, Paper, Grid} from '@material-ui/core';
import { Link,useHistory,useParams } from 'react-router-dom';
import { connect,useDispatch } from 'react-redux';
import {addToCart} from '../../actions/productActions'


const useStyles = makeStyles({
    root:{
        marginTop:"155px"
    },
    head:{
        textAlign:"center"
    }
})

const ProductDetails = () => {
    const {id} = useParams()
    const classes = useStyles()
    const history = useHistory()
    const dispatch = useDispatch()
    const [productDetail,setProductDetail] = useState([])
    useEffect(() => {
        console.log("mera")
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then(json => {
            setProductDetail(json)
            }
        )
    }, [])
    const toCart = (item) =>{
        dispatch(addToCart(item));
              history.push("/carts")
       } 


                           return(
                            <Grid
                            container
                           
                          //   className={classes.gridContainer}
                            justify="center"
                          >
                              <Grid item xs={12} lg={4}>
                               <Paper className={classes.head}>
                            <Card>
                            <CardHeader className={classes.root} title={productDetail.title} subtitle=""/>
                            <CardMedia
                                >
                                <img src={productDetail.image} width="70" alt=""/>
                            </CardMedia>
                            <CardHeader title={productDetail.price} />
                            <CardContent>{productDetail.description}</CardContent>
                            <CardActions>
                            <Link to={'/'}>
                                <Button variant="contained" color="primary">
                                    Back to Product List
                                </Button>
                                </Link>
                                <Button variant="contained" color="primary" onClick={() => toCart(productDetail)}>Add to cart</Button>
                            </CardActions>
                        </Card>
                        </Paper>
                        </Grid>
                        </Grid>
                           )
                       
}
const mapStateToProps = (state) => ({
    cartProps: state.cartProduct
});

export default connect(mapStateToProps)(ProductDetails);
