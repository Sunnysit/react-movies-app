import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import LoadingIcon from '../../assets/loading-icon.gif';

const Loading = () => {
    return (
        <Container>
            <img src={LoadingIcon} alt="loading icon"/>
        </Container>
    )
}

export default Loading
