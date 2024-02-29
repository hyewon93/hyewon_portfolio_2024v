import { Box, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Stack sx={{ textAlign: 'center', alignItems: 'center', position : 'absolute', bottom: 0, width: '100%' }}>
        <Stack direction="row" sx={{ mb: 2 }} spacing={2}>
            <Link to="https://github.com/hyewon93" target='_blank' rel="noreferrer" ><GitHubIcon sx={{ color: '#fff' }}/></Link>
            <Link to="https://www.linkedin.com/in/hyewon-bae-615392197/" target='_blank' rel="noreferrer"><LinkedInIcon sx={{ color: '#fff' }}/></Link>
        </Stack>
        <Typography sx={{ color: '#fff', fontSize:'12px', mb: 2 }}>© 2023 HW_DEV. ALL RIGHTS RESERVED.</Typography>
    </Stack>
  )
}

export default Footer