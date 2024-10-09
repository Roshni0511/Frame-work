import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, Chip,Link,Container,ListItem,List } from '@mui/material';
import { Facebook, Twitter, Instagram, YouTube } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Accordion,AccordionSummary, AccordionDetails, Checkbox, FormControlLabel,  } from '@mui/material';

const services = [
  {
    title: 'Cleaning Ocean',
    description: 'Alternative innovation to ethical network environmental whiteboard',
    imageUrl: `${process.env.PUBLIC_URL}/ser-1.png`,
  },
  {
    title: 'Dust Recycling',
    description: 'Alternative innovation to ethical network environmental whiteboard',
    imageUrl: `${process.env.PUBLIC_URL}/ser-2.png`,
  },
  {
    title: 'Plant Seedlings',
    description: 'Alternative innovation to ethical network environmental whiteboard',
    imageUrl: `${process.env.PUBLIC_URL}/ser-3.png`,
  },
  {
    title: 'Carbon Offsetting',
    description: 'Alternative innovation to ethical network environmental whiteboard',
    imageUrl: `${process.env.PUBLIC_URL}/ser-4.png`,
  },
  {
    title: 'Renewable Energy',
    description: 'Alternative innovation to ethical network environmental whiteboard',
    imageUrl: `${process.env.PUBLIC_URL}/ser-5.png`,
  },
  {
    title: 'Global Warming',
    description: 'Alternative innovation to ethical network environmental whiteboard',
    imageUrl: `${process.env.PUBLIC_URL}/ser-6.png`,
  },
];


const tools = [
    {
      title: 'Multi-Color Decorative Pebble Stones (100 g)',
      price: '20.00',
      imageUrl: `${process.env.PUBLIC_URL}/tools-1.webp`,
      available: true,
    },
    {
      title: 'Small Green Pebbles (25 g)',
      price: '7.00',
      imageUrl: `${process.env.PUBLIC_URL}/tools-2.webp`,
      available: true,
    },
    {
      title: 'Activated Charcoal',
      price: '10.00',
      imageUrl:`${process.env.PUBLIC_URL}/tools-3.webp`,
      available: false,  // Sold out product
    },
    {
      title: 'Light Blue Decorative Pebble Stones (100 g)',
      price: '20.00',
      imageUrl: `${process.env.PUBLIC_URL}/tools-4.webp`,
      available: true,
    },
    {
      title: 'Orange Decorative Pebble Stones (100 g)',
      price: '20.00',
      imageUrl: `${process.env.PUBLIC_URL}/tools-5.webp`,
      available: true,
    },
    {
      title: 'Small Mustard Yellow Pebbles (50 g)',
      price: '15.00',
      imageUrl: `${process.env.PUBLIC_URL}/tools-6.webp`,
      available: true,
    },
    {
      title: 'Small Black Pebbles (25 g)',
      price: '7.00',
      imageUrl: `${process.env.PUBLIC_URL}/tools-7.webp`,
      available: true,
    },
    {
      title: 'Small Green Pebbles (50 g)',
      price: '15.00',
      imageUrl:`${process.env.PUBLIC_URL}/tools-8.webp`,
      available: true,
    },
    {
        title: 'Spray Bottle Nozzle',
        price: '69',
        imageUrl: `${process.env.PUBLIC_URL}/tools-9.webp`,
        available: true,
      },
      {
        title: 'GARDEN TAGS ( SET OF 10 )',
        price: '160.00',
        imageUrl:`${process.env.PUBLIC_URL}/tools-10.webp`,
        available: false, 
      },
      {
        title: 'GARDEN TAGS 11 CM ( SET OF 2 )',
        price: '19.00',
        imageUrl: `${process.env.PUBLIC_URL}/tools-11.jpg`,
        available: true,
      },
      {
        title: 'Wood Ash',
        price: '10.00',
        imageUrl: `${process.env.PUBLIC_URL}/tools-12.webp`,
        available: false,  
      },
  ];

