import React from 'react'
import './navbar.css'
import { Button, Toolbar, AppBar } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';



class Navbar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <AppBar position="sticky" className="navbar">
                    <Toolbar>
                        <Box display="flex" flexGrow={1}>
                            <Button className="navButton" disableRipple={true} to={'/'} component={Link}>Jeffrey Xu</Button>
                        </Box>
                        <Button className="navButton" disableRipple={true} to={'/portfolio'} component={Link}>Portfolio</Button>
                        <Button className="navButton" disableRipple={true} to={'/contact'} component={Link}>Contact</Button>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        )
    }
}

export default Navbar;