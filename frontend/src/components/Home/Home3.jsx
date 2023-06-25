import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import BoxContainer from '../BoxContainer'; 
import logo from '../../assets/images/logo.png' 
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useSelector } from 'react-redux'; 
import mobiles from '../../assets/images/Categories/phone.png';
import fashion from '../../assets/images/Categories/fashion.png';
import electronics from '../../assets/images/Categories/electronics.png';
import home from '../../assets/images/Categories/home.png';
import travel from '../../assets/images/Categories/travel.png';
import appliances from '../../assets/images/Categories/appliances.png'; 
import bagBg from '../../assets/images/backgroundImage/bagBg.svg'
import blanketBg from '../../assets/images/backgroundImage/blanketBg.svg'
import blazerBg from '../../assets/images/backgroundImage/blazerBg.svg'
import clothBg from '../../assets/images/backgroundImage/clothBg.svg'  
const category = [
    {
        name:  "Inicio",
        icon: home,
        stock: 8,
        bgImage: clothBg
    },
    {
        name: "Electronicos",
        icon: mobiles,
        stock: 21,
        bgImage: bagBg
    },
    {
        name:  "Herramientas",
        icon: fashion,
        stock: 22,
        bgImage: blazerBg
    },
    {
        name: "Pintura",
        icon: electronics,
        stock: 21,
        bgImage: blanketBg
    },
    {
        name: "Hogar",
        icon: travel,
        stock: 42,
        bgImage: clothBg
    },
    {
        name: "Trabajo",
        icon: appliances,
        stock: 82,
        bgImage: bagBg
    }, 
]
const Home3 = () => {
     
    return (
        <> 
    
            <BoxContainer> 

                {/* here promotion section {rf} */}

                <Box sx={{
                    marginTop: '5rem',
                    marginBottom: '1rem',
                }}>
                    <Grid container spacing={2} alignItems='center'>
                        <Grid item xs={12} sm={6} md={5}>
                            {/* here logo image {rf} */}
                            <Box>
                                <img src={logo} alt="Site logo" width={100} />
                            </Box>

                            {/* here promotional text contianer {rf} */}
                            <Box>
                                {/* here promotional text {rf} */}
                                <Typography variant='h2' sx={{
                                    fontSize: { xs: '1.875rem', md: '2.25rem', lg: '3rem' },
                                    fontFamily: `'DM Sans', sans-serif`,
                                    fontWeight: 600,
                                    color: 'rgb(15 23 42)',
                                    lineHeight: '2.5rem',
                                    margin: '2rem 0',
                                }}>Tu Ferreteria Online</Typography>

                                {/* here promotional sub text {rf} */}
                                <Typography variant='p' sx={{
                                    fontSize: { xs: '0.875rem', sm: '1.2rem', md: '1rem' },
                                    fontFamily: `'DM Sans', sans-serif`,
                                    fontWeight: 600,
                                    color: 'rgb(100 116 139)',
                                    marginTop: '1.5rem',
                                    lineHeight: '1.5rem'
                                }}>Ahora podés hacer tu pedido desde donde estés...</Typography>
                            </Box>

                            {/* here promotional button container {rf} */}

                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                margin: '3rem 0'
                            }}>
                                {/* here left button {rf} */}
                                <Button sx={{
                                    padding: '.875rem 1.5rem',
                                    color: 'rgb(248 250 252)',
                                    fontWeight: 500,
                                    fontSize: '.875rem',
                                    lineHeight: '1.25rem',
                                    backgroundColor: 'rgb(15 23 42)',
                                    boxShadow:
                                        '2px 8px 40px rgb(0 0 0 / 8%)',
                                    borderRadius: '9999px',
                                    '&:hover': {
                                        backgroundColor: 'rgb(30 41 59)',
                                    },
                                }}>Ver Catálogo</Button>

                                {/* here right button {rf} */}
                         
                            </Box>
                        </Grid>

                        {/* here promotional brand image container {rf} */}
                        <Grid item xs={12} sm={6} md={7}>
                            <Box sx={{
                                padding: '1rem'
                            }}>
                                {/* here promotional brand image {rf} */}
                                <img src={logo} alt="" width="100%" />
                            </Box>
                        </Grid>

                    </Grid>
                </Box>
            </BoxContainer>

            {/* here exploring product category section {rf} */}

            <Box sx={{
                width: '90%',
                margin: '0 auto',
                backgroundColor: 'rgb(243,244,246)',
                borderRadius: '40px'
            }}>
                <Box sx={{
                    padding: '7rem 0',
                    width: '90%',
                    margin: '0 auto'
                }}>

                    {/* here section heading text {rf} */}
                    <Typography sx={{
                        fontSize: { xs: '1.875rem', md: '2.25rem' },
                        textAlign: 'center',
                        fontFamily: `'Poppins', sans-serif`,
                        fontWeight: 600,
                        color: 'rgb(15 23 42)',
                        lineHeight: '2.5rem',
                        margin: '2rem 0 3rem',
                    }}>
                       Explorá Nuestras Categorias
                    </Typography>   {/* here category list container {rf} */}
                        <Box sx={{
                            display: 'flex',
                            backgroundColor: 'rgb(255 255 255)',
                            padding: '1.1rem',
                            borderRadius: '9999px',
                            margin: '2rem auto 3rem auto',
                            justifyContent: 'space-evenly',
                            width: { xs: '90%', sm: '80%', md: '70%', lg: '60%' },
                        }}>
                            <Typography>Home</Typography>
                            <Typography>Electronicos</Typography>
                            <Typography>Herramientas</Typography>
                            <Typography>Pintura</Typography>
                            <Typography>Hogar</Typography>
                            <Typography>Trabajo</Typography> 
                        </Box>
                        {/* here product category details card container {rf} */}
                        <Box>
                            <Grid container spacing={2}>
                                {
                                    // here category data map individually {rf}
                                    category.map((item, key) => {
                                        return (
                                            <Grid item xs={12} sm={6} md={4} key={key}>
                                                <Box sx={{
                                                    backgroundColor: 'rgb(255 255 255)',
                                                    borderRadius: '1.5rem',
                                                    padding: '2rem',
                                                    position: 'relative',
                                                    cursor: 'pointer',
                                                    "&:hover": {
                                                        boxShadow: '2px 8px 40px rgba(0,0,0,.08)'
                                                    }
                                                }}>
                                                    {/* here category image and product number contianer {rf} */}
                                                    <Box sx={{
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center'
                                                    }}>

                                                        {/* here product category image {rf} */}
                                                        <Box sx={{
                                                            backgroundColor: 'rgb(238 242 255)',
                                                            borderRadius: '50%',
                                                            width: '80px',
                                                            height: '80px',
                                                            display: 'flex',
                                                            justifyContent: 'center',
                                                            alignItems: 'center'
                                                        }}>
                                                            <img src={item.icon} alt={item.name} width={80} />
                                                        </Box>

                                                        {/* here total product present in category {rf} */}
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '1rem',
                                                                lineHeight: "1rem",
                                                                fontWeight: 500,
                                                                color: 'rgb(51 65 85)',
                                                                fontFamily: `'Poppins', sans-serif`,
                                                            }}><strong>{item.stock} Productos</strong></Typography>
                                                        </Box>
                                                    </Box>

                                                    {/* here product category name and category type container {rf} */}
                                                    <Box sx={{
                                                        margin: '3rem 0'
                                                    }}>
                                                        {/* here product category type name {rf} */}
                                                        <Typography sx={{
                                                            fontSize: '.875rem',
                                                            lineHeight: "1.25rem",
                                                            fontWeight: 500,
                                                            color: 'rgb(100 116 139)',
                                                            fontFamily: `'Poppins', sans-serif`,
                                                            marginBottom: '0.5rem'
                                                        }}>{item.name}</Typography>

                                                        {/* here product category name {rf} */}
                                                        <Typography variant='h2' sx={{
                                                            fontSize: '1.875rem',
                                                            lineHeight: "2.25rem",
                                                            fontWeight: 600,
                                                            color: 'rgb(15 23 42)',
                                                            fontFamily: `'Poppins', sans-serif`,
                                                        }}>{item.name}</Typography>
                                                    </Box>

                                                    {/* here navigation text container {rf} */}
                                                    <Box sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        color: 'rgb(100 116 139)',
                                                        cursor: 'pointer',
                                                        '&:hover': {
                                                            color: '#07a4f1'
                                                        }
                                                    }}>
                                                        {/* here navigation text {rf} */}
                                                        <Typography sx={{
                                                            fontSize: '.875rem',
                                                            lineHeight: "1.25rem",
                                                            fontWeight: 500,
                                                            fontFamily: `'Poppins', sans-serif`,
                                                        }}>
                                                            Ver Todo
                                                        </Typography>

                                                        {/* here navigation arraw icon {rf} */}
                                                        <ArrowRightAltIcon sx={{
                                                            marginLeft: '0.3rem'
                                                        }} />
                                                    </Box>

                                                    {/* here categroy card container background image container {rf}  */}
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        right: 0,
                                                        bottom: 0
                                                    }}>
                                                        <img src={item.bgImage} alt="" width={250} />
                                                    </Box>
                                                </Box>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                        </Box>
                                        </Box>

            </Box>
        </>
    );
};

// here export the component
export default Home3;
