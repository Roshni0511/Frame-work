import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Box, Container,Fab ,List, ListItem, ListItemText, Paper, Link} from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';
import ReplayIcon from '@mui/icons-material/Replay';
import RedeemIcon from '@mui/icons-material/Redeem';
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import { Facebook, Twitter, Instagram, YouTube } from '@mui/icons-material';
import { styled } from '@mui/system';

const comboData = [
  {
    price: "199 Combo",
    images: [
      "https://cdn.shopify.com/s/files/1/0598/1444/5195/files/199.jpg?v=1708510494"
    ]
  },
  {
    price: "299 Combo",
    images: [
      "https://cdn.shopify.com/s/files/1/0598/1444/5195/files/299.jpg?v=1708510494"
    ]
  },
  {
    price: "399 Combo",
    images: [
      "https://cdn.shopify.com/s/files/1/0598/1444/5195/files/399.jpg?v=1708510494"
    ]
  },

  {
    price: "499 Combo",
    images: [
      "https://cdn.shopify.com/s/files/1/0598/1444/5195/files/499.jpg?v=1708510494"
    ]
  },
  {
    price: "599 Combo",
    images: [
      "https://cdn.shopify.com/s/files/1/0598/1444/5195/files/599.jpg?v=1708510494"
    ]
  },
  {
    price: "699 Combo",
    images: [
      "https://cdn.shopify.com/s/files/1/0598/1444/5195/files/699.jpg?v=1708510494"
    ]
  },

  {
    price: "799 Combo",
    images: [
      "https://cdn.shopify.com/s/files/1/0598/1444/5195/files/799.jpg?v=1708510494"
    ]
  },
  {
    price: "899 Combo",
    images: [
      "https://cdn.shopify.com/s/files/1/0598/1444/5195/files/899.jpg?v=1708510494"
    ]
  },
  {
    price: "999 Combo",
    images: [
      "https://cdn.shopify.com/s/files/1/0598/1444/5195/files/999.jpg?v=1708510494"
    ]
  },
];

const AnimatedCard = styled(Card)(({ theme }) => ({
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  border: '2px solid black',
  transition: 'transform 0.4s ease, box-shadow 0.4s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
  },
}));


const FadeInGrid = styled(Grid)(({ theme }) => ({
  opacity: 0,
  animation: 'fadeIn 1s ease forwards',
  '@keyframes fadeIn': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
}));



