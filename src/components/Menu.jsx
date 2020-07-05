import React from 'react'
import { Menu, Button, MenuItem } from '@material-ui/core'
import { Link } from 'react-router-dom'

function Menuu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);

    };

    return (
        <>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Open Menu
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}><Link to='/'>Daily update</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/global'>Global Numbers</Link></MenuItem>
            </Menu>
        </>
    )
}

export default Menuu