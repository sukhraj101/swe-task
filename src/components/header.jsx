import React, { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AppsIcon from '@mui/icons-material/Apps';
import { Button, Container, Menu, MenuItem } from '@mui/material';

import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Header() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <AppBar position="sticky" color="white" className='appbar'>
            <Container className="custom">
                <Toolbar sx={{ paddingLeft: 0, paddingRight: 0, minHeight: 'auto' }}>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontWeight: '600' }}>
                        Logo
                    </Typography>

                    <AccountCircle color="secondary" />
                    <Button
                        id="demo-customized-button"
                        aria-controls={open ? 'demo-customized-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        variant="text"
                        disableElevation
                        onClick={handleClick}
                        endIcon={<KeyboardArrowDownIcon />}
                        sx={{ ml: 1.5 }}
                    >
                        JOE DOE
                    </Button>
                    <Menu
                        id="demo-customized-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'demo-customized-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Option 1</MenuItem>
                        <MenuItem onClick={handleClose}>Option 2</MenuItem>
                    </Menu>

                    <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                    >
                        <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, ml: 2 }}
                    >
                        <AppsIcon />
                    </IconButton>
                
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header