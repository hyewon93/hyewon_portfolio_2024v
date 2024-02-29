import { Badge, Box, Button, Chip, Container, Stack, Typography } from '@mui/material';
import { useState } from 'react';

import mchn_logo from '../assets/mchn_logo.png';
import airsoft_logo from '../assets/airsoft_logo.png';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Career = () => {

  const [page, setPage] = useState(1);

  const handleArrorButton = (direction) => {
    if(direction === 'prev') {
      setPage(page-1);
    } else {
      setPage(page+1);
    }
  };

  return (
    <Container sx={{ maxWidth: '1300px !important' }}>
      <Stack direction="row" sx={{ mt: 20 }}>
        <Button 
          onClick={() => handleArrorButton('prev')} 
          sx={{ 
            pointerEvents: page === 1 ? 'none' : 'unset',
            color: page === 1 ? '#fffcfc4d' : '#fff',
            '&:hover': { transform: 'scale(1.3)' }
          }}
        ><ArrowBackIosIcon sx={{ fontSize: '40px' }}/></Button>
        <Container sx={{ display: page === 1 ? 'flex' : 'none', justifyContent: 'center', ml: 0, mr: 0 }}>
          <Stack direction="column" sx={{ backgroundColor: '#fff', width: '100%', height: '600px', borderRadius: '15px', pt: 5, pb: 5, pl:10, pr: 10, display: 'flex', justifyContent: 'center', boxShadow: '10px 10px 5px rgb(0, 0, 0, 0.2)' }}>
            <Stack direction="row">
              <Stack direction="column" spacing={3} sx={{ width: '55%', mt: 2, textAlign: 'justify' }}>
                <Stack direction="row">
                  <Box sx={{ mt: 0, borderRadius: '70%', width: '130px', height: '130px', border: '1px solid gray', pl: 2.3, pt: 6.3 }}>
                    <img src={mchn_logo} width="100px"/>
                  </Box>

                  <Stack direction="column" spacing={2} sx={{ ml: 5, mt: 3 }}>
                    <Typography variant='h4' sx={{ fontWeight: 'bold' }}>My Passion Media</Typography>
                    <Typography variant='h5' sx={{ fontWeight: 'bold' }}>2020-2023</Typography>
                  </Stack>
                </Stack>
                <Typography variant='subtitle1'>
                  The <b>MCHN</b> is an e-commerce platform for online stores and retail point-of-sale systems. 
                  MCHN offers online retailers a suite of services including payments, marketing, shipping and customer engagement tools.
                </Typography>
                <Typography variant='subtitle1'>
                  As a <b>backend lead developer</b>, I primarily handled projects such as API integration and database management.
                  Since it was a small-scale development team, communication among team members was crucial, 
                  and I participated in numerous frontend projects in addition to backend development.
                </Typography>
                <Stack direction="row">
                  <Badge sx={{ backgroundColor: '#777BB4', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>PHP</Badge>
                  <Badge sx={{ backgroundColor: '#F7DF1E', color: '#000', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px' }}>JavaScript</Badge>
                  <Badge sx={{ backgroundColor: '#009688', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px' }}>REST API</Badge>
                  <Badge sx={{ backgroundColor: '#0769AD', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px' }}>jQuery</Badge>
                  <Badge sx={{ backgroundColor: '#E34F26', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px' }}>HTML</Badge>
                  <Badge sx={{ backgroundColor: '#1572B6', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px' }}>CSS</Badge>
                  <Badge sx={{ backgroundColor: '#4479A1', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px' }}>MySQL</Badge>
                  <Badge sx={{ backgroundColor: '#181717', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px' }}>Git</Badge>
                  <Badge sx={{ backgroundColor: '#007FFF', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px' }}>MUI</Badge>
                </Stack>
              </Stack>
              <Stack direction="column" spacing={2} sx={{ mt: 2, ml: 5}}>
              <Typography variant='h5' sx={{ fontWeight: 'bold', color: '#802c86' }}>Major Projects</Typography>
                <Typography variant='body1' sx={{ fontWeight: 'bold' }}>3rd Party e-commerce Platform Integration</Typography>
                <Typography variant='body2' sx={{ fontSize: '12px' }}># Real-time inventory # Subscription Migration</Typography>
                <Typography variant='body1' sx={{ fontWeight: 'bold' }}>MCHN UI V3</Typography>
                <Typography variant='body2' sx={{ fontSize: '12px' }}># Transition from Webpack 4 to Webpack 5 <br></br># User-friendly drag and drop content editor</Typography>
                <Typography variant='body1' sx={{ fontWeight: 'bold' }}>MCHN Pay</Typography>
                <Typography variant='body2' sx={{ fontSize: '12px' }}># Stripe Connect API # Payment Routing</Typography>
                <Typography variant='body1' sx={{ fontWeight: 'bold' }}>Stripe Payment Intent API</Typography>
                <Typography variant='body2' sx={{ fontSize: '12px' }}># REST API Integration # 3D Secure Authentication</Typography>
                <Typography variant='body1' sx={{ fontWeight: 'bold' }}>Report Automation</Typography>
                <Typography variant='body2' sx={{ fontSize: '12px' }}># Cron file for report generation # User-friendly UI/UX</Typography>
                <Typography variant='body1' sx={{ fontWeight: 'bold' }}>Report Automation</Typography>
                <Typography variant='body2' sx={{ fontSize: '12px' }}># Management Security Method</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Container>
        <Container sx={{ display: page === 2 ? 'flex' : 'none', justifyContent: 'center', ml: 0, mr: 0 }}>
          <Stack direction="column" sx={{ backgroundColor: '#fff', width: '100%', height: '600px', borderRadius: '15px', pt: 5, pb: 5, pl:10, pr: 10, display: 'flex', justifyContent: 'center', boxShadow: '10px 10px 5px rgb(0, 0, 0, 0.2)' }}>
            <Stack direction="row">
              <Stack direction="column" spacing={3} sx={{ width: '55%', mt: 2, textAlign: 'justify' }}>
                <Stack direction="row">
                  <Box sx={{ mt: 0, borderRadius: '70%', width: '130px', height: '130px', border: '1px solid gray', pl: 2, pt: 4 }}>
                    <img src={airsoft_logo} width="100px"/>
                  </Box>

                  <Stack direction="column" spacing={2} sx={{ ml: 5, mt: 3 }}>
                    <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Airsoft</Typography>
                    <Typography variant='h5' sx={{ fontWeight: 'bold' }}>2016-2019</Typography>
                  </Stack>
                </Stack>
                <Typography variant='subtitle1'>
                  Airsoft is one of the most significant SI companies in the <b>airline industry</b>. 
                  The company is operating an in-house R&D team for airline solution and it's the only provider of self-devzeloped CRS in Korea.
                </Typography>
                <Typography variant='subtitle1'>
                  As an <b>web developer</b>, I collaborated with <i>Asiana Airlines' IT team</i> for several years within the organization. 
                  My responsibilities included creating their flight booking system and gaining expertise in integrating the interface into the CRS (Amadeus).
                </Typography>
                <Stack direction="row">
                  <Badge sx={{ backgroundColor: '#4B4B77', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>JAVA</Badge>
                  <Badge sx={{ backgroundColor: '#6DB33F', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px' }}>Spring</Badge>
                  <Badge sx={{ backgroundColor: '#F7DF1E', color: '#000', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px' }}>JavaScript</Badge>
                  <Badge sx={{ backgroundColor: '#0769AD', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px' }}>jQuery</Badge>
                  <Badge sx={{ backgroundColor: '#E34F26', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px' }}>HTML</Badge>
                  <Badge sx={{ backgroundColor: '#1572B6', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px' }}>CSS</Badge>
                  <Badge sx={{ backgroundColor: '#F80000', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px' }}>Oracle</Badge>
                  <Badge sx={{ backgroundColor: '#D22128', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px' }}>Apache</Badge>
                  <Badge sx={{ backgroundColor: '#809CC9', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px' }}>Subversion</Badge>
                </Stack>
              </Stack>
              <Stack direction="column" spacing={2} sx={{ mt: 2, ml: 5}}>
              <Typography variant='h5' sx={{ fontWeight: 'bold', color: '#802c86' }}>Major Projects</Typography>
                <Typography variant='body1' sx={{ fontWeight: 'bold' }}>Upgrade Standby Service Project</Typography>
                <Typography variant='body2' sx={{ fontSize: '12px' }}># Special staff price for upgrading seats # Asiana I/U Server</Typography>
                <Typography variant='body1' sx={{ fontWeight: 'bold' }}>Online Renewal</Typography>
                <Typography variant='body2' sx={{ fontSize: '12px' }}># Communication with CRS(XML) # REST API # UI/UX</Typography>
                <Typography variant='body1' sx={{ fontWeight: 'bold' }}>ATC Refund Commission Project</Typography>
                <Typography variant='body2' sx={{ fontSize: '12px' }}># Monitoring Usgae Flow # Pre-Commision Calculation</Typography>
                <Typography variant='body1' sx={{ fontWeight: 'bold' }}>Online Coupon</Typography>
                <Typography variant='body2' sx={{ fontSize: '12px' }}># UI/UX # Communication with CRS(XML) <br/># Database Management</Typography>
                <Typography variant='body1' sx={{ fontWeight: 'bold' }}>Website Advancement Project 2</Typography>
                <Typography variant='body2' sx={{ fontSize: '12px' }}># Payment # UI/UX # Databse Management</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Container>
        <Button 
          onClick={() => handleArrorButton('next')} 
          sx={{ 
            pointerEvents: page === 2 ? 'none' : 'unset',
            color: page === 2 ? '#fffcfc4d' : '#fff',
            '&:hover': { transform: 'scale(1.3)'} 
          }}
        ><ArrowForwardIosIcon sx={{ fontSize: '40px' }}/></Button>
      </Stack>
    </Container>
  )
}

export default Career