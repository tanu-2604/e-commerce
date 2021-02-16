import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    root:{
        PaddingTop:"50px"
    }
})
const SearchFilter = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
<input type="text" placeholder="search" />
        </div>
    )
}

export default SearchFilter
