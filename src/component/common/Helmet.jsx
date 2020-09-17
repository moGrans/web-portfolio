import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} || Hao Liu </title>
                    <meta name="description" content="Hao's web portfolio" />
                </Helmet>
            </React.Fragment>
        )
    }
}

export default PageHelmet;
