import React, { useState } from 'react'
import { Box,Typography,LinkCard, CardContent,Card,Link} from '@mui/material';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { BsGeoAlt } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Facebook, Twitter, Instagram, YouTube } from '@mui/icons-material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
 
    Object.keys(formData).forEach(key => {
      if (!formData[key].trim()) {
        newErrors[key] = 'This field is required';
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
    
      console.log('Form submitted:', formData);
     
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }
  };
  return (
    <>
     <Box
        sx={{
           
                position: 'relative',
                height: '400px',
                backgroundImage:
                `url(${process.env.PUBLIC_URL}/contactslide.webp)`,
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
         <Typography variant="h3"   sx={{
          color: 'rgba(255, 255, 255, 0.9)',
          fontWeight: 'bold',
          textAlign: 'center',
          zIndex: 2,
        }}>
       Contact Us
      </Typography>
      </Box>


      <Box sx={{ padding: "50px 0" }}>
  <Container fixed>
    <Box sx={{ backgroundColor: '#4CAF50', p: 4, borderRadius: '10px' }}>
      <Grid container spacing={3} justifyContent="center">
       
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none', textAlign: 'center' ,color: "#fff", fontSize:'30px'}}>
            <CardContent>
              <BsGeoAlt sx={{ fontSize: 50, color: 'white' }} />
             
              <Typography variant="h6" sx={{ color: 'white', mt: 2 }}>Office Address</Typography>
              <Typography variant="body2" sx={{ color: 'white', mt: 1 }}>
                200 Navana ST, West end Right
                <br />
                Sandigo, USA
              </Typography>
            </CardContent>
          </Card>
        </Grid>

      
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none', textAlign: 'center' ,color: "#fff", fontSize:'30px'}}>
            <CardContent>
              <IoCallOutline sx={{ fontSize: 50, color: 'white' }} />
              <Typography variant="h6" sx={{ color: 'white', mt: 2 }}>Make A Call</Typography>
              <Typography variant="body2" sx={{ color: 'white', mt: 1 }}>
                +880 172 6546 020
                <br />
                +880 172 6546 020
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none', textAlign: 'center',color: "#fff" , fontSize:'30px'}}>
            <CardContent>
              <TfiEmail sx={{ fontSize: 50, color: 'white' }} />
              <Typography variant="h6" sx={{ color: 'white', mt: 2 }}>24/7 Support</Typography>
              <Typography variant="body2" sx={{ color: 'white', mt: 1 }}>
                example@gmail.com
                <br />
                info@gmail.com
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>

  
    <Grid container spacing={2} sx={{ paddingTop: "50px" }}>
      
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Item sx={{ boxShadow: "none" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
            frameborder="0"
            width={"100%"}
            height={"380px"}
            allowFullScreen
          />
        </Item>
      </Grid>

      
     
      <Grid item xs={12} sm={12} md={6} lg={6}>
      <Box sx={{ boxShadow: '0px 2px 15px rgba(0, 0, 0, 0.1)', padding: "30px" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Your Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              error={!!errors.phone}
              helperText={errors.phone}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              error={!!errors.subject}
              helperText={errors.subject}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              error={!!errors.message}
              helperText={errors.message}
              required
            />
          </Grid>
        </Grid>

        <Stack spacing={2} direction="row" sx={{ justifyContent: "center", marginTop: '20px' }}>
          <Button
            type="submit"
            variant="contained"
            sx={{ borderRadius: "40px", backgroundColor: '#214f38' }}
          >
            Send Message
          </Button>
        </Stack>
      </form>
    </Box>
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
     
    </>
  )
}

export default Contacts
