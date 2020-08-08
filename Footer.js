import React, { Component } from 'react'
import { AppBar, Typography } from '@material-ui/core'

const style = {
    footer:{
        top:"auto",
        bottom:0,
        backgroundColor:"darkslategrey",
        color:"black"
    }
}

export default class Footer extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <AppBar position="fixed" style={style.footer}>
                    <Typography variant="overline" align="center">
                    All Rights Reserved by PISTON
                    </Typography>
                </AppBar>
            </div>
        )
    }
}