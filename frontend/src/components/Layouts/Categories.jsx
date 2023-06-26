 
import { Box, Typography } from '@mui/material';
 
import BoxContainer from '../BoxContainer'; 

const Categories = () => {
    return ( 
    
        <BoxContainer>
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
                        </BoxContainer>
    );
};

export default Categories;
