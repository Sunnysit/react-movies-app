import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    headerContainer:{
        padding:0
    },
    headerTitle:{
        border:"3px solid black",
        margin:"1rem auto",
        padding:".8rem"
    }
})

const Header = () => {

    const classes = useStyles();

    return (
        <Container className={classes.headerContainer}>
            <Typography className={classes.headerTitle} component="h1" variant="h3">React Movies App</Typography>
        </Container>
    )
}

export default Header

