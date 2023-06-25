import React from 'react'
import { Box } from '@mui/material';

const BoxContainer = ({ children }) => {
    return (
        // here box container(this component take 80% width out of 100% and center the section) {rf}
        <Box sx={{
            width: { xs: '90%', md:'80%' },
            margin: '0 auto',
        }}>
            {/* here sets inside all children ( like div, input, text etc.. ) {rf} */}
            {children}
        </Box>
    )
}

// here export the component {rf}
export default BoxContainer