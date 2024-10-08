import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Container, Fab ,List, ListItem, ListItemText, Paper} from '@mui/material';
import { ShoppingCart, AccountCircle, Search, WhatsApp, Star } from '@mui/icons-material';
import {   Grid, Avatar } from '@mui/material';
import {  Card, CardContent, CardMedia, Badge,Chip } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import VerifiedIcon from '@mui/icons-material/Verified';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons'; 
import AutorenewIcon from '@mui/icons-material/Autorenew';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Accordion,AccordionSummary, AccordionDetails, Checkbox, FormControlLabel,  Link,} from '@mui/material';
import { Facebook, Twitter, Instagram, YouTube } from '@mui/icons-material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';






const items = [
    { name: 'Succulents', image: `${process.env.PUBLIC_URL}/s1.webp`, link: '#' },
    { name: 'Cactus', image:  `${process.env.PUBLIC_URL}/s2.webp`, link: '#' },
    { name: 'Miniatures', image:  `${process.env.PUBLIC_URL}/s3.webp`, link: '#' },
    { name: 'Pots & Planters', image:  `${process.env.PUBLIC_URL}/s4.webp`, link: '#' },
    { name: 'Seeds', image:  `${process.env.PUBLIC_URL}/s5.jpg`, link: '#' },
    { name: 'Gardening essentials', image:  `${process.env.PUBLIC_URL}/s6.webp`, link: '#' },
  ];

  const products = [
    
    {
      id: 1,
      name: "Black Laxmi Kamal (Bare Rooted)",
      image: "	https://plantorbit.com/cdn/shop/files/image_rHy.webp?v=1710848625",
      hoverImage: "https://plantorbit.com/cdn/shop/files/image_HPR.webp?v=1710848625&width=360",
      oldPrice: 110,
      price: 39,
      discount: 64,
      rating: 4.5,
      reviews: 15,
      isAvailable: true,
      isSale: true,
      
    },
    
    {
      id: 2,
      name: "Variegated String Of Pearls (Bare Rooted) ",
      image: "https://plantorbit.com/cdn/shop/files/image_pgz_1.webp?v=1710862368",
      hoverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLzkcg9W_KJObEbNuAyITAMKx27NYgXxu-NQ&s",
      oldPrice: 119,
      price: 69,
      discount: 42,
      rating: 4.0,
      reviews: 2,
      isAvailable: true,
      isSale: true,
    },
    {
      id: 3,
      name: "Crassula Jade plant (Rubber plant)",
      image: "https://plantorbit.com/cdn/shop/files/image_Ha4.webp?v=1710853595&width=713",
      hoverImage:"https://kyari.co/cdn/shop/articles/pepper-face-plant-small-pot_2_1.jpg?v=1678096199&width=480",
      oldPrice: 110,
      price: 69,
      discount: 37,
      rating: 4.8,
      reviews: 1,
      isAvailable: true,
      isSale: true,
    },
    {
      id: 4,
      name: "Othonna capensis - Ruby Necklace",
      image: "	https://plantorbit.com/cdn/shop/products/Othonnacapensis-RubyNecklace.png?v=1717496041",
      hoverImage:" https://plantorbit.com/cdn/shop/files/image_jHl.webp?v=1717496041&width=360",
      oldPrice: 110,
      price: 69,
      discount: 37,
      rating: 4.3,
      reviews: 3,
      isAvailable: false,
      isSale: false,
    },
    {
        id: 5,
        name: " Echeveria Peacockii  - Blue Bird (Bare Rooted)",
        image: "	https://plantorbit.com/cdn/shop/files/image_bDy.webp?v=1710862602",
        hoverImage:"  https://plantorbit.com/cdn/shop/files/image_QmR.webp?v=1710862602&width=360",
      
        oldPrice: 199,
        price: 99,
        discount: 50,
        rating: 4.3,
        reviews: 5,
        isAvailable: true,
        isSale: true,
      },
      {
        id: 6,
        name: " Echinopsis  Peanut Cactus (Bare Rooted)  ",
        image: "	https://plantorbit.com/cdn/shop/files/image_Lrz.webp?v=1710859926",
        hoverImage:"https://cdn11.bigcommerce.com/s-oqm1pc/images/stencil/1280x1280/products/7006/29207/peanut_cactus__37076.1651160216.740.740__15880.1716421616.jpg?c=3",
        oldPrice: 199,
        price: 99,
        discount: 50,
        rating: 5,
        reviews: 1,
        isAvailable: true,
        isSale: true,
      },
      {
        id: 7,
        name: " Sanseveria Hybrid Air purifier (Bare Rooted)",
        image: "	https://plantorbit.com/cdn/shop/files/Sanseveriahybrid.webp?v=1711179316",
        hoverImage:" 	https://plantorbit.com/cdn/shop/files/ok_32.png?v=1711179316&width=360",
        oldPrice: 99,
        price: 69,
        discount: 30,
        rating: 3,
        reviews: 3,
        isAvailable: true,
        isSale: true,
      },
      {
        id: 8,
        name: " VARIEGATED JADE PLANT (BARE ROOTED)",
        image: "	https://plantorbit.com/cdn/shop/files/image_-OC.webp?v=1710870535",
        hoverImage:"	https://plantorbit.com/cdn/shop/files/ok.png?v=1710870535&width=360",
        oldPrice: 250,
        price: 149,
        discount: 40,
        rating: 4.3,
        reviews: 3,
        isAvailable: true,
        isSale: true,
      },
  ];
  
  
