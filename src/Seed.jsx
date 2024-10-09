import React, { useState } from 'react';
import { Box, Grid, Button,Typography,Container } from '@mui/material';
import Slider from 'react-slick';
import { List, ListItem, } from '@mui/material';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {  Card, CardContent, CardMedia} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Accordion,AccordionSummary, AccordionDetails, Checkbox, FormControlLabel,  Link,} from '@mui/material';
import { Facebook, Twitter, Instagram, YouTube } from '@mui/icons-material';
import { Row } from 'react-bootstrap';

const seller = [
    {
      id: 1,
      name: " ZINNIA RED OPEN POLLINATED SEEDS (25-30 seeds)",
      image:`${process.env.PUBLIC_URL}/sumer-1.webp`,
      oldPrice: 80,
      price: 39,
      discount: 51,
      rating: 0,
      reviews: 12,
      isAvailable: true,
      isSale: true,
    },
    {
      id: 2,
      name: "SLISIANTHUS PINK  HYBRID SEEDS (10 seeds)",
      image: `${process.env.PUBLIC_URL}/sumer-2.webp`,
      oldPrice: 0, 
      price: 100,
      discount: 0, 
            rating: 5,
      reviews: 6,
      isSale: false,
    },
    {
      id: 3,
      name: "  COLEUS MIX HYBRID SEEDS (30 seeds)",
      image: `${process.env.PUBLIC_URL}/sumer-3.webp`,
      oldPrice: 0,
      price: 89,
      discount: 10,
      rating: 5,
      reviews: 2,
      isSale: false,
    },
    {
      id: 4,
      name: "   CYPRESS VINE HYBRID SEEDS (20 seeds) ",
      image:`${process.env.PUBLIC_URL}/sumer-4.webp`,
      oldPrice: 0,
      price: 50,
      discount: 65,
      rating: 4.5,
      reviews: 3,
      isSale: false,
    },

    {
      id: 5,
      name: "    Portulaca Double / Moss Rose / 9' O Clock Mix Open Pollinated Seeds",
      image: `${process.env.PUBLIC_URL}/sumer-5.webp`,
      oldPrice: 0,
      price: 49,
      discount: 10,
      rating: 5,
      reviews: 2,
      isSale: false,
    },
    {
      id: 6,
      name: "  ZINNIA WHITE OPEN POLLINATED SEEDS (25-30 seeds) ",
      image:`${process.env.PUBLIC_URL}/sumer-6.webp`,
      oldPrice: 80,
      price: 39,
      discount: 51,
      rating: 5,
      reviews: 2,
      isSale: true,
    },
    {
      id: 7,
      name:
    "  MORNING GLORY MIX HYBRID SEEDS (15-20 seeds)"
    ,
      image: `${process.env.PUBLIC_URL}/sumer-7.webp`,
      oldPrice: 0,
      price: 59,
      discount: 65,
      rating: 4.5,
      reviews: 3,
      isSale: false,
    },
    {
      id: 8,
      name:
     " SUNFLOWER MINNIATURE HYBRID SEEDS (20-25 seeds)",
    
      image: `${process.env.PUBLIC_URL}/sumer-8.webp`,
      oldPrice: 0,
      price: 49,
      discount: 10,
      rating: 5,
      reviews: 2,
      isSale: false,
    },
    {
        id: 9,
        name: "   KOCHIA BUSH OPEN POLLINATED SEEDS (25-30 seeds)",
        image: `${process.env.PUBLIC_URL}/sumer-9.webp`,
        oldPrice: 80,
        price: 49,
        discount: 51,
        rating: 0,
        reviews: 12,
    
        isSale: false,
      },
      {
        id: 10,
        name: 
             " Petunia violet hybrid seeds (100 seeds)"
            ,
        image: `${process.env.PUBLIC_URL}/sumer-10.webp`,
        oldPrice: 150, 
        price: 79,
        discount: 47, 
              rating: 5,
        reviews: 6,
        isSale: true,
      },
      {
        id:11,
        name:   
              "COCKSCOMB MIX OPEN POLLINATED SEEDS (50-60 seeds)"
            ,
        image: `${process.env.PUBLIC_URL}/sumer-11.webp`,
        oldPrice: 0,
        price: 39,
        discount: 10,
        rating: 4,
        reviews: 7,
        isSale: false,
      },
      {
        id: 12,
        name: " SUNFLOWER RED HYBRID SEEDS (20-22 seeds)",
        image: `${process.env.PUBLIC_URL}/sumer-12.webp`,
        oldPrice: 0,
        price: 79,
        discount: 65,
        rating: 4.5,
        reviews: 3,
        isSale: false,
      },
  
     
  ];

  const winter = [
    {
      id: 1,
      name: "DAISY MIXED HYBRID SEEDS (100 seeds)",
      image: `${process.env.PUBLIC_URL}/winter-1.webp`,
      oldPrice: 80,
      price: 39,
      discount: 51,
      rating: 0,
      reviews: 12,
    
      isSale: true,
    },
    {
      id: 2,
      name: "Dahlia Hybrid Mix Flower Seeds,(25 seeds)",
      image:`${process.env.PUBLIC_URL}/winter-2.webp`,
      oldPrice: 150, 
      price: 100,
      discount: 20, 
            rating: 5,
      reviews: 6,
      isSale: true,
    },
    {
      id: 3,
      name: "  CINERARIA MIXED HYBRID SEEDS (70-80 seeds)",
      image: `${process.env.PUBLIC_URL}/winter-3.webp`,
      oldPrice:110,
      price: 89,
      discount: 10,
      rating: 5,
      reviews: 2,
      isSale: true,
    },
    {
      id: 4,
      name: "  LUPIN MIX HYBRID SEEDS (20 seeds)",
      image:`${process.env.PUBLIC_URL}/winter-4.webp`,
      oldPrice: 100,
      price: 50,
      discount: 65,
      rating: 4.5,
      reviews: 3,
      isSale: true,
    },

    {
      id: 5,
      name: "    RANANCULUS – BLOOMINGDALE MIX HYBRID SEEDS (5 seeds)",
      image: `${process.env.PUBLIC_URL}/winter-5.webp`,
      oldPrice: 100,
      price: 49,
      discount: 10,
      rating: 5,
      reviews: 2,
      isSale: true,
    },
    {
      id: 6,
      name: "MORPANKHI / THUJA / ORIENTAL ARBOR HYBRID SEEDS (10 seeds)",
      image:`${process.env.PUBLIC_URL}/winter-6.webp`,
      oldPrice: 80,
      price: 39,
      discount: 51,
      rating: 5,
      reviews: 2,
      isSale: true,
    },
    {
      id: 7,
      name:
    "  LAVENDER HYBRID SEEDS (30-40 seeds)"
    ,
      image: `${process.env.PUBLIC_URL}/winter-7.webp`,
      oldPrice: 90,
      price: 59,
      discount: 65,
      rating: 4.5,
      reviews: 3,
      isSale: true,
    },
    {
      id: 8,
      name:
     " PANSY MIXED OPEN POLLINATED SEEDS (70-80 seeds)",
    
      image: `${process.env.PUBLIC_URL}/winter-8.webp`,
      oldPrice: 80,
      price: 49,
      discount: 10,
      rating: 5,
      reviews: 2,
      isSale: true,
    },
    {
        id: 9,
        name: "   BRANCHYSCOME MIXED OPEN POLLINATED SEEDS (100 seeds)",
        image: `${process.env.PUBLIC_URL}/winter-9.webp`,
        oldPrice: 80,
        price: 49,
        discount: 51,
        rating: 0,
        reviews: 12,
    
        isSale: true,
      },
      {
        id: 10,
        name: 
             " Gazania Mix Hybrid Seeds (40 seeds)"
            ,
        image:`${process.env.PUBLIC_URL}/winter-10.webp`,
        oldPrice: 150, 
        price: 79,
        discount: 47, 
              rating: 5,
        reviews: 6,
        isSale: true,
      },
      {
        id:11,
        name:   
              "STOCKS MIXED OPEN POLLINATED SEEDS (70-80 seeds)"
            ,
        image: `${process.env.PUBLIC_URL}/winter-11.webp`,
        oldPrice: 90,
        price: 39,
        discount: 10,
        rating: 4,
        reviews: 7,
        isSale: true,
      },
      {
        id: 12,
        name: "Ornamental kale hybrid seeds (40 seeds)",
        image: `${process.env.PUBLIC_URL}/winter-12.webp`,
        oldPrice:110,
        price: 79,
        discount: 65,
        rating: 4.5,
        reviews: 3,
        isSale: true,
      },
  
     
  ];
  const fruits = [
    {
      id: 1,
      name: "STRAWBERRY HYBRID SEEDS (100 seeds)",
      image: `${process.env.PUBLIC_URL}/fruit-1.webp`,
      
      oldPrice: 80,
      price: 39,
      discount: 51,
      rating: 0,
      reviews: 12,
    
      isSale: true,
    },
    {
      id: 2,
      name: "STRAWBERRY HYBRID SEEDS (100 seeds)",
      image: `${process.env.PUBLIC_URL}/fruit-2.webp`,
      oldPrice: 150, 
      price: 100,
      discount: 20, 
            rating: 5,
      reviews: 6,
      isSale: true,
    },
    {
      id: 3,
      name: " PAPAYA HYBRID SEEDS (25-30 seeds)",
      image: `${process.env.PUBLIC_URL}/fruit-3.webp`,
      oldPrice:110,
      price: 89,
      discount: 10,
      rating: 5,
      reviews: 2,
      isSale: true,
    },
    {
      id: 4,
      name: " WATERMELON HYBRID SEEDS (30 seeds)",
      image: `${process.env.PUBLIC_URL}/fruit-4.webp`,
      oldPrice: 100,
      price: 50,
      discount: 65,
      rating: 4.5,
      reviews: 3,
      isSale: true,
    },

    {
      id: 5,
      name: " KACHARI HYBRID SEEDS (50 seeds)",
      image: `${process.env.PUBLIC_URL}/fruit-5.webp`,
      oldPrice: 100,
      price: 49,
      discount: 10,
      rating: 5,
      reviews: 2,
      isSale: true,
    },
    {
      id: 6,
      name: "Muskmelon ( Kharbooj) Hybrid Seeds (50 seeds)",
      image: `${process.env.PUBLIC_URL}/fruit-6.webp`,
      oldPrice: 80,
      price: 39,
      discount: 51,
      rating: 5,
      reviews: 2,
      isSale: true,
    },
     
  ];

  const vegetable = [
    {
      id: 1,
      name: "TOMATO DESI VEGETABLES SEEDS (50 seeds)",
      image:`${process.env.PUBLIC_URL}/veg-1.webp`,
      oldPrice: 80,
      price: 39,
      discount: 51,
      rating: 0,
      reviews: 12,
    
      isSale: true,
    },
    {
      id: 2,
      name: "SPINACH (GREEN) DESI VEGETABLE SEEDS (200 seeds)",
      image:`${process.env.PUBLIC_URL}/veg-2.webp`,
      oldPrice: 150, 
      price: 100,
      discount: 20, 
            rating: 5,
      reviews: 6,
      isSale: true,
    },
    {
      id: 3,
      name: " CAPSICUM (RED) DESI VEGETABLE SEEDS (20 seeds)",
      image:`${process.env.PUBLIC_URL}/veg-3.webp`,
      oldPrice:110,
      price: 89,
      discount: 10,
      rating: 5,
      reviews: 2,
      isSale: true,
    },
    {
      id: 4,
      name: " CHERRY TOMATO RED HYBRID SEEDS (40 seeds)",
      image: `${process.env.PUBLIC_URL}/veg-4.webp`,
      oldPrice: 100,
      price: 50,
      discount: 65,
      rating: 4.5,
      reviews: 3,
      isSale: true,
    },

    {
      id: 5,
      name: "   CORIANDER DESI VEGETABLE SEEDS (200 seeds)",
      image: `${process.env.PUBLIC_URL}/veg-5.webp`,
      oldPrice: 100,
      price: 49,
      discount: 10,
      rating: 5,
      reviews: 2,
      isSale: true,
    },
    {
      id: 6,
      name: "CUCUMBER DESI VEGETABLE SEEDS (40 seeds)",
      image: `${process.env.PUBLIC_URL}/veg-6.webp`,
      oldPrice: 80,
      price: 39,
      discount: 51,
      rating: 5,
      reviews: 2,
      isSale: true,
    },
    {
      id: 7,
      name:
    " LADY FINGER/ BHINDI DESI VEGETABLE SEEDS (40 seeds)"
    ,
      image:`${process.env.PUBLIC_URL}/veg-7.webp`,
      oldPrice: 90,
      price: 59,
      discount: 65,
      rating: 4.5,
      reviews: 3,
      isSale: true,
    },
    {
      id: 8,
      name:
     " GREEN CHILLI DESI VEGETABLE SEEDS (50 seeds) ",
    
      image: `${process.env.PUBLIC_URL}/veg-8.webp`,
      oldPrice: 80,
      price: 49,
      discount: 10,
      rating: 5,
      reviews: 2,
      isSale: true,
    },
    {
        id: 9,
        name: " LETTUCE GREEN HYBRID SEEDS (40-50 seeds)",
        image: `${process.env.PUBLIC_URL}/veg-9.webp`,
        oldPrice: 80,
        price: 49,
        discount: 51,
        rating: 0,
        reviews: 12,
    
        isSale: true,
      },
      {
        id: 10,
        name: 
             " PEAS DESI VEGETABLE SEEDS (30 seeds)"
            ,
        image: `${process.env.PUBLIC_URL}/veg-10.webp`,
        oldPrice: 150, 
        price: 79,
        discount: 47, 
              rating: 5,
        reviews: 6,
        isSale: true,
      },
      {
        id:11,
        name:   
              "CARROT DESI VEGETABLE SEEDS (50 seeds)"
            ,
        image: `${process.env.PUBLIC_URL}/veg-11.webp`,
        oldPrice: 90,
        price: 39,
        discount: 10,
        rating: 4,
        reviews: 7,
        isSale: true,
      },
      {
        id: 12,
        name: "BRINJAL (LONG) DESI VEGETABLE SEEDS (50 seeds)",
        image: `${process.env.PUBLIC_URL}/veg-12.webp`,
        oldPrice:110,
        price: 79,
        discount: 65,
        rating: 4.5,
        reviews: 3,
        isSale: true,
      },
  
     
  ];
