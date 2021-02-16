import { Grid,Box,Divider,makeStyles } from '@material-ui/core';
import React,{useState,useEffect} from 'react'
import { Link,useHistory } from 'react-router-dom';
import { connect,useDispatch } from 'react-redux';
import {addToCart} from '../../actions/productActions';
import Pagination from "@material-ui/lab/Pagination";
//import SearchFilter from '../filters/SearchFilter';

const useStyles = makeStyles(theme => ({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper
    },
    item: {
      padding: theme.spacing(1.2)
    },
    avatar: { marginRight: theme.spacing(5) },
    paginator: {
      justifyContent: "center",
      padding: "10px"
    }
  }));
  

const ProductList=(props)=> {
    const classes = useStyles();
    const [product,setProduct] = useState([])
    const [filterProduct,setFilterProduct] = useState([])
    const history = useHistory()
    const dispatch = useDispatch()
    const itemsPerPage = 5;
    const [page, setPage] = React.useState(1);
    const [noOfPages,setNoOfPages] = useState(
        Math.ceil(product.length / itemsPerPage)
      );
   
    
    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json => {
            setProduct(json)
            setFilterProduct(json)
            console.log(json.length)
            setNoOfPages( Math.ceil(json.length / itemsPerPage)
            ) 
        }
        )
    }, [])
    console.log(noOfPages)
    const handleChange = (event, value) => {
        setPage(value);
      };
    
    const searchData = (e)=>{
            console.log(e.target.value)
                const filteredData =product.filter(element => {
                  return element.title.toLowerCase().includes(e.target.value.toLowerCase());
    })
    setFilterProduct(filteredData)
}
   const addtoCart = (item) =>{

    dispatch(addToCart(item));
          history.push("/carts")
   } 

    return (
        <div>
             <div className="product">
                    <div className="container">
                        <div className="spec ">
                            <h3>Products</h3>
                            <div className="ser-t">
                                <b />
                                <span><i /></span>
                                <b className="line" />
                            </div>
                        </div>
                        <div className="search-form">
                                        <form action="#" method="post">
                                            <input type="text" name="search" placeholder="Search for Products..."  onChange={(e) => searchData(e)}/>
                                            <button className="btn search__btn"><i className="fa fa-search" aria-hidden="true"></i></button>
                                        </form>
                                </div>
                                </div>
                            </div>
                            <Grid
      container
      spacing={1}
    //   className={classes.gridContainer}
      justify="center"
    >
       {
                         filterProduct?.slice((page - 1) * itemsPerPage, page * itemsPerPage)
                         .map((prod)=>{
                             return(
                     
                                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}className="pro-1">
                 
                                <div className="col-m">
                                    <Link to={`/productdetail/${prod.id}`} data-toggle="modal" data-target="#myModal1" className="offer-img">
                                        <img src={prod.image} className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/">{prod.title}</Link></h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>{prod.price}</label></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={24} data-name="Wheat" data-summary="summary 24" data-price={6.00} data-quantity={1} data-image="images/of24.png" onClick={() => addtoCart(prod)} >Add to Cart</button>
                                        </div>
                                    </div>
                            </div>
                    </Grid>
         ) 
         })
      }
    </Grid>
    <Divider />
      <Box component="span">
        <Pagination
          count={noOfPages}
          page={page}
          onChange={handleChange}
          defaultPage={1}
          color="primary"
          size="large"
          showFirstButton
          showLastButton
          classes={{ ul: classes.paginator }}
        />
      </Box>
           </div>
    )
}

const mapStateToProps = (state) => ({
    cartProps: state.cartProduct
});

export default connect(mapStateToProps)(ProductList);
// export default ProductList
