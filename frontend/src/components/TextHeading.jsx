import React from 'react'
import { Typography } from '@mui/material';

const TextHeading = (props) => {
    return (
        // here section heading text {rf}
        <Typography variant='h2' sx={{
            textAlign: `${props.textAlign}`,
            fontSize: { xs: '1.875rem', md: '2.25rem' },
            fontFamily: `'DM Sans', sans-serif`,
            fontWeight: 600,
            color: 'rgb(17,24,39)',
            lineHeight: '2.5rem',
            margin: '1rem 0'
        }}>

            {/* here define highlight text {rf} */}
            {`${props.highlightText}. `}

            {/* here normal text {rf} */}
            <Typography variant='span' sx={{
                fontSize: { sm: '1.875rem', md: '2.25rem' },
                fontFamily: `'DM Sans', sans-serif`,
                fontWeight: 600,
                color: 'rgb(107,114,128)',
                lineHeight: '2.5rem'
            }}>

                {/* here define normal text {rf} */}
                {`${props.normalText}`}
            </Typography>
        </Typography>
    )
}

// here export the component {rf}
export default TextHeading