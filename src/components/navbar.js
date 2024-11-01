import React, { useEffect, useState } from 'react';
import { alpha, styled } from '@mui/material/styles';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Avatar from '@mui/joy/Avatar';
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import ListDivider from '@mui/joy/ListDivider';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ShoppingCard from './shopping-card';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import Logo from '../img/logo2.png';

const theme = createTheme({
  palette: {
    background: {
      paper: '#fff',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: theme.palette.divider,
  backgroundColor: alpha(theme.palette.background.default, 0.4),
  boxShadow: theme.shadows[1],
  padding: '8px 12px',
}));

export default function ShopAppBar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
    const name = localStorage.getItem('user_name');
    const email = localStorage.getItem('user_email');
    if (name) setUserName(name);
    if (email) setUserEmail(email);
  }, []);

  const UserProfile = () => {
    navigate('/profile');
  };

  const handleLogout = () => {
    localStorage.removeItem('user_name');
    localStorage.removeItem('user_email');
    localStorage.removeItem('token');
    setUserName('');
    setUserEmail('');
    setIsLoggedIn(false);
    navigate('/login');
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ boxShadow: 0, bgcolor: 'transparent', backgroundImage: 'none', mt: 3 }}>
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <img src={Logo} alt='Logo' style={{ height: 50, marginRight: 8 }} />
          <Box sx={{ flexGrow: 3, display: { xs: 'none', md: 'flex' }, alignItems: 'center', px: 0 }}>
            <Button variant="text" color="info" size="small">Home</Button>
            <Button variant="text" color="info" size="small">Shop</Button>
            <Button variant="text" color="info" size="small">Categories</Button>
            <Link to={'/dashboard'}>
            <Button variant="text" color="info" size="small">Dashboard</Button>
            </Link>
            <Button  variant="text" color="info" size="small">Contact</Button>
          </Box>


          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
            <ThemeProvider theme={theme}>
              <ShoppingCard />
            </ThemeProvider>

            {isLoggedIn ? (
              <Dropdown>
                <MenuButton
                  variant="plain"
                  size="sm"
                  sx={{ maxWidth: '32px', maxHeight: '32px', borderRadius: '9999999px' }}
                >
                  <Avatar
                    src="https://i.pravatar.cc/40?img=2"
                    srcSet="https://i.pravatar.cc/80?img=2"
                    sx={{ maxWidth: '32px', maxHeight: '32px' }}
                  />
                </MenuButton>
                <Menu
                  placement="bottom-end"
                  size="sm"
                  sx={{
                    zIndex: '99999',
                    p: 1,
                    gap: 1,
                    '--ListItem-radius': 'var(--joy-radius-sm)',
                  }}
                >
                  <MenuItem onClick={UserProfile}>
                    <Avatar src="https://i.pravatar.cc/40?img=2" srcSet="https://i.pravatar.cc/80?img=2" />
                    <Box sx={{ ml: 1.5 }}>
                      <Typography fontWeight="lg">{userName}</Typography>
                      <Typography level="body2" sx={{ color: 'text.secondary' }}>{userEmail}</Typography>
                    </Box>
                  </MenuItem>
                  <ListDivider />
                  <MenuItem onClick={handleLogout}>
                    <LogoutRoundedIcon fontSize="small" sx={{ mr: 1 }} />
                    Log out
                  </MenuItem>
                </Menu>
              </Dropdown>
            ) : (
              <Button onClick={() => navigate('/login')} sx={{ color: 'white', backgroundColor: 'blue', '&:hover': { backgroundColor: 'darkblue' } }}>
                Log In
              </Button>
            )}
          </Box>


          <Box sx={{ display: { md: 'none' } }}>
            <IconButton color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
              <Box role="presentation" sx={{ width: 250, p: 2 }}>
                <IconButton onClick={toggleDrawer(false)} sx={{ marginLeft: 'auto' }}>
                  <CloseRoundedIcon />
                </IconButton>
                <Divider />
                <Button fullWidth variant="text" color="info" size="small">Home</Button>
                <Button fullWidth variant="text" color="info" size="small">Shop</Button>
                <Button fullWidth variant="text" color="info" size="small">Categories</Button>
               <Button fullWidth variant="text" color="info" size="small">
               <Link to={'/dashboard'}>Dashboard </Link> </Button>
                <Button fullWidth variant="text" color="info" size="small">Contact</Button>
              
                <Divider sx={{ my: 2 }} />
                {isLoggedIn ? (
                  <>
                    <MenuItem onClick={UserProfile}>
                      <Avatar src="https://i.pravatar.cc/40?img=2" />
                      <Box sx={{ ml: 1.5 }}>
                        <Typography fontWeight="lg">{userName}</Typography>
                        <Typography level="body2" sx={{ color: 'text.secondary' }}>{userEmail}</Typography>
                      </Box>
                    </MenuItem>
                    <ShoppingCard />
                    <Button fullWidth onClick={handleLogout} sx={{ color: 'red' }}>Log out</Button>
                  </>
                ) : (
                  <Button fullWidth onClick={() => navigate('/login')} sx={{ backgroundColor: 'blue', color: 'white' }}>Log In</Button>
                )}
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
