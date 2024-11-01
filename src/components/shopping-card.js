import React, { useState, useEffect } from "react";
import { styled } from "@mui/system";
import { useNavigate } from 'react-router-dom';
import { Paper } from '@mui/material';
import {
  Box,
  Typography,
  IconButton,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Drawer,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FaShoppingCart, FaTrash, FaPlus, FaMinus } from "react-icons/fa";


const CartContainer = styled(Box)(({ theme, cartColor, cartSize }) => ({
  backgroundColor: cartColor || theme.palette.background.paper || '#fff', 
  width: cartSize === "small" ? "300px" : cartSize === "large" ? "500px" : "400px",
  height: "100%",
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  transition: "all 0.3s ease-in-out",

  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const CartItem = styled(ListItem)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(2, 0),
  "&:last-child": {
    borderBottom: "none",
  },
}));

const CartItemImage = styled("img")({
  width: "60px",
  height: "60px",
  objectFit: "cover",
  marginRight: "16px",
  borderRadius: "4px",
});

const ShoppingCart = ({
  cartColor,
  cartFont,
  cartSize = "medium",
  onAddToCart,
  onRemoveFromCart,
  onCheckout,
  animationSpeed = 300,
}) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    
    setItems([
      {
        id: 1,
        name: "Product 1",
        price: 19.99,
        quantity: 2,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
      },
      {
        id: 2,
        name: "Product 2",
        price: 29.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      },
    ]);
  }, []);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  const handleAddItem = (item) => {
    const updatedItems = items.map((i) =>
      i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
    );
    setItems(updatedItems);
    if (onAddToCart) onAddToCart(item);
  };

  const handleRemoveItem = (item) => {
    const updatedItems = items
      .map((i) =>
        i.id === item.id ? { ...i, quantity: Math.max(0, i.quantity - 1) } : i
      )
      .filter((i) => i.quantity > 0);
    setItems(updatedItems);
    if (onRemoveFromCart) onRemoveFromCart(item);
  };

  const handleCheckout = () => {
    navigate('/checkout');
    // if (onCheckout) onCheckout(items);
  };

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <IconButton
        onClick={toggleCart}
        aria-label="Open shopping cart"
        sx={{
          position: "fixed",
          fontSize: 20,
          top: 15,
          right: {
            xs: 20,
            sm: 40,
            md: 50,
            lg: 180,
          },
          zIndex: 1000
        }}
      >
        <FaShoppingCart />
      </IconButton>
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={toggleCart}
        transitionDuration={animationSpeed}
      >
        <Paper elevation={3}> 
          <CartContainer
            cartColor={cartColor}
            cartSize={cartSize}
            role="region"
            aria-label="Shopping cart"
          >
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontFamily: cartFont }}
            >
              Your Cart
            </Typography>
            <List sx={{ flexGrow: 1, overflowY: "auto" }}>
              {items.map((item) => (
                <CartItem key={item.id} disablePadding>
                  <CartItemImage src={item.image} alt={item.name} />
                  <ListItemText
                    primary={item.name}
                    secondary={`$${item.price.toFixed(2)}`}
                    primaryTypographyProps={{ fontFamily: cartFont }}
                    secondaryTypographyProps={{ fontFamily: cartFont }}
                  />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      aria-label="remove"
                      onClick={() => handleRemoveItem(item)}
                      size="small"
                    >
                      <FaMinus />
                    </IconButton>
                    <Typography
                      component="span"
                      sx={{ mx: 1, fontFamily: cartFont }}
                    >
                      {item.quantity}
                    </Typography>
                    <IconButton
                      edge="end"
                      aria-label="add"
                      onClick={() => handleAddItem(item)}
                      size="small"
                    >
                      <FaPlus />
                    </IconButton>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => handleRemoveItem({ ...item, quantity: item.quantity })}
                      sx={{ ml: 1 }}
                    >
                      <FaTrash />
                    </IconButton>
                  </ListItemSecondaryAction>
                </CartItem>
              ))}
            </List>
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" sx={{ fontFamily: cartFont }}>
                Total: ${totalPrice.toFixed(2)}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleCheckout}
                sx={{ mt: 2, fontFamily: cartFont }}
              >
                Checkout
              </Button>
            </Box>
          </CartContainer>
        </Paper>
      </Drawer>
    </>
  );
};

export default ShoppingCart;
