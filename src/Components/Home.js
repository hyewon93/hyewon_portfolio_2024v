import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <Box sx={{ mt: 30, ml: 15 }}>
        <Typography variant='h1' sx={{ color: '#fff', fontWeight: 'bold' }}>Hyewon Bae</Typography>
        <Stack direction="row" sx={{ mt: 10 }}>
            <Box sx={{ backgroundColor: '#fff', width: '3px', height: '150px', mr: 5 }}></Box>
            <Stack direction="column" sx={{ color: '#fff' }}>
                <Typography variant='h4' sx={{ mb: 3 }}>Hello👋</Typography>
                <Typography variant='h5' sx={{ mb: 1 }}>I am full-stack web developer</Typography>
                <Typography variant='h5'>from Korea to Canada.</Typography>
            </Stack>
        </Stack>
    </Box>
  )
}

export default Home