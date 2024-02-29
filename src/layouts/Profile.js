import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { useMediaQuery } from 'react-responsive';

import profileImage from '../assets/profile.jpg';

import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import DownloadIcon from '@mui/icons-material/Download';

const Profile = () => {

    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 767 })
        return isMobile ? children : null
    }
    const Default = ({ children }) => {
        const isNotMobile = useMediaQuery({ minWidth: 768 })
        return isNotMobile ? children : null
    }

    const handleButtonClick = () => {
     
        // using Java Script method to get PDF file
        fetch("Resume (Hyewon Bae).pdf").then((response) => {
            response.blob().then((blob) => {
             
                // Creating new object of PDF file
                const fileURL =
                    window.URL.createObjectURL(blob);
                     
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "Resume (Hyewon Bae).pdf";
                alink.click();
            });
        });
    };

    return (
        <Container sx={{ display: 'flex', justifyContent: 'center' }}>
            <Default>
                <Stack direction="row" sx={{ backgroundColor: '#fff', width: '100%', height: 'auto', mt: 20 , borderRadius: '15px', p: 10, display: 'flex', justifyContent: 'center', boxShadow: '10px 10px 5px rgb(0, 0, 0, 0.2)'}}>
                    <Stack direction="column" sx={{ mr: 5 }}>
                        <Box sx={{ mt: 6, borderRadius: '70%', width: '300px', height: '300px', backgroundImage:`url(${profileImage})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}></Box>
                        <Button onClick={handleButtonClick} sx={{ mt: 4, backgroundColor: '#802c86', color: '#fff', '&:hover': { backgroundColor: 'none', color: '#802c86' } }}><DownloadIcon sx={{ mr: 1 }} /> Resume/CV</Button>
                    </Stack>
                    <Stack direction="column" sx={{ maxWidth: '500px'}}>
                        <Stack direction="column" sx={{ ml: 10 }} spacing={1}>
                            <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Hyewon Bae</Typography>
                            <Typography variant='h5' sx={{ fontWeight: 'bold' }}>Web Developer</Typography>
                        </Stack>
                        <Stack direction="column" sx={{ ml: 10, mt: 5 }} spacing={1}>
                            <Stack direction="row">
                                <LocationOnRoundedIcon fontSize='small' sx={{ mr: 1 }} />
                                <Typography variant='subtitle1'>Vancouver, BC, Canada</Typography>
                            </Stack>
                            <Stack direction="row">
                                <SchoolRoundedIcon fontSize='small' sx={{ mr: 1.5 }} />
                                <Box>
                                    <Typography variant='subtitle1'>Bachelor of Computer Science & Engineering</Typography>
                                    <Typography variant='subtitle2' sx={{ mt: 1 }}>at Hansie University, South Korea</Typography>
                                </Box>
                            </Stack>
                        </Stack>
                        <Stack direction="column" sx={{ ml: 10, mt: 5 }} spacing={1}>
                        <Typography variant='body2' sx={{ textAlign: 'justify' }}>
                            My name is Hyewon Bae, and I am a developer devoted to making websites look great, work fast, and perform well, providing a seamless user experience. 
                            As a developer, I try to keep an eye on new technologies and continue personal study. 
                        </Typography>
                        </Stack>
                        <Stack direction="row" sx={{ ml: 10, mt: 5 }} spacing={1}>
                            <Typography variant='body2' color='#802c86'>#Team Player </Typography>
                            <Typography variant='body2' color='#802c86'>#Detail-oriented </Typography>
                            <Typography variant='body2' color='#802c86'>#Fast learner </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Default>
            <Mobile>
                <Stack direction="column" sx={{ backgroundColor: '#fff', width: '100%', height: 'auto', mt: 25 , borderRadius: '15px', p: 2, display: 'flex', justifyContent: 'center'}}>
                    <Stack direction="row">
                        <Stack direction="column"  sx={{ mr: 2 }}>
                            <Box sx={{ mt: 6, borderRadius: '70%', width: '130px', height: '130px', backgroundImage:`url(${profileImage})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}></Box>
                            <Button onClick={handleButtonClick} sx={{ mt: 4, backgroundColor: '#802c86', color: '#fff', fontSize: '12px', '&:hover': { backgroundColor: 'none', color: '#802c86' } }}><DownloadIcon fontSize='small' sx={{ mr: 1 }} /> Resume/CV</Button>
                        </Stack>
                        <Stack direction="column" sx={{ maxWidth: '500px'}}>
                            <Stack direction="column" spacing={1}>
                                <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>Hyewon Bae</Typography>
                                <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>Web Developer</Typography>
                            </Stack>
                            <Stack direction="column" sx={{ mt: 3 }} spacing={1}>
                                <Stack direction="row">
                                    <LocationOnRoundedIcon fontSize='small' sx={{ mr: 1 }} />
                                    <Typography variant='body2' sx={{ fontSize: '13px'}}>Vancouver, BC, Canada</Typography>
                                </Stack>
                                <Stack direction="row">
                                    <SchoolRoundedIcon fontSize='small' sx={{ mr: 1.5 }} />
                                    <Box>
                                        <Typography variant='body2' sx={{ fontSize: '13px'}}>Bachelor of Computer Science & Engineering</Typography>
                                        <Typography variant='body2' sx={{ fontSize: '10px', mt: 1}}>at Hansie University, South Korea</Typography>
                                    </Box>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack direction="column" sx={{ mt: 4 }} spacing={1}>
                        <Typography variant='body2' sx={{ textAlign: 'justify' }}>
                            My name is Hyewon Bae, and I am a developer devoted to making websites look great, work fast, and perform well, providing a seamless user experience. 
                            As a developer, I try to keep an eye on new technologies and continue personal study. 
                        </Typography>
                    </Stack>
                    <Stack direction="row" sx={{ mt: 2 }} spacing={1}>
                        <Typography variant='body2' color='#802c86' sx={{ fontSize: '10px'}}>#Team Player </Typography>
                        <Typography variant='body2' color='#802c86' sx={{ fontSize: '10px'}}>#Detail-oriented </Typography>
                        <Typography variant='body2' color='#802c86' sx={{ fontSize: '10px'}}>#Fast learner </Typography>
                    </Stack>
                </Stack>
            </Mobile>
        </Container>
    )
}

export default Profile