const seller = [
    {
      id: 1,
      name: "Pink Syngonium in 2 inches Netpot",
      image: "	https://plantorbit.com/cdn/shop/files/image_KbO.webp?v=1715068090&width=360",
      oldPrice: 199,
      price: 89,
      discount: 55,
      rating: 4.5,
      reviews: 12,
      isSale: true,
    },
    {
      id: 2,
      name: "Syngonium 'Pink Schott', Syngonium Plant",
      image: "https://plantorbit.com/cdn/shop/files/image_3Bh_1.webp?v=1723108008&width=360",
      oldPrice: 0, 
      price: 79,
      discount: 0, 
            rating: 5,
      reviews: 6,
      isSale: false,
    },
    {
      id: 3,
      name: "The Four Seasons Syngonium Mickey Pink",
      image: "	https://plantorbit.com/cdn/shop/files/image_Obf.webp?v=1716538487&width=360",
      oldPrice: 110,
      price: 69,
      discount: 10,
      rating: 5,
      reviews: 2,
      isSale: false,
    },
    {
      id: 4,
      name: "Alocasia Cucullata in Netpot",
      image: "https://plantorbit.com/cdn/shop/files/image_Ui9.webp?v=1715070657&width=360",
      oldPrice: 199,
      price: 69,
      discount: 65,
      rating: 4.5,
      reviews: 3,
      isSale: true,
    },

    {
      id: 5,
      name: "The Four Seasons Syngonium Mickey Pink",
      image: "	https://plantorbit.com/cdn/shop/files/image_LL5.webp?v=1716543670&width=360",
      oldPrice: 110,
      price: 69,
      discount: 10,
      rating: 5,
      reviews: 2,
      isSale: false,
    },
    {
      id: 6,
      name: "The Four Seasons Syngonium Mickey Pink",
      image: "	https://plantorbit.com/cdn/shop/files/image_ucw.png?v=1723106539&width=360",
      oldPrice: 110,
      price: 69,
      discount: 10,
      rating: 5,
      reviews: 2,
      isSale: false,
    },
    {
      id: 7,
      name: "Alocasia Cucullata in Netpot",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/9/448881706/NR/XN/JF/69408943/brazilian-lucky-wood.png",
      oldPrice: 199,
      price: 69,
      discount: 65,
      rating: 4.5,
      reviews: 3,
      isSale: true,
    },
    {
      id: 8,
      name: "The Four Seasons Syngonium Mickey Pink",
      image: "	https://plantorbit.com/cdn/shop/files/ModernNeutralDaylightSavingTimeClockInstagramPost.png?v=1726979191",
      oldPrice: 110,
      price: 69,
      discount: 10,
      rating: 5,
      reviews: 2,
      isSale: false,
    },
  ];
  

  const blogPosts = [
    {
      title: "Why Plant Orbit is the Best Place to Buy Succulents",
      date: "March 31, 2024",
      content: "In the world to find  best place to buy succulents online, succulents have emerged as the darlings of the digital green scene. These Beautiful pleasing plants have captured the hearts of plant enthusiasts...",
      image: "https://plantorbit.com/cdn/shop/articles/image_-OC.webp?v=1711908494",
    },
    {
      title: "How to care for string of pearls",
      date: "March 4, 2023",
      content: "String of pearls grow and care : String of pearls (Senecio rowleyanus) is a popular and low-maintenance trailing succulent that is native to South Africa. It is known for its...",
      image: "https://plantorbit.com/cdn/shop/articles/31TngpuwIIL.jpg?v=1677910841",
    },
    {
      title: "How to propagate echeveria",
      date: "March 4, 2023",
      content: "String of pearls grow and care : String of pearls (Senecio rowleyanus) is a popular and low-maintenance trailing succulent that is native to South Africa. It is known for its...",
      image: "	https://plantorbit.com/cdn/shop/articles/echeveria_elegans_1200x1200_1.webp?v=1708258369&width=720",
    },
    {
      title: "How to grow succulents in summer",
      date: "March 4, 2023",
      content: "Succulents are known for their ability to thrive in dry and arid conditions, making them a popular choice for summer gardens. Here are some tips for growing succulents in the...",
      image: "https://plantorbit.com/cdn/shop/articles/Untitled_design_2.png?v=1708258195&width=720",
    },
  ];


  const Miniatures = [
    {
      id: 1,
      name: ' Pin Mushrooms Miniature',
      price: 20,
      originalPrice: 40,
      discount: 50,
      image: '	https://plantorbit.com/cdn/shop/files/Untitleddesign_14.png?v=1712570734&width=360', 
      isSoldOut: false,
      onSale: true,
    },
    {
      id: 2,
      name: 'Lady Bugs Miniature',
      price: 10,
      originalPrice: null,
      discount: null,
      image: '	https://plantorbit.com/cdn/shop/files/image_Hna.webp?v=1712571266&width=360',
      isSoldOut: false,
      onSale: false,
    },
    {
      id: 3,
      name: 'Ladybug Miniatures',
      price: 12,
      originalPrice: null,
      discount: null,
      image: '	https://plantorbit.com/cdn/shop/files/image_cO3.webp?v=1712570995&width=360', 
      isSoldOut: true,
      onSale: false,
    },
    {
      id: 4,
      name: 'Windmill Miniature',
      price: 40,
      originalPrice: null,
      discount: null,
      image: '	https://plantorbit.com/cdn/shop/files/image_SSX.webp?v=1712572225&width=360', 
      isSoldOut: false,
      onSale: false,
    },
    {
      id: 5,
      name: ' SWAN MINIATURE',
      price: 45,
      originalPrice: null,
      discount: null,
      image: '	https://plantorbit.com/cdn/shop/files/image_RAg.webp?v=1716015767&width=360', 
      isSoldOut: true,
      onSale: false,
    },
    {
      id: 6,
      name: 'SMALL PONE  MINIATURE ',
      price: 50,
      originalPrice: null,
      discount: null,
      image: '		https://plantorbit.com/cdn/shop/files/image_1vo.webp?v=1712571139&width=360',
      isSoldOut: false,
      onSale: false,
    },
    {
      id: 7,
      name: 'WOODEN POST MINIATURE',
      price: 30,
      originalPrice: null,
      discount: null,
      image: '	https://plantorbit.com/cdn/shop/files/image_ps8.webp?v=1712573675&width=360', 
      isSoldOut: true,
      onSale: false,
    },
    {
      id: 8,
      name: '    HOUSE MINIATURE Set Of 1  ',
      price: 100,
      originalPrice: null,
      discount: null,
      image: '	https://plantorbit.com/cdn/shop/files/image_tBO.webp?v=1715757458&width=360',
      isSoldOut: false,
      onSale: false,
    },
  ];

  const careTips = [
    "1. After receiving the plants open the box 📦 as soon as possible.",
    "2. Air dry the plants for 2-3 hours in fresh air.",
    "3. Plant in well-drained soil (30% sand + 30% soil + 20%   vermicompost + 20% perlite).",
    "4. Water plants after 2-3 days and don’t give direct sunlight to newly planted succulents for at least 10 days.",
   
  ];

  const features = [
    {
      icon:  <FontAwesomeIcon icon={faTruckFast} style={{ marginRight: '8px' , fontSize:'50px'}} />,
      
      title: 'Secure Shipping',
      description: 'Diligent care taken to deliver healthy plants',
    },
    {
      icon: <VerifiedIcon sx={{ fontSize: 50 }} />,
      title: 'Quality Products',
      description: 'We ensure the product quality that is our main goal',
    },
    {
      icon: <AutorenewIcon sx={{ fontSize: 50 }} />,
      title: '7-10 Days Return',
      description: 'Return   7-10 days for  product you buy',
    },
    {
      icon: <HeadsetMicIcon sx={{ fontSize: 50 }} />,
      title: 'Online Support',
      description: 'We ensure the  quality that you can trust easily',
    },
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  
const FirstPage = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <>
     
<Box
      sx={{
        position: 'relative',
        height: { xs: '300px', sm: '400px', md: '400px', lg: '400px' }, 
        backgroundImage:
          `url(${process.env.PUBLIC_URL}/firstalider.webp)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        padding: { xs: 2, sm: 4, md: 6 }, 
      }}
    >
    
    </Box>

      
     



      {/* */}

      <Box sx={{ py: 5, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Shop Our Green Delights
      </Typography>

      <Grid
        container
        spacing={2}
        sx={{
          justifyContent: 'center', 
          py: 2,
        }}
      >
        {items.map((item, index) => (
          <Grid
            key={index}
            item
            xs={6} 
            sm={4} 
            md={2} 
            sx={{ textAlign: 'center' }}
          >
            <Avatar
              src={item.image}
              alt={item.name}
              sx={{
                width: 120,
                height: 120,
                margin: '0 auto',
                mb: 2,
              }}
            />
            <Typography variant="subtitle1" fontWeight="bold">
              {item.name}
            </Typography>
            <Button
              variant="text"
              endIcon={<span style={{ fontSize: '1.2rem' }}>→</span>}
              sx={{ textTransform: 'none', mt: 1, color: '#2e2a39' }}
            >
              View All
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>



{/*  */}

<Box sx={{ py: 4, textAlign: 'center' }}>
      <Container>
        <Typography variant="h4" gutterBottom padding={'0px 0px 30px 0px'}>
          Our Bestsellers
        </Typography>

        <Grid container spacing={3} justifyContent={{ xs: 'center', sm: 'flex-start' }}> 
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <Card sx={{ maxWidth: 345, position: 'relative', margin: '0 auto', }}> 
                {product.isSale && (
                  <Badge
                    sx={{ position: 'absolute', top: 16, left: 16, margin: '4px 10px' }}
                    badgeContent="Sale"
                    color="success"
                  />
                )}
                {!product.isAvailable && (
                  <Badge
                    sx={{ position: 'absolute', top: 16, right: 16, margin: '4px 20px' }}
                    badgeContent="Soldout"
                    color="error"
                  />
                )}

                <CardMedia
                  component="img"
                  height="140"
                  image={hoveredIndex === index ? product.hoverImage : product.image}
                  alt={product.name}
                  sx={{
                    height: '100%',
                    transition: 'transform 0.7s ease, opacity 0.6s ease',
                    transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)',
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />

                <CardContent>
                  <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: '17px' }}>
                    {product.name}
                  </Typography>

                  <Typography variant="body2" color="textSecondary" sx={{ color: '#214f38' }}>
                    {'★'.repeat(Math.floor(product.rating))}
                    {'☆'.repeat(5 - Math.floor(product.rating))} ({product.reviews})
                  </Typography>

                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ textDecoration: 'line-through', display: 'inline-block', mr: 1 }}
                  >
                    Rs. {product.oldPrice.toFixed(2)}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="textPrimary"
                    sx={{ display: 'inline-block', mr: 1, fontWeight: '600', color: '#214f38' }}
                  >
                    Rs. {product.price.toFixed(2)}
                  </Typography>

                  <Typography variant="body2" color="error" sx={{ display: 'inline-block', fontWeight: '600' }}>
                    {product.discount}% off
                  </Typography>

                  {product.isAvailable ? (
                    <Button
                      variant="contained"
                      fullWidth
                      startIcon={<ShoppingCartIcon />}
                      sx={{
                        backgroundColor: '#214f38',
                        color: 'white',
                        mt: 2,
                      }}
                    >
                      Add to cart
                    </Button>
                  ) : (
                    <Button variant="contained" color="secondary" fullWidth disabled sx={{ mt: 2 }}>
                      Sold out
                    </Button>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>

{/* {} */}



<Box sx={{ padding: '3rem', backgroundColor: '#f5f5f5', textAlign: 'left', marginBottom: '40px' }}>
  <Grid container spacing={4} alignItems="center" sx={{ justifyContent: 'center' }}>
    
    <Grid item xs={12} md={6}>
      <Typography variant="h6" sx={{ color: '#f4a500', fontFamily: 'cursive', fontStyle: 'italic', paddingBottom: '20px' }}>
        About Company
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
        Professional Garden Care
      </Typography>
      <Typography variant="body1" paragraph>
        We provide full services in irrigation, landscape, maintenance, and professional tree care management.
      </Typography>
      <Typography variant="body2" paragraph>
        A 5-star rated firm that focuses on offering quality plants at reasonable prices. Our garden care team is
        dedicated to exceeding customer expectations.
      </Typography>
      <Button variant="contained" color="success" size="large">
        Learn More
      </Button>
    </Grid>

    <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}> 
      <Avatar
        alt="Gardening"
        src={'https://images.ctfassets.net/i3tkg7dt3kro/kcUqtWUlsa9S7TwV9J9z5/ec199a3e4c3212e4fecd8d839ff48e86/top-plant-care-tips-15-1.jpg'}
        sx={{
          width: { xs: 350, md: 400 }, 
          height: { xs: 350, md: 400 }, 
          borderRadius: '50%',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        }}
      />
    </Grid>
  </Grid>
</Box>

    {/* {  } */}
    <Box
  sx={{
    py: 5,
    textAlign: 'center',
    backgroundColor: '#f8dcaab8',
    clipPath: 'ellipse(184% 180% at 49% 180%)', // Default for larger screens
    animation: 'fadeIn 2s ease-in-out',
    '@keyframes fadeIn': {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
    '@media (max-width: 768px)': {
      clipPath: 'none', // Remove clipPath for screens up to 768px
    },
  }}
>
  <Container>
    <Typography variant="h4" gutterBottom sx={{ paddingBottom: '20px' }}>
      Newly Launched
    </Typography>
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
              height:'100%',
              boxShadow: 3,
              overflow: 'hidden',
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
              },
            }}
          >
            {product.isSale && (
              <Typography
                sx={{
                  position: 'absolute',
                  top: 16,
                  left: 16,
                  padding: '5px 10px',
                  borderRadius: 12,
                  fontWeight: 600,
                }}
              >
                Sale
              </Typography>
            )}
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
                Add to cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
</Box>




    {/* { } */}


<Box sx={{py: 6}}>

    <Container sx={{ marginTop: 5 }}>
      <Typography variant="h4" gutterBottom sx={{textAlign:'center', paddingBottom:'20px'}}>
        Blog Posts
      </Typography>
      <Grid container spacing={4}>
        {blogPosts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' , borderRadius:'15px'}}>
              <CardMedia
                component="img"
                height="200"
                image={post.image}
                alt={post.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{fontSize:'17px', padding:'15px 0px'}}>
                  {post.title.length > 25 ? `${post.title.substring(0, 25)}...` : post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{textAlign:'center', paddingBottom:'10px'}}>
                  {post.date}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{fontSize:'14px' ,lineHeight:'30px'}}>
                  {post.content.length > 200 ? `${post.content.substring(0, 200)}...` : post.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
</Box>


    {/* { } */}
    <Box
  sx={{
    py: 6,
    backgroundColor: '#f8dcaab8',
    clipPath: {
      xs: 'none', 
      sm: 'ellipse(184% 180% at 49% 180%)', 
    },
  }}
>
  <Container sx={{ marginTop: 1 }}>
    <Typography variant="h4" align="center" gutterBottom sx={{ paddingBottom: '15px' }}>
      Cute Miniatures
    </Typography>

    <Slider {...settings}>
      {Miniatures.map((item) => (
        <Box key={item.id} sx={{ padding: '0 10px', width: { xs: '100%', sm: '75%', md: '50%', lg:'25%' } }}> 
          <Card
            sx={{
              position: 'relative',
              borderRadius: 3,
              margin: '0px 10px',
              marginBottom: '20px',
              height: '100%', 
            }}
          >
            <CardMedia
              component="img"
              height="200" 
              image={item.image}
              alt={item.name}
              sx={{ objectFit: 'cover' }} 
            />
            {item.onSale && (
              <Chip
                label="Sale"
                color="warning"
                size="small"
                sx={{ position: 'absolute', top: 10, left: 10 }}
              />
            )}
            {item.isSoldOut && (
              <Chip
                label="Sold out"
                color="default"
                size="small"
                sx={{ position: 'absolute', top: 10, right: 10 }}
              />
            )}
            <CardContent>
              <Typography variant="h6" component="div" sx={{ fontSize: '14px' }}>
                {item.name}
              </Typography>
              {item.onSale ? (
                <Box>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ textDecoration: 'line-through', fontSize: '14px' }}
                  >
                    Rs. {item.originalPrice}
                  </Typography>
                  <Typography variant="h6" color="error" sx={{ fontSize: '14px' }}>
                    Rs. {item.price} {item.discount}% off
                  </Typography>
                </Box>
              ) : (
                <Typography variant="h6" sx={{ fontSize: '14px', padding: '10px' }}>
                  Rs. {item.price}
                </Typography>
              )}
              <Button
                variant="contained"
                color={item.isSoldOut ? 'inherit' : 'success'}
                disabled={item.isSoldOut}
                fullWidth
                sx={{ mt: 2, backgroundColor: '#214f38' }}
              >
                {item.isSoldOut ? 'Sold out' : 'Add to cart'}
              </Button>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Slider>
  </Container>
</Box>


  {/* {} */}

<Box sx={{pb: 10}}>
    <Container sx={{ marginTop: 5 }}>
      <Grid container spacing={0}> 
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)', borderRadius:'10px 0 0 10px',
            
           }}> 
            <CardMedia
              component="img"
              height="385"
              image="	https://plantorbit.com/cdn/shop/files/Untitled.jpg?v=1712036133" 
              alt="Plant care image"
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 6, backgroundColor: '#fce8d5',  borderRadius:'0 10px  10px 0' }}>
            <Typography variant="h5" gutterBottom>
              Care tips
            </Typography>
            <List>
              {careTips.map((tip, index) => (
                <ListItem key={index} sx={{ display: 'list-item', padding: "2px", fontSize:'14px' }}>
                  <ListItemText primary={tip} sx={{fontSize:'14px'}}/>
                </ListItem>
              ))}
            </List>
            <Typography variant="body2" color="textSecondary">
              <strong>Note:</strong> Always water succulents when the top layer of soil feels dry in the roots of the plant rather than the leaves.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
</Box>

{/* {} */}

<Box sx={{ backgroundColor: '#254027', py: 5 }}>
      <Container>
        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          sx={{ color: 'white', marginBottom: 4 }}
        >
          What Makes Us Different?
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={3} key={index}>
              <Paper
                elevation={3}
                sx={{
                  padding: 3,
                  textAlign: 'center',
                  borderRadius: 2,
                }}
              >
                <Box sx={{ color: '#000', marginBottom: 2, height:'100%' }}>{feature.icon}</Box>
                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>

    {/* {} */}

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


{/* {} */}

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

export default FirstPage;