const ComboOffer = () => {
  return (
<>
    <Box
    sx={{
      position: 'relative',
      height: '400px',
      backgroundImage:
        'url("https://cdn.quicksell.co/-MmU9zyIWbjl5Fis9vMM/products/-NpmeeMmR-bDDB0sBMbG.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'rgba(255, 255, 255, 0.8)',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
      marginBottom:'60px'
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
    Combo offer
    </Typography>
  </Box>

    <Box>
 
 <Box sx={{ backgroundColor: '#f2d6a7', padding: '40px 0' }}>
      <Container>
        <Typography variant="h4" color="green" gutterBottom align="center">
          Combo Offers
        </Typography>
        <Typography variant="body1" gutterBottom align="center" sx={{ fontSize: '20px', padding: '20px 0px', color: '#000000ab' }}>
          Get beautiful combos from our online website. We offer a wide range of plants in combo offers at reasonable costs. May these combos fulfill your expectations with healthy, well-rooted green babies.
          Combo plants include flower, fruit, creeper, and many others from our best online garden store. Buy plants & products in bulbs from our best online garden store to make your home beautiful. These combos pack more plants in a single bundle with more beneficial things.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {comboData.map((combo, index) => (
            <FadeInGrid item xs={12} sm={6} md={4} key={index} sx={{ animationDelay: `${index * 0.2}s` }}>
              <AnimatedCard>
                <Grid container>
                  {combo.images.map((image, imgIndex) => (
                    <Grid item xs={combo.images.length === 1 ? 12 : 6} key={imgIndex}>
                      <CardMedia
                        component="img"
                        image={image}
                        alt={`combo-image-${imgIndex}`}
                        sx={{ width: '100%', height: '100%' }}
                      />
                    </Grid>
                  ))}
                </Grid>
                <CardContent>
                  <Typography variant="h6" color="green" sx={{ lineHeight: '0.6' }}>
                    {combo.price}
                  </Typography>
                </CardContent>
              </AnimatedCard>
            </FadeInGrid>
          ))}
        </Grid>
      </Container>
    </Box>


 <Box sx={{  padding: '40px 0' }}>
  <Container>
 <Grid container spacing={4} justifyContent="center">
   
   <Grid item xs={12} sm={6} md={4}>
     <Card
       sx={{
         textAlign: 'center',
         padding: '20px',
         borderRadius: '16px',
         backgroundColor: '#f5f5f5',
         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
       }}
     >
       <RedeemIcon sx={{ fontSize: 50 }} />
       <CardContent>
         <Typography variant="h6" gutterBottom>
           Quality Products
         </Typography>
         <Typography variant="body2">
           We ensure the product quality that is our main goal
         </Typography>
       </CardContent>
     </Card>
   </Grid>

   <Grid item xs={12} sm={6} md={4}>
     <Card
       sx={{
         textAlign: 'center',
         padding: '20px',
         borderRadius: '16px',
         backgroundColor: '#f5f5f5',
         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
       }}
     >
       <PaymentIcon sx={{ fontSize: 30, margin:'0px' }} />
       <CardContent>
         <Typography variant="h6" gutterBottom>
           We Accept
         </Typography>
         <img
           src="https://th-i.thgim.com/public/business/Industry/rwd1be/article26796387.ece/alternates/FREE_1200/vbk-GooglePay"
           alt="Payment Methods"
           style={{ width: '15%', marginTop: '10px' , paddingRight:"10px"   }}
         />
         <img
           src="https://www.phonepe.com/webstatic/8109/static/PhonePe_vertical-16158be8710408f3561e1d07d01d5d89.png"
           alt="Payment Methods"
           style={{ width: '15%', marginTop: '10px', paddingRight:"10px"   }}
         />
          <img
           src="  https://yt3.googleusercontent.com/5OqL88exM25Ew26whWDOgJwJ1I67kiCZr9TVxwT_2CVK-rxKH4qmL5peq72WgSMw6i_7znsI3Q=s900-c-k-c0x00ffffff-no-rj"
           alt="Payment Methods"
           style={{ width: '15%', marginTop: '10px' , paddingRight:"10px"  }}
         />
          <img
           src="   https://m.economictimes.com/thumb/msid-74960608,width-1200,height-900,resizemode-4,imgsize-49172/upi-twitter.jpg"
           alt="Payment Methods"
           style={{ width: '15%', marginTop: '10px' , paddingRight:"10px"  }}
         />
          <img
           src=" https://4a7efb2d53317100f611-1d7064c4f7b6de25658a4199efb34975.ssl.cf1.rackcdn.com/visa-mastercard-agree-to-give-gas-pumps-break-on-emv-shift-showcase_image-9-p-2335.jpg"
           alt="Payment Methods"
           style={{ width: '15%', marginTop: '10px' , paddingRight:"10px"  }}
         />
        
       
       </CardContent>
     </Card>
   </Grid>

  
   <Grid item xs={12} sm={6} md={4}>
     <Card
       sx={{
         textAlign: 'center',
         padding: '20px',
         borderRadius: '16px',
         backgroundColor: '#f5f5f5',
         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
       }}
     >
       <FindReplaceIcon sx={{ fontSize: 50 }} />
       <CardContent>
         <Typography variant="h6" gutterBottom>
           7-10 Days Return
         </Typography>
         <Typography variant="body2">
           Return product within 7-10 days for any product you buy
         </Typography>
       </CardContent>
     </Card>
   </Grid>
 </Grid>
 </Container>
</Box>

<Box sx={{ backgroundColor: '#214f38db', padding: '40px 0' , color:'#fff'}}>
      <Container>
        <Grid container spacing={3}>
       
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              About Green Grove
            </Typography>
            <Typography variant="body2" sx={{ color: '#fff' ,lineHeight:'30px', paddingTop:'20px'}}>
              <strong>Green Grove</strong> is a unit of PLANT ORBIT PVT. LTD. germinated for a promise to make
              ‘green and healthy’ and provides Cheapest and Best Quality of Plants Online.
            </Typography>
          </Grid>

       
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Get in touch
            </Typography>
            <Typography variant="body2" sx={{ color: '#fff', padding:'20px 0 10px 0' }}>
              <strong>Address:</strong> Haldwani, Nainital, Uttarakhand, India
            </Typography>
            <Typography variant="body2" sx={{ color: '#fff', padding:'0 0 10px 0' }}>
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
            <Link href="#" underline="hover" sx={{ display: 'block', color: '#fff' ,padding:'20px 0 7px 0' }}>
            <li>Home</li>  
            </Link>
            <Link href="#" underline="hover" sx={{ display: 'block', color: '#fff',padding:'0 0 7px 0'  }}>
            <li>  About us</li>
            </Link>
            <Link href="#" underline="hover" sx={{ display: 'block', color: '#fff',padding:'0 0 7px 0'  }}>
              <li>Frequently Asked Questions</li>
            </Link>
            <Link href="#" underline="hover" sx={{ display: 'block', color: '#fff',padding:'0 0 7px 0'  }}>
              <li>Contact</li>
            </Link>
            <Link href="#" underline="hover" sx={{ display: 'block', color: '#fff',padding:'0 0 7px 0'  }}>
              <li>Track Your Order</li>
            </Link>
            <Link href="#" underline="hover" sx={{ display: 'block', color: '#fff' ,padding:'0 0 7px 0' }}>
             <li> Privacy Policy</li>
            </Link>
            <Link href="#" underline="hover" sx={{ display: 'block', color: '#fff' ,padding:'0 0 7px 0' }}>
                <li>    Click Here to Download App</li>
            </Link>
            
          </Grid>
          
        </Grid>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '30px',
          }}
        >
          <Link href="#"  sx={{ margin: '0 10px', color: '#fff' }}>
            <Twitter />
          </Link>
          <Link href="#"  sx={{ margin: '0 10px', color: '#fff' }}>
            <Facebook />
          </Link>
          <Link href="#"  sx={{ margin: '0 10px', color: '#fff' }}>
            <Instagram />
          </Link>
          <Link href="#" sx={{ margin: '0 10px', color: '#fff' }}>
            <YouTube />
          </Link>
        </Box>
</Container>
</Box>
       
        <Box sx={{backgroundColor:'#214f38'}}>
          <Container>
        

        <Typography variant="body2" align="center" sx={{ color: '#fff', padding:'20px' }}>
          © 2024,All Rights Reserved By Roshni Chauhan
        </Typography>
      </Container>
    </Box>
    </Box>

</>
  );
};

export default ComboOffer;
