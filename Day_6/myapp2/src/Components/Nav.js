import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import AdbIcon from '@mui/icons-material/Adb';
import Rocket from '@mui/icons-material/RocketLaunch'
import Account from '@mui/icons-material/AccountCircle'
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import Grid from '@mui/material';

const pages = ['Products', 'Pricing', 'Blog'];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Nav() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const Navigate = useNavigate()

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleAbout = () => {
    Navigate('/About')
  }
  const handleHome = () => {
    Navigate('/')
  }
  const handleContact= ()=>
  {
    Navigate('/Contact')
  }
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
    <AppBar position="static" sx={{ width: '100vw' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Rocket sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MyApp
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'end', gap: '1rem' } }}>

            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block', }}
            >
              Home
            </Button>
            <Button
              onClick={handleAbout}
              sx={{ my: 2, color: 'white', display: 'block', }}
            >
              About
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block', }}
            >
              Contact
            </Button>

          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Login">
              <IconButton sx={{ p: 0 }}onClick={handleOpen}>
                <Account sx={{ display: { xs: 'none', md: 'flex', color: '#ffffffff', marginLeft: '3rem' }, mr: 1 }} />
              </IconButton>
            </Tooltip>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>

<Modal
open={open}
onClose={handleClose}
aria-labelledby="modal-modal-title"
aria-describedby="modal-modal-description"
>
<Box sx={style}>
  <Typography id="modal-modal-title" variant="h6" component="h2" sx={{color:'blueviolet'}}>
    Text in a modal
  </Typography>
  <TextField id="outlined-basic" label="Username" variant="outlined" color ='secondary' sx={{my:2 , width:'100%'}}/>
  <TextField id="outlined-basic" label="Password" variant="outlined" color ='secondary' sx={{my:2 , width:'100%'}}/>
  <Button variant="contained" color='secondary' sx={{my:1,width:'100%',p:2}}>Login</Button>
</Box>
</Modal>
</>
  );
}
export default Nav;
