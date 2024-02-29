import { Box, Button, Container, Stack, Typography } from '@mui/material';
import profileImage from '../assets/profile.jpg';

import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import DownloadIcon from '@mui/icons-material/Download';

const Profile = () => {

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
            <Stack direction="row" sx={{ backgroundColor: '#fff', width: '100%', height: '600px', mt: 20 , borderRadius: '15px', p: 10, display: 'flex', justifyContent: 'center'}}>
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
                        <Typography variant='body2'>#Team Player </Typography>
                        <Typography variant='body2'>#Detail-oriented </Typography>
                        <Typography variant='body2'>#Fast learner </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Container>
    )
}

export default Profile