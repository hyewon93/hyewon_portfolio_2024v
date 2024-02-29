import { Box, Stack, Typography } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import Typewriter from 'typewriter-effect';

const Home = () => {

    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 767 })
        return isMobile ? children : null
    }
    const Default = ({ children }) => {
        const isNotMobile = useMediaQuery({ minWidth: 768 })
        return isNotMobile ? children : null
    }

    return (
        <Box sx={{ pt: 30 , pl: {xs: 5, sm: 15, md: 15} }}>
            <Default>
                <Typography variant='h1' sx={{ color: '#fff', fontWeight: 'bold' }}>
                    <Typewriter
                        options={{
                            strings: ['Hyewon Bae'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </Typography>
                <Stack direction="row" sx={{ mt: 10 }}>
                    <Box sx={{ backgroundColor: '#fff', width: '3px', height: '150px', mr: 5 }}></Box>
                    <Stack direction="column" sx={{ color: '#fff' }}>
                        <Typography variant='h4' sx={{ mb: 3 }}>Hello👋</Typography>
                        <Typography variant='h5' sx={{ mb: 1 }}>I am full-stack web developer</Typography>
                        <Typography variant='h5'>who wants to be a <b>true developer</b> not just a coder.</Typography>
                    </Stack>
                </Stack>
            </Default>
            <Mobile>
                <Typography variant='h4' sx={{ color: '#fff', fontWeight: 'bold' }}>
                    <Typewriter
                        options={{
                            strings: ['Hyewon Bae'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </Typography>
                <Stack direction="row" sx={{ mt: 10 }}>
                    <Box sx={{ backgroundColor: '#fff', width: '3px', height: '150px', mr: 2 }}></Box>
                    <Stack direction="column" sx={{ color: '#fff' }}>
                        <Typography variant='h5' sx={{ mb: 3 }}>Hello👋</Typography>
                        <Typography variant='subtitle1' sx={{ mb: 1 }}>I am full-stack web developer</Typography>
                        <Typography variant='subtitle1'>who wants to be a <b>true developer</b> not just a coder.</Typography>
                    </Stack>
                </Stack>
            </Mobile>
            
        </Box>
    )
}

export default Home