import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Rating,
  Snackbar,
  Alert,
  styled,
  Grid
} from "@mui/material";
import { FaShoppingCart, FaBookmark } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SearchForm from "./search-container";

const StyledCard = styled(Card)(() => ({
  transition: "0.3s",
  boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
  "&:hover": {
    boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
  }
}));

const StyledMedia = styled(CardMedia)({
  paddingTop: "56.25%",
  transition: "0.3s",
  "&:hover": {
    transform: "scale(1.01)",
    cursor: "pointer"
  }
});

const StyledButton = styled(Button)(() => ({
  transition: "0.3s",
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)"
  }
}));

const ProductCard = () => {
  const [products] = useState([
    {
      id: 1,
      name: "Apple",
      description: "This is the description for product 1",
      sold: 150,
      price: 29.99,
      image_url: "https://via.placeholder.com/300"
    },
    {
      id: 2,
      name: "Banana",
      description: "This is the description for product 2",
      sold: 85,
      price: 19.99,
      image_url: "https://via.placeholder.com/300"
    },
    {
      id: 3,
      name: "Cabbage",
      description: "This is the description for product 3",
      sold: 200,
      price: 39.99,
      image_url: "https://via.placeholder.com/300"
    },
    {
      id: 4,
      name: "phone",
      description: "This is the description for product 4",
      sold: 200,
      price: 39.99,
      image_url: "https://via.placeholder.com/300"
    },
    {
      id: 5,
      name: "Product 3",
      description: "This is the description for product 5",
      sold: 200,
      price: 39.99,
      image_url: "https://via.placeholder.com/300"
    },
    {
      id: 6,
      name: "Product 3",
      description: "This is the description for product 6",
      sold: 200,
      price: 39.99,
      image_url: "https://via.placeholder.com/300"
    },
    {
      id: 7,
      name: "Product 3",
      description: "This is the description for product 6",
      sold: 200,
      price: 39.99,
      image_url: "https://via.placeholder.com/300"
    },
    {
      id: 8,
      name: "Product 3",
      description: "This is the description for product 6",
      sold: 200,
      price: 39.99,
      image_url: "https://via.placeholder.com/300"
    },
      {
        id: 9,
        name: "Smartphone X",
        description: "High-end smartphone with stunning display",
        sold: 120,
        price: 799.99,
        image_url: "https://via.placeholder.com/300"
      },
      {
        id: 10,
        name: "Laptop Pro 15",
        description: "Powerful laptop for professionals",
        sold: 85,
        price: 1299.99,
        image_url: "https://via.placeholder.com/300"
      },
      {
        id: 11,
        name: "Wireless Headphones",
        description: "Noise-cancelling wireless headphones",
        sold: 250,
        price: 199.99,
        image_url: "https://via.placeholder.com/300"
      },
      {
        id: 12,
        name: "Smartwatch Series 5",
        description: "Fitness tracking and health monitoring smartwatch",
        sold: 300,
        price: 249.99,
        image_url: "https://via.placeholder.com/300"
      },
      {
        id: 13,
        name: "Gaming Mouse",
        description: "Ergonomic gaming mouse with customizable buttons",
        sold: 150,
        price: 49.99,
        image_url: "https://via.placeholder.com/300"
      },
      {
        id: 14,
        name: "Bluetooth Speaker",
        description: "Portable Bluetooth speaker with high-quality sound",
        sold: 180,
        price: 89.99,
        image_url: "https://via.placeholder.com/300"
      },
      {
        id: 15,
        name: "Product 3",
        description: "This is the description for product 6",
        sold: 200,
        price: 39.99,
        image_url: "https://via.placeholder.com/300"
      },
      {
        id: 16,
        name: "4K Monitor",
        description: "Ultra HD monitor with vibrant colors",
        sold: 90,
        price: 399.99,
        image_url: "https://via.placeholder.com/300"
      },
      {
        id: 17,
        name: "Wireless Earbuds",
        description: "Compact wireless earbuds with long battery life",
        sold: 220,
        price: 129.99,
        image_url: "https://via.placeholder.com/300"
      },
      {
        id: 18,
        name: "Gaming Chair",
        description: "Comfortable chair designed for long gaming sessions",
        sold: 75,
        price: 299.99,
        image_url: "https://via.placeholder.com/300"
      },
      {
        id: 19,
        name: "Tablet S10",
        description: "10-inch tablet with high-resolution display",
        sold: 95,
        price: 499.99,
        image_url: "https://via.placeholder.com/300"
      },
      {
        id: 20,
        name: "Fitness Tracker",
        description: "Track your steps, heart rate, and sleep quality",
        sold: 300,
        price: 149.99,
        image_url: "https://via.placeholder.com/300"
      },
      {
        id: 21,
        name: "Drone X200",
        description: "High-performance drone with 4K camera",
        sold: 40,
        price: 799.99,
        image_url: "https://via.placeholder.com/300"
      },
      {
        id: 22,
        name: "Electric Scooter",
        description: "Eco-friendly electric scooter for urban travel",
        sold: 60,
        price: 499.99,
        image_url: "https://via.placeholder.com/300"
      },
      {
        id: 23,
        name: "Gaming Console",
        description: "Next-gen gaming console with immersive graphics",
        sold: 150,
        price: 499.99,
        image_url: "https://via.placeholder.com/300"
      },
      {
        id: 24,
        name: "Mechanical Keyboard",
        description: "Tactile mechanical keyboard for gaming and work",
        sold: 170,
        price: 109.99,
        image_url: "https://via.placeholder.com/300"
      },
      {
        id: 25,
        name: "Smart Light Bulb",
        description: "Energy-efficient smart light bulb with color control",
        sold: 200,
        price: 29.99,
        image_url: "https://via.placeholder.com/300"
      },
      {
        id: 26,
        name: "Camera Lens 50mm",
        description: "Prime 50mm camera lens with f/1.8 aperture",
        sold: 60,
        price: 299.99,
        image_url: "https://via.placeholder.com/300"
      },
      {
        id: 191,
        name: "Portable Hard Drive",
        description: "1TB portable hard drive for secure data storage",
        sold: 100,
        price: 79.99,
        image_url: "https://via.placeholder.com/300"
      },
      {
        id: 212,
        name: "VR Headset",
        description: "Virtual reality headset for immersive experiences",
        sold: 120,
        price: 349.99,
        image_url: "https://via.placeholder.com/300"
      },
      {
        id: 213,
        name: "Smart Thermostat",
        description: "Smart home thermostat with remote control",
        sold: 50,
        price: 199.99,
        image_url: "https://via.placeholder.com/300"
      },
      {
        id: 224,
        name: "Wireless Charger",
        description: "Fast wireless charger for smartphones and tablets",
        sold: 250,
        price: 49.99,
        image_url: "https://via.placeholder.com/300"
      },
      {
        id: 234,
        name: "Action Camera",
        description: "Waterproof action camera with 4K recording",
        sold: 75,
        price: 199.99,
        image_url: "https://via.placeholder.com/300"
      },
      {
        id: 244,
        name: "Noise-Cancelling Earphones",
        description: "In-ear earphones with active noise cancellation",
        sold: 180,
        price: 89.99,
        image_url: "https://via.placeholder.com/300"
      },
      {
        id: 255,
        name: "Portable Power Bank",
        description: "High-capacity power bank for charging devices",
        sold: 400,
        price: 59.99,
        image_url: "https://via.placeholder.com/300"
      },
      {
        id: 266,
        name: "Smart Doorbell",
        description: "Wi-Fi enabled doorbell with HD video",
        sold: 130,
        price: 149.99,
        image_url: "https://via.placeholder.com/300"
      },
      {
        id: 276,
        name: "Desktop Computer",
        description: "High-performance desktop computer for gaming",
        sold: 85,
        price: 1499.99,
        image_url: "https://via.placeholder.com/300"
      },
      {
        id: 286,
        name: "Smart Air Purifier",
        description: "Air purifier with HEPA filter and smart controls",
        sold: 50,
        price: 249.99,
        image_url: "https://via.placeholder.com/300"
      },
      {
        id: 295,
        name: "Electric Toothbrush",
        description: "Rechargeable electric toothbrush with smart timer",
        sold: 220,
        price: 59.99,
        image_url: "https://via.placeholder.com/300"
      },
      {
        id: 305,
        name: "Home Security Camera",
        description: "Smart security camera with motion detection",
        sold: 100,
        price: 89.99,
        image_url: "https://via.placeholder.com/300"
      },
      {
        id: 315,
        name: "Smart Speaker",
        description: "Voice-activated smart speaker with AI assistant",
        sold: 160,
        price: 149.99,
        image_url: "https://via.placeholder.com/300"
      },
      {
        id: 325,
        name: "LED Desk Lamp",
        description: "Adjustable LED desk lamp with USB charging port",
        sold: 70,
        price: 39.99,
        image_url: "https://via.placeholder.com/300"
      }
    
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  

  const navigate = useNavigate();

  const handleAddToCart = () => {
    setSnackbarMessage("Product added to cart successfully!");
    setSnackbarSeverity("success");
    setSnackbarOpen(true);
  };

  const handleSaveForLater = () => {
    setSnackbarMessage("Product saved for later!");
    setSnackbarSeverity("info");
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  


  const handleImageClick = () => {
    navigate(`/productDetails`);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  return (
    <Box sx={{ flexGrow: 1, mt: 2 }}>
      <SearchForm setSearchTerm={setSearchTerm} />
      <Grid container spacing={2}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <StyledCard>
              <StyledMedia
                image={product.image_url || "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"}
                title={product.name}
                onClick={() => handleImageClick(product.id)} 
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    {product.sold} sold
                  </Typography>
                  <Rating value={4.5} precision={0.5} readOnly sx={{ ml: 2 }} />
                </Box>
                <Typography variant="h6" sx={{ mt: 2 }}>
                  ${product.price.toFixed(2)}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                  <StyledButton
                    variant="contained"
                    startIcon={<FaShoppingCart />}
                    onClick={handleAddToCart}
                    aria-label="Add to Cart"
                  >
                    Add to Cart
                  </StyledButton>
                  <StyledButton
                    variant="outlined"
                    startIcon={<FaBookmark />}
                    onClick={handleSaveForLater}
                    aria-label="Save for Later"
                  >
                    Save for Later
                  </StyledButton>
                </Box>
                <Button onClick={handleImageClick} sx={{ mt: 2 }}>
                  Quick View
                </Button>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
  
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: "100%" }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
  
};

export default ProductCard;