const GardenTools = () => {
  return (
    <>
   
      <Box
        sx={{
          position: 'relative',
          height: '400px',
          backgroundImage:
          `url(${process.env.PUBLIC_URL}/gardenslide.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'rgba(255, 255, 255, 0.8)',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
        }}
      >
       
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1,
          }}
        />
        <Typography
          variant="h3"
          sx={{
            color: 'rgba(255, 255, 255, 0.9)',
            fontWeight: 'bold',
            textAlign: 'center',
            zIndex: 2,
          }}
        >
          Garden Tools
        </Typography>
      </Box>

   
      <Box sx={{ padding: '40px', backgroundColor: '#f9f9f9' }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' , padding:'15px', fontSize:'28px'}}>
          Echofy Provide Environment Best Leading Services
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="170"
                  image={service.imageUrl}
                  alt={service.title}
                  sx={{ borderRadius: '10px' }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ marginLeft: 1, fontSize: '19px', fontWeight: '600' }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ marginLeft: 1, marginBottom: '10px' }}
                  >
                    {service.description}
                  </Typography>
                  <hr />
                  <Button
                    size="small"
                    sx={{
                      marginTop: '4px',
                      color: 'black',
                      fontWeight: 'bold',
                      textTransform: 'none',
                      '&:hover': {
                        color: 'green',
                      },
                    }}
                  >
                    Discover More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>




      <Box sx={{ padding: '40px', backgroundColor: '#f9f9f9' }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' , padding:'15px', fontSize:'28px'}}>
          Best Seller
        </Typography>
      <Grid container spacing={4}>
        {tools.map((tool, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
              }}
            >
              <Box position="relative">
                <CardMedia
                  component="img"
                  height="200"
                  image={tool.imageUrl}
                  alt={tool.title}
                />
                {!tool.available && (
                  <Chip
                    label="Sold out"
                    color="default"
                    sx={{
                      position: 'absolute',
                      top: 8,
                      left: 8,
                      backgroundColor: 'black',
                      color: 'white',
                      fontSize: '12px',
                    }}
                  />
                )}
              </Box>
              <CardContent sx={{ flexGrow: 1 , backgroundColor: '#f8dcaab8',}}>
                <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {tool.title}
                </Typography>
                <Typography variant="h6" sx={{ color: '#4caf50', fontWeight: 'bold' }}>
                  Rs. {tool.price}
                </Typography>
              </CardContent>
              <Button
                variant="contained"
                disabled={!tool.available}
                sx={{
                  backgroundColor: tool.available ? '#2e7d32' : '#cfcfcf',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: tool.available ? '#1b5e20' : '#cfcfcf',
                  },
                }}
              >
                {tool.available ? 'Add to cart' : 'Sold out'}
              </Button>
            </Card>
          </Grid>
        ))}
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
          src="https://cdn-icons-png.flaticon.com/512/4313/4313500.png"
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
            src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/gpay_1200x768.jpeg?VersionId=6CKJE5JkttRHIed4nOPNM4MJDqS004Dc"
            alt="GPay"
            width={50}
            style={{ marginRight: '10px' }}
          />
          <img
            src="https://pbs.twimg.com/card_img/1837061334518607872/y2Jvu92L?format=jpg&name=large"
            alt="PhonePe"
            width={50}
            style={{ marginRight: '10px' }}
          />
          <img
            src="https://cdn.zeebiz.com/sites/default/files/2024/01/03/274966-upigpay.jpg"
            alt="UPI"
            width={50}
          />
        </Box>
      </Box>
    </Grid>

    <Grid item xs={12} sm={12} md={4} lg={4} textAlign="center">
      <Box>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3197/3197666.png"
          alt="Return Policy"
          width={50}
        />
        <Typography variant="h6" fontWeight="bold" mt={2}>
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

export default GardenTools;
