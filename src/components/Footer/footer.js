import React from 'react';
import './footer.css'
import {Grid} from "@material-ui/core"
import { Link } from 'react-router-dom';
import { Button, Toolbar, AppBar } from '@material-ui/core';

import Github_Logo from '../../images/github_logo.png';
import Instagram_Logo from '../../images/instagram_logo.png';
import LinkedIn_Logo from '../../images/linkedin_logo.png';

class Footer extends React.Component {
    render() {
        return (
            <Grid container spacing={0} className="footer-wrap">
                <Grid item xs={12} className="footer-row">
                    {/* <p>This is where the logos will go</p> */}
                    <Button component={Link} to={{pathname: 'https://github.com/iamjeffx'}} target="_blank">
                        <img src={Github_Logo} style={{height: '35px'}} className="footer-image"/>
                    </Button>
                    <Button component={Link} to={{pathname: 'https://www.instagram.com/iamjeffx/'}} target="_blank">
                        <img src={Instagram_Logo} style={{height: '45px'}} className="footer-image"/>
                    </Button>
                    <Button component={Link} to={{pathname: 'https://www.linkedin.com/in/jeffrey-xu-a9850616b/'}} target="_blank">
                        <img src={LinkedIn_Logo} style={{height: '40px'}} className="footer-image"/>
                    </Button>
                </Grid>
                <Grid item xs={12} className="footer-row">
                    <p>Designed and Developed by Jeffrey Xu</p>
                </Grid>
            </Grid>
        )
    }
}

export default Footer;