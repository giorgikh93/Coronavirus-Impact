import React, { useContext, useRef } from 'react'
import { Menu, Button, MenuItem } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { Consumer } from '../useColorTheme'
import corona from '../images/coronaaa.png'

function Menuu(props) {
    const { theme } = useContext(Consumer)
    const [anchorEl, setAnchorEl] = React.useState(null);

    const globalRef = useRef()



    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (e) => {
        setAnchorEl(null);
        // if(e.target.closest('A') === globalRef.current){
            props.setCountryInfo([])
        // }

    };

    return (
        <>
            <Button id={`${theme === 'dark' ? 'darkForm' : ''}`} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <img src={corona} style={{ width: '50px' }} alt='cvd19' />
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}><Link to='/'>Daily update</Link></MenuItem>
                <MenuItem  onClick={handleClose}><Link ref={globalRef} to='/global'>Global Numbers</Link></MenuItem>
            </Menu>
        </>
    )
}

export default Menuu