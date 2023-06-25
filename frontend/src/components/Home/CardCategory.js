import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react'; 
import TextHeading from '../TextHeading';
import { useSelector } from 'react-redux';

const CardCategory = () => {
    
const {  products } = useSelector((state) => state.products);
    return (
        <>
            {/* here section heading text */}
            <TextHeading
                highlightText='Descubre Más'
                normalText='Cosas buenas te esperan'
                textAlign='center'
            />
            <Box sx={{
                margin:'1rem 0'
            }}>
                <Grid
                    container
                    spacing={2}
                    sx={
                        {
                            // margin: '2rem 0'
                        }
                    }>
                    {/* here category one {rf} */}
            {products.slice(0, 3).map((products) => ( 
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}>
                        <Box
                            sx={{
                                backgroundColor: 'rgb(f f f)',
                                borderRadius: '1rem',
                                padding: '1.5rem',
                                position: 'relative',
                                height: '300px',
                            }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    alignItems: 'center',
                                    height: '300px',
                                }}>
                                <img
                                    src={products.images[0].url}
                                    alt='Explore new arrivals'
                                    width={200}
                                />
                            </Box>
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: '1.5rem',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-evenly',
                                    alignItems: 'flex-start',
                                }}>
                                <Typography
                                    sx={{
                                        fontSize: '1.3rem',
                                        fontFamily: `'DM Sans', sans-serif`,
                                        fontWeight: 600,
                                        color: 'rgb(51 65 85)',
                                        lineHeight: '1.25rem',
                                    }}>{products.name.slice(0, 30)}
                                </Typography> 
                                <Button
                                    sx={{
                                        padding: '.875rem 1.5rem',
                                        color: 'rgb(51 65 85)',
                                        fontWeight: 500,
                                        fontSize: '.875rem',
                                        lineHeight: '1.25rem',
                                        backgroundColor: 'rgb(255 255 255)',
                                        boxShadow:
                                            '2px 8px 40px rgb(0 0 0 / 8%)',
                                        borderRadius: '9999px',
                                        '&:hover': {
                                            backgroundColor: 'rgb(243 244 246)',
                                        },
                                    }}>
                                  Ver Producto
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
  )  )}
                </Grid>  
            </Box>    
    </>
    );
}

export default CardCategory