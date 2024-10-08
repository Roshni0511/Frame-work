import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  AppBar, Toolbar, Typography, Box, Button, IconButton, Container, Fab, Drawer, 
  List, ListItem, Divider, TextField, Popover, InputAdornment, Menu, MenuItem, 
  useMediaQuery, useTheme 
} from '@mui/material';
import { 
  ShoppingCart, AccountCircle, WhatsApp, Star, Delete, Add, Remove, 
  Visibility, VisibilityOff, Email, Lock, Menu as MenuIcon 
} from '@mui/icons-material';

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const list = [
    {name: 'Plants', path: '/'},
    {name: 'Seed', path: '/seed'},
    {name: 'Combo Offers', path: '/combo-offer'},
    {name: 'Garden Tools', path: '/garden-tools'},
    {name: 'Contact', path: '/contacts'}
  ];

  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Net Pot 3 Inch", price: 9, originalPrice: 15, qty: 1, image: 'https://plantorbit.com/cdn/shop/files/image_SSX.webp?v=1712572225&width=360' },
    { id: 2, name: "String of Pearls (Bare Rooted)", price: 69, originalPrice: 119, qty: 1, image: 'https://cdn.shopify.com/s/files/1/0598/1444/5195/files/999.jpg?v=1708510494' }
  ]);

  const [loginAnchorEl, setLoginAnchorEl] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleCart = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setCartOpen(open);
  };

  const updateQuantity = (id, amount) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, qty: Math.max(1, item.qty + amount) } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.qty, 0);

  const handleLoginClick = (event) => {
    setLoginAnchorEl(event.currentTarget);
  };

  const handleLoginClose = () => {
    setLoginAnchorEl(null);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login with:', email, password);
    handleLoginClose();
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleMenu = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  return (
    <>
      <AppBar position="sticky" color="default" elevation={0} sx={{ top: 0, zIndex: theme.zIndex.appBar }}>
        <Box
          sx={{
            bgcolor: '#214f38',
            color: 'white',
            py: 1,
            position: 'relative',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
          }}
        >
          <Box
            sx={{
              display: 'inline-block',
              animation: 'scrollText 20s linear infinite',
              whiteSpace: 'nowrap',
            }}
          >
            <Typography variant="body2" sx={{ px: 2 }}>
              Free shipping on orders above ₹199 except seeds 
            </Typography>
          </Box>
          <style>
            {`
              @keyframes scrollText {
                0% { transform: translateX(100%); }
                100% { transform: translateX(-100%); }
              }
            `}
          </style>
        </Box>

        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                color: '#6EC207',
                textDecoration: 'none',
                flexGrow: 1,
              }}
            >
              Green Grove
            </Typography>

            {isMobile && (
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={menuAnchorEl}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(menuAnchorEl)}
                  onClose={handleMenuClose}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {list.map((item) => (
                    <MenuItem key={item.name} onClick={handleMenuClose} component={Link} to={item.path}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            )}

            <Typography
              variant="h5"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontWeight: 700,
                color: '#6EC207',
                textDecoration: 'none',
              }}
            >
              Green Grove
            </Typography>

            {!isMobile && (
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {list.map((item) => (
                  <Button
                    key={item.name}
                    component={Link}
                    to={item.path}
                    sx={{ my: 2, color: '#214f38', display: 'block' }}
                  >
                    {item.name}
                  </Button>
                ))}
              </Box>
            )}

            <Box sx={{ flexGrow: 0 }}>
              <IconButton color="inherit" onClick={toggleCart(true)} aria-label="shopping cart">
                <ShoppingCart />
              </IconButton>
              <IconButton color="inherit" onClick={handleLoginClick} aria-label="account">
                <AccountCircle />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Cart Drawer */}
      <Drawer anchor="right" open={cartOpen} onClose={toggleCart(false)}>
        <Box sx={{ width: 350, p: 2 }}>
          <Typography variant="h6">Shopping Cart</Typography>
          <Divider sx={{ my: 2 }} />
          <List>
            {cartItems.map((item) => (
              <ListItem key={item.id} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <img src={item.image} alt={item.name} style={{ width: '60px', height: '60px', marginRight: '10px', borderRadius: '8px' }} />
                  <Box>
                    <Typography variant="body1">{item.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      <span style={{ textDecoration: 'line-through', marginRight: '5px' }}>₹{item.originalPrice}</span>
                      <span style={{ fontWeight: 'bold', color: 'red' }}>₹{item.price}</span>
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <IconButton onClick={() => updateQuantity(item.id, -1)}><Remove /></IconButton>
                  <TextField value={item.qty} variant="outlined" size="small" sx={{ width: '40px', mx: 1 }} />
                  <IconButton onClick={() => updateQuantity(item.id, 1)}><Add /></IconButton>
                  <IconButton edge="end" aria-label="delete" onClick={() => removeItem(item.id)}>
                    <Delete />
                  </IconButton>
                </Box>
              </ListItem>
            ))}
          </List>
          <Divider sx={{ my: 2 }} />
          <Box sx={{ my: 2 }}>
            <TextField
              label="Apply Discount Code"
              variant="outlined"
              fullWidth
              size="small"
            />
            <Button variant="contained" fullWidth sx={{ mt: 1, bgcolor: '#214f38' }}>
              APPLY
            </Button>
          </Box>
          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Typography variant="body1">SUB TOTAL: ₹{subtotal}</Typography>
            <Typography variant="body1" color="text.secondary">DISCOUNT: ₹0.00</Typography>
            <Divider sx={{ my: 1 }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>TOTAL: ₹{subtotal}</Typography>
            <Button variant="contained" sx={{ mt: 2, width: '100%', bgcolor: '#214f38' }}>
              CHECKOUT - ₹{subtotal}
            </Button>
          </Box>
        </Box>
      </Drawer>

 
      <Popover
        open={Boolean(loginAnchorEl)}
        anchorEl={loginAnchorEl}
        onClose={handleLoginClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Box sx={{ p: 2, width: 300 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Login</Typography>
          <form onSubmit={handleLogin}>
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 1, bgcolor: '#214f38' }}
            >
              Login
            </Button>
          </form>
          <Typography variant="body2" align="center">
            Don't have an account? <Link to="/signup" style={{ color: '#214f38' }}>Sign up</Link>
          </Typography>
        </Box>
      </Popover>

      <Fab aria-label="WhatsApp" sx={{ position: 'fixed', bottom: 16, right: 16, backgroundColor:'#06D001', color:'#fff'}}>
        <WhatsApp />
      </Fab>

      <Fab color="secondary" aria-label="Reviews" sx={{ position: 'fixed', bottom: 80, right: 16, backgroundColor:'#FFC700' }}>
        <Star />
      </Fab>
    </>
  );
}