const Seed = () => {
 
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    arrows: false, 
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setActiveSlide(current), 
  };


  const seedData = {
    summer: [
      { name: "ZINNIA RED OPEN POLLINATED SEEDS", price: "Rs. 39.00", discount: "51%", img: "https://plantorbit.com/cdn/shop/products/Zinnia.jpg" },
     
    ],
    winter: [
      { name: "Winter Flower Seeds 1", price: "Rs. 100.00", img: "https://plantorbit.com/cdn/shop/products/WinterFlower.jpg" },
     
    ],
    fruit: [
      { name: "Fruit Seeds 1", price: "Rs. 89.00", img: "https://plantorbit.com/cdn/shop/products/FruitSeeds.jpg" },
      
    ],
    vegetable: [
      { name: "Vegetable Seeds 1", price: "Rs. 50.00", img: "https://plantorbit.com/cdn/shop/products/VegetableSeeds.jpg" },
      
    ]
  };

  
  const renderCards = () => {
    switch (activeSlide) {
      case 0: 
      return seedData.summer.map((seed, index) => (
        <Box
          sx={{
            py: 5,
            marginTop: '40px',
            textAlign: 'center',
            animation: 'fadeIn 2s ease-in-out',
            '@keyframes fadeIn': {
              from: { opacity: 0 },
              to: { opacity: 1 },
            },
          }}
          key={index}
        >
          <Container className='check'>
            <Row sx={{ padding: '10px', width: '100%' }}>
              <Box>
                <Typography variant="h4" color="green" gutterBottom align="center" sx={{ padding: '0 20px 20px 20px' }}>
                  Best Seller
                </Typography>
              </Box>
              
                <Grid container spacing={4} justifyContent="center"> 
                  {seller.map((product) => (
                    <Grid
                      item
                      xs={12} 
                      sm={6} 
                      md={4}  
                      lg={3} 
                      key={product.id}
                      sx={{
                        animation: 'fadeUp 0.8s ease-in-out',
                        '@keyframes fadeUp': {
                          from: { opacity: 0, transform: 'translateY(50px)' },
                          to: { opacity: 1, transform: 'translateY(0)' },
                        },
                      }}
                    >
                      <Card
                        sx={{
                          borderRadius: 3,
                          boxShadow: 3,
                          height: '100%',
                          overflow: 'hidden',
                          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                          '&:hover': {
                            transform: 'scale(1.05)',
                            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                          },
                        }}
                      >
                      
                        <CardMedia
                          component="img"
                          height="250"
                          image={product.image}
                          alt={product.name}
                          sx={{
                            borderTopLeftRadius: '16px',
                            borderTopRightRadius: '16px',
                            objectFit: 'cover',
                            transition: 'transform 0.3s ease-in-out',
                            '&:hover': {
                              transform: 'scale(1.08)',
                            },
                          }}
                        />
                        <CardContent>
                          <Typography variant="h6" gutterBottom sx={{ fontSize: '14px' }}>
                            {product.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            sx={{ paddingTop: '10px', color: '#214f38' }}
                          >
                            ★★★★★ ({product.reviews} Reviews)
                          </Typography>
                          {product.isSale && (
                            <Typography
                              variant="body2"
                              color="textSecondary"
                              sx={{
                                textDecoration: 'line-through',
                                paddingTop: '10px',
                              }}
                            >
                              Rs. {product.oldPrice}
                            </Typography>
                          )}
                          <Typography
                            variant="body2"
                            color="primary"
                            sx={{
                              paddingTop: '10px',
                              fontWeight: '600',
                              marginRight: '20px',
                            }}
                          >
                            Rs. {product.price}{' '}
                            {product.isSale && (
                              <span style={{ color: 'red', paddingLeft: '15px' }}>
                                {product.discount}% off
                              </span>
                            )}
                          </Typography>
                          <Button
                            variant="contained"
                            sx={{
                              mt: 2,
                              width: '100%',
                              backgroundColor: '#214f38',
                              transition: 'transform 0.3s ease-in-out',
                              '&:hover': {
                                backgroundColor: '#1d3f30',
                                transform: 'scale(1.1)',
                              },
                            }}
                          >
                            Add to Cart
                          </Button>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
                <Box >
              </Box>
            </Row>
          </Container>
        </Box>
      ));
    
      case 1: 
      return seedData.winter.map((seed, index) => (
        <Box
          key={index}
          sx={{
            py: 5,
            marginTop: '40px',
            textAlign: 'center',
            animation: 'fadeIn 2s ease-in-out',
            '@keyframes fadeIn': {
              from: { opacity: 0 },
              to: { opacity: 1 },
            },
          }}
        >
          <Container maxWidth="lg">
            <Typography variant="h4" color="green" gutterBottom align="center" sx={{ padding: '0 20px 20px 20px' }}>
              Best Seller
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {winter.map((product) => (
                <Grid
                  item
                  xs={12} 
                  sm={6}  
                  md={4}  
                  lg={3} 
                  key={product.id}
                  sx={{
                    animation: 'fadeUp 0.8s ease-in-out',
                    '@keyframes fadeUp': {
                      from: { opacity: 0, transform: 'translateY(50px)' },
                      to: { opacity: 1, transform: 'translateY(0)' },
                    },
                  }}
                >
                  <Card
                    sx={{
                      borderRadius: 3,
                      boxShadow: 3,
                      height: '100%',
                      overflow: 'hidden',
                      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                      },
                    }}
                  >
                  
                    <CardMedia
                      component="img"
                      height="250"
                      image={product.image}
                      alt={product.name}
                      sx={{
                        borderTopLeftRadius: '16px',
                        borderTopRightRadius: '16px',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.08)',
                        },
                      }}
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom sx={{ fontSize: '16px' }}>
                        {product.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{ paddingTop: '10px', color: '#214f38' }}
                      >
                        ★★★★★ ({product.reviews} Reviews)
                      </Typography>
                      {product.isSale && (
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          sx={{
                            textDecoration: 'line-through',
                            paddingTop: '10px',
                          }}
                        >
                          Rs. {product.oldPrice}
                        </Typography>
                      )}
      
                      <Typography
                        variant="body2"
                        color="primary"
                        sx={{
                          paddingTop: '10px',
                          fontWeight: '600',
                          marginRight: '20px',
                        }}
                      >
                        Rs. {product.price}{' '}
                        {product.isSale && (
                          <span style={{ color: 'red', paddingLeft: '15px' }}>
                            {product.discount}% off
                          </span>
                        )}
                      </Typography>
      
                      <Button
                        variant="contained"
                        sx={{
                          mt: 2,
                          width: '100%',
                          backgroundColor: '#214f38',
                          transition: 'transform 0.3s ease-in-out',
                          '&:hover': {
                            backgroundColor: '#1d3f30',
                            transform: 'scale(1.1)',
                          },
                        }}
                      >
                        Add to cart
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      ));
      
      case 2: 
      return seedData.fruit.map((seed, index) => (
        <Box
          key={index} 
          sx={{
            py: 5,
            marginTop: '40px',
            textAlign: 'center',
            animation: 'fadeIn 2s ease-in-out',
            '@keyframes fadeIn': {
              from: { opacity: 0 },
              to: { opacity: 1 },
            },
          }}
        >
          <Container maxWidth="lg"> 
            <Typography variant="h4" color="green" gutterBottom align="center" sx={{ padding: '0 20px 20px 20px' }}>
              Best Seller
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {fruits.map((product) => (
                <Grid
                  item
                  xs={12}
                  sm={6} 
                  md={4} 
                  lg={3} 
                  key={product.id}
                  sx={{
                    animation: 'fadeUp 0.8s ease-in-out',
                    '@keyframes fadeUp': {
                      from: { opacity: 0, transform: 'translateY(50px)' },
                      to: { opacity: 1, transform: 'translateY(0)' },
                    },
                  }}
                >
                  <Card
                    sx={{
                      borderRadius: 3,
                      boxShadow: 3,
                      height: '100%',
                      overflow: 'hidden',
                      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                      },
                    }}
                  >
                  
                    <CardMedia
                      component="img"
                      height="250"
                      image={product.image}
                      alt={product.name}
                      sx={{
                        borderTopLeftRadius: '16px',
                        borderTopRightRadius: '16px',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.08)',
                        },
                      }}
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom sx={{ fontSize: '16px' }}>
                        {product.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{ paddingTop: '10px', color: '#214f38' }}
                      >
                        ★★★★★ ({product.reviews} Reviews)
                      </Typography>
                      {product.isSale && (
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          sx={{
                            textDecoration: 'line-through',
                            paddingTop: '10px',
                          }}
                        >
                          Rs. {product.oldPrice}
                        </Typography>
                      )}
      
                      <Typography
                        variant="body2"
                        color="primary"
                        sx={{
                          paddingTop: '10px',
                          fontWeight: '600',
                          marginRight: '20px',
                        }}
                      >
                        Rs. {product.price}{' '}
                        {product.isSale && (
                          <span style={{ color: 'red', paddingLeft: '15px' }}>
                            {product.discount}% off
                          </span>
                        )}
                      </Typography>
      
                      <Button
                        variant="contained"
                        sx={{
                          mt: 2,
                          width: '100%',
                          backgroundColor: '#214f38',
                          transition: 'transform 0.3s ease-in-out',
                          '&:hover': {
                            backgroundColor: '#1d3f30',
                            transform: 'scale(1.1)',
                          },
                        }}
                      >
                        Add to cart
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      ));
      
      case 3: 
      return seedData.vegetable.map((seed, index) => (
        <Box
          key={index} 
          sx={{
            py: 5,
            marginTop: '40px',
            textAlign: 'center',
            animation: 'fadeIn 2s ease-in-out',
            '@keyframes fadeIn': {
              from: { opacity: 0 },
              to: { opacity: 1 },
            },
          }}
        >
          <Container maxWidth="lg">
          <Typography variant="h4" color="green" gutterBottom align="center" sx={{ padding: '0 20px 20px 20px' }}>
              Best Seller
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {vegetable.map((product) => (
                <Grid
                  item
                  xs={12} 
                  sm={6}  
                  md={4}  
                  lg={3}  
                  key={product.id}
                  sx={{
                    animation: 'fadeUp 0.8s ease-in-out',
                    '@keyframes fadeUp': {
                      from: { opacity: 0, transform: 'translateY(50px)' },
                      to: { opacity: 1, transform: 'translateY(0)' },
                    },
                  }}
                >
                  <Card
                    sx={{
                      borderRadius: 3,
                      boxShadow: 3,
                      height: '100%',
                      overflow: 'hidden',
                      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                      },
                    }}
                  >
                   
                    <CardMedia
                      component="img"
                      height="250"
                      image={product.image}
                      alt={product.name}
                      sx={{
                        borderTopLeftRadius: '16px',
                        borderTopRightRadius: '16px',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.08)',
                        },
                      }}
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom sx={{ fontSize: '16px' }}>
                        {product.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{ paddingTop: '10px', color: '#214f38' }}
                      >
                        ★★★★★ ({product.reviews} Reviews)
                      </Typography>
                      {product.isSale && (
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          sx={{
                            textDecoration: 'line-through',
                            paddingTop: '10px',
                          }}
                        >
                          Rs. {product.oldPrice}
                        </Typography>
                      )}
      
                      <Typography
                        variant="body2"
                        color="primary"
                        sx={{
                          paddingTop: '10px',
                          fontWeight: '600',
                          marginRight: '20px',
                        }}
                      >
                        Rs. {product.price}{' '}
                        {product.isSale && (
                          <span style={{ color: 'red', paddingLeft: '15px' }}>
                            {product.discount}% off
                          </span>
                        )}
                      </Typography>
      
                      <Button
                        variant="contained"
                        sx={{
                          mt: 2,
                          width: '100%',
                          backgroundColor: '#214f38',
                          transition: 'transform 0.3s ease-in-out',
                          '&:hover': {
                            backgroundColor: '#1d3f30',
                            transform: 'scale(1.1)',
                          },
                        }}
                      >
                        Add to cart
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      ));
      
      default:
        return null;
    }
  };

  return (
    <>
       <Box className="slider-container">
        <Slider {...settings} >
         
          <Box className="slide-content extraClass" sx={{marginBottom:'20px'}} >
            <Box className="text-section">
              <h3>Summer Flower Seeds</h3>
            </Box>
            <Box className="image-section ">
              <img src={`${process.env.PUBLIC_URL}/slide-1.webp`}
               />
            </Box>
          </Box>

          <Box className="slide-content extraClass" >
            <Box className="text-section">
              <h3>Winter Flower Seeds</h3>
            </Box>
            <Box className="image-section">
              <img src={`${process.env.PUBLIC_URL}/slide-2.webp`} />
            </Box>
          </Box>

          <Box className="slide-content extraClass">
            <Box className="text-section">
              <h3>Fruit Seeds</h3>
            </Box>
            <Box className="image-section">
              <img src={`${process.env.PUBLIC_URL}/slide-3.webp`} alt="Fruit Seeds" />
            </Box>
          </Box>

          <Box className="slide-content extraClass">
            <Box className="text-section">
              <h3>Vegetable Seeds</h3>
              
            </Box>
            <Box className="image-section">
              <img src={`${process.env.PUBLIC_URL}/slide-4.webp`}alt="Vegetable Seeds" />
            </Box>
          </Box>
    
        </Slider>
      </Box> 


    
      <Box className="card-container">
  <Grid container spacing={2} sx={{justifyContent : 'center'}}>
    {renderCards()}
  </Grid>
</Box>

<Box
  sx={{
    backgroundColor: '#f8f8ff',
    py: 4,
    marginTop: '30px',
    padding: '20px',
  }}
>
  <Grid container justifyContent="center" spacing={3}>
    
    <Grid item xs={12} sm={12} md={4} lg={4} textAlign="center">
      <Box>
        <img
          src={`${process.env.PUBLIC_URL}/odd-1.png`}
          alt="Quality Products"
          width={50}
        />
        <Typography variant="h6" fontWeight="bold" mt={2}>
          Quality Products
        </Typography>
        <Typography variant="body2" color="textSecondary">
          We ensure the product quality, that is our main goal
        </Typography>
      </Box>
    </Grid>

    <Grid item xs={12} sm={12} md={4} lg={4} textAlign="center">
      <Box>
        <Typography variant="h6" fontWeight="bold" mt={2}>
          We Accept
        </Typography>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
          <img
            src={`${process.env.PUBLIC_URL}/odd-2.webp`}
            alt="GPay"
            width={50}
            style={{ marginRight: '10px' }}
          />
          <img
            src={`${process.env.PUBLIC_URL}/odd-3.png`}
            alt="PhonePe"
            width={50}
            style={{ marginRight: '10px' }}
          />
          <img
            src={`${process.env.PUBLIC_URL}/odd-4.avif`}
            alt="UPI"
            width={50}
          />
        </Box>
      </Box>
    </Grid>

    <Grid item xs={12} sm={12} md={4} lg={4} textAlign="center">
      <Box>
        <img
          src={`${process.env.PUBLIC_URL}/odd-5.png`}
          alt="Return Policy"
          width={50}
        />
        <Typography variant="h6" fontWeight="bold" >
          7-10 Days Return
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Return products within 7-10 days for any product you buy
        </Typography>
      </Box>
    </Grid>
    
  </Grid>
</Box>


<Box sx={{ py: 5 }}>
  <Container sx={{ marginTop: 5 }}>
    <Typography
      variant="h4"
      gutterBottom
      sx={{ fontSize: '25px', textAlign: 'center', marginBottom: '30px' }}
    >
      A WIDE RANGE OF PLANTS & POTS & MUCH MORE
    </Typography>

    <Grid container justifyContent="center">
      <Grid item xs={12} sm={10} md={8} lg={6}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          <Accordion sx={{ width: '100%', marginBottom: '20px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="plants-type-content"
              id="plants-type-header"
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked
                    sx={{
                      color: '#214f38',
                      '&.Mui-checked': {
                        color: '#214f38',
                      },
                    }}
                  />
                }
                label="Plants Type"
              />
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {['Cactus', 'Succulents', 'Air Purifying Plants', 'Hardy Plants', 'Vastu Plants'].map((item) => (
                  <ListItem key={item}>
                    <Link href="#" sx={{ color: '#214f38' }}>
                      {item}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ width: '100%', marginBottom: '20px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="organic-seeds-content"
              id="organic-seeds-header"
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked
                    sx={{
                      color: '#214f38',
                      '&.Mui-checked': {
                        color: '#214f38',
                      },
                    }}
                  />
                }
                label="Organic & Hybrid Seeds"
              />
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {['Summer Flower Seed', 'Winter Flower Seeds', 'Fruit Seeds', 'Vegetable Seeds', 'Herbs Seeds', 'Desi Seeds'].map((item) => (
                  <ListItem key={item}>
                    <Link href="#" sx={{ color: '#214f38' }}>
                      {item}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ width: '100%' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="combo-offers-content"
              id="combo-offers-header"
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked
                    sx={{
                      color: '#214f38',
                      '&.Mui-checked': {
                        color: '#214f38',
                      },
                    }}
                  />
                }
                label="Combo Offers"
              />
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {['Buy 1 Get 1 Free', '20% Off on Second Purchase', 'Family Combo Pack', 'Festive Combo Offers', 'Special Discounts'].map((item) => (
                  <ListItem key={item}>
                    <Link href="#" sx={{ color: '#214f38' }}>
                      {item}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Grid>
    </Grid>
  </Container>
</Box>
<Box sx={{ backgroundColor: '#214f38db', padding: '40px 0', color: '#fff' }}>
  <Container>
    <Grid container spacing={3}>

      <Grid item xs={12} md={4}>
        <Typography variant="h6" gutterBottom>
          About Green Grove
        </Typography>
        <Typography variant="body2" sx={{ color: '#fff', lineHeight: '30px', paddingTop: '20px' }}>
          <strong>Green Grove</strong> is a unit of PLANT ORBIT PVT. LTD. germinated for a promise to make
          ‘green and healthy’ and provides Cheapest and Best Quality of Plants Online.
        </Typography>
      </Grid>

      <Grid item xs={12} md={4}>
        <Typography variant="h6" gutterBottom>
          Get in touch
        </Typography>
        <Typography variant="body2" sx={{ color: '#fff', padding: '20px 0 10px 0' }}>
          <strong>Address:</strong> Haldwani, Nainital, Uttarakhand, India
        </Typography>
        <Typography variant="body2" sx={{ color: '#fff', padding: '0 0 10px 0' }}>
          <strong>Call us for Support:</strong> +91- 6397950266
        </Typography>
        <Typography variant="body2" sx={{ color: '#fff' }}>
          <strong>Email:</strong> greengrove@gmail.com
        </Typography>
      </Grid>

      <Grid item xs={12} md={4}>
        <Typography variant="h6" gutterBottom>
          Quick Links
        </Typography>
        <List sx={{ padding: 0 }}>
          {['Home', 'About us', 'Frequently Asked Questions', 'Contact', 'Track Your Order', 'Privacy Policy', 'Click Here to Download App'].map((link, index) => (
            <ListItem key={index} sx={{ padding: '5px 0' }}>
              <Link href="#" underline="hover" sx={{ color: '#fff', display: 'block' }}>
                {link}
              </Link>
            </ListItem>
          ))}
        </List>
      </Grid>

    </Grid>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '30px',
      }}
    >
      <Link href="#" sx={{ margin: '0 10px', color: '#fff' }}>
        <Twitter />
      </Link>
      <Link href="#" sx={{ margin: '0 10px', color: '#fff' }}>
        <Facebook />
      </Link>
      <Link href="#" sx={{ margin: '0 10px', color: '#fff' }}>
        <Instagram />
      </Link>
      <Link href="#" sx={{ margin: '0 10px', color: '#fff' }}>
        <YouTube />
      </Link>
    </Box>
  </Container>
</Box>

<Box sx={{ backgroundColor: '#214f38' }}>
  <Container>
    <Typography variant="body2" align="center" sx={{ color: '#fff', padding: '20px' }}>
      © 2024, All Rights Reserved By Roshni Chauhan
    </Typography>
  </Container>
</Box>

    </>
  );
};

export default Seed;
