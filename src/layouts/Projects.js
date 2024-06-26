import { Badge, Button, Card, CardContent, CardMedia, Container, Grid, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import easy_tracker_image from "../assets/easy_tracker_image.png";
import hotel_booking_app_image from "../assets/hotel_booking_app_image.png";
import instagram_clone_image from "../assets/instagram_clone_image.png";
import portfolio_2024v_image from "../assets/portfolio_2024v_image.png";
import movie_now_image from "../assets/movie_now_image.png";
import php_image from "../assets/php_image.png";

import CodeIcon from '@mui/icons-material/Code';
import PreviewIcon from '@mui/icons-material/Preview';

const Projects = () => {

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }
  const Default = ({ children }) => {
      const isNotMobile = useMediaQuery({ minWidth: 768 })
      return isNotMobile ? children : null
  }

  return (
    <>
      <Default>
        <Container sx={{ display: 'flex', justifyContent: 'center', overflowY: 'scroll', height: '70vh', mt: '20vh' }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Card sx={{ boxShadow: '10px 10px 5px rgb(0, 0, 0, 0.2)' }}>
                <CardMedia image={hotel_booking_app_image} sx={{ paddingTop: '56.25%'}}/>
                <CardContent>
                  <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>Hotel Booking App</Typography>
                  <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                    <Badge sx={{ backgroundColor: '#47A248', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>MongoDB</Badge>
                    <Badge sx={{ backgroundColor: '#000000', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>Express</Badge>
                    <Badge sx={{ backgroundColor: '#61DAFB', color: '#000', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>React</Badge>
                    <Badge sx={{ backgroundColor: '#5FA04E', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>Node.JS</Badge>
                  </Stack>
                  <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                    <Badge sx={{ backgroundColor: '#646CFF', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>Vite</Badge>
                    <Badge sx={{ backgroundColor: '#3178C6', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>TypeScript</Badge>
                    <Badge sx={{ backgroundColor: '#06B6D4', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>Tailwind CSS</Badge>
                    <Badge sx={{ backgroundColor: '#008CDD', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>Stripe</Badge>
                  </Stack>
                  <Stack direction="row" sx={{ mt: 6, display: 'flex', justifyContent: 'space-between' }}>
                    <Link to="https://github.com/hyewon93/easy_tracker" target='_blank' rel='noreferrer'>
                      <Button sx={{ border: '1.5px solid #802c86', color: '#802c86', fontSize: '12px', '&:hover': { transform: 'Scale(1.05)' }}}>
                        <CodeIcon fontSize='small' sx={{ mr: 1 }} /> CODE
                      </Button>
                    </Link>
                    <Link to="https://easytracker1.netlify.app/" target='_blank' rel='noreferrer'>
                      <Button sx={{ backgroundColor: '#802c86', color: '#fff', fontSize: '12px', '&:hover': { transform: 'Scale(1.05)', backgroundColor: '#802c86' }}}>
                        <PreviewIcon fontSize='small' sx={{ mr: 1 }}/> DEMO
                      </Button>
                    </Link>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ boxShadow: '10px 10px 5px rgb(0, 0, 0, 0.2)' }}>
                <CardMedia image={easy_tracker_image} sx={{ paddingTop: '56.25%'}}/>
                <CardContent>
                  <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>Easy Tracker</Typography>
                  <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                    <Badge sx={{ backgroundColor: '#61DAFB', color: '#000', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>React</Badge>
                    <Badge sx={{ backgroundColor: '#646CFF', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>Vite</Badge>
                    <Badge sx={{ backgroundColor: '#FFCA28', color: '#000', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>Frebase</Badge>
                    <Badge sx={{ backgroundColor: '#007FFF', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>ChakraUI</Badge>
                  </Stack>
                  <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                    <Badge sx={{ backgroundColor: '#F7DF1E', color: '#000', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>JavaScript</Badge>
                    <Badge sx={{ backgroundColor: '#1572B6', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>CSS</Badge>
                  </Stack>
                  <Stack direction="row" sx={{ mt: 6, display: 'flex', justifyContent: 'space-between' }}>
                    <Link to="https://github.com/hyewon93/easy_tracker" target='_blank' rel='noreferrer'>
                      <Button sx={{ border: '1.5px solid #802c86', color: '#802c86', fontSize: '12px', '&:hover': { transform: 'Scale(1.05)' }}}>
                        <CodeIcon fontSize='small' sx={{ mr: 1 }} /> CODE
                      </Button>
                    </Link>
                    <Link to="https://easytracker1.netlify.app/" target='_blank' rel='noreferrer'>
                      <Button sx={{ backgroundColor: '#802c86', color: '#fff', fontSize: '12px', '&:hover': { transform: 'Scale(1.05)', backgroundColor: '#802c86' }}}>
                        <PreviewIcon fontSize='small' sx={{ mr: 1 }}/> DEMO
                      </Button>
                    </Link>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ boxShadow: '10px 10px 5px rgb(0, 0, 0, 0.2)' }}>
                <CardMedia image={instagram_clone_image} sx={{ paddingTop: '56.25%'}} />
                <CardContent>
                  <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>Instagram Clone</Typography>
                  <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                    <Badge sx={{ backgroundColor: '#61DAFB', color: '#000', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>React</Badge>
                    <Badge sx={{ backgroundColor: '#646CFF', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>Vite</Badge>
                    <Badge sx={{ backgroundColor: '#FFCA28', color: '#000', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>Frebase</Badge>
                    <Badge sx={{ backgroundColor: '#007FFF', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>ChakraUI</Badge>
                  </Stack>
                  <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                    <Badge sx={{ backgroundColor: '#F7DF1E', color: '#000', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>JavaScript</Badge>
                    <Badge sx={{ backgroundColor: '#1572B6', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>CSS</Badge>
                  </Stack>
                  <Stack direction="row" sx={{ mt: 6, display: 'flex', justifyContent: 'space-between' }}>
                    <Link to="https://github.com/hyewon93/instagram_clone" target='_blank' rel='noreferrer'>
                      <Button sx={{ border: '1.5px solid #802c86', color: '#802c86', fontSize: '12px', '&:hover': { transform: 'Scale(1.05)' }}}>
                        <CodeIcon fontSize='small' sx={{ mr: 1 }} /> CODE
                      </Button>
                    </Link>
                    <Link to="https://insta-clone-hw.netlify.app/" target='_blank' rel='noreferrer'>
                      <Button sx={{ backgroundColor: '#802c86', color: '#fff', fontSize: '12px', '&:hover': { transform: 'Scale(1.05)', backgroundColor: '#802c86' }}}>
                        <PreviewIcon fontSize='small' sx={{ mr: 1 }}/> DEMO
                      </Button>
                    </Link>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ boxShadow: '10px 10px 5px rgb(0, 0, 0, 0.2)' }}>
                <CardMedia image={portfolio_2024v_image} sx={{ paddingTop: '56.25%'}} />
                <CardContent>
                  <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>Portfolio 2024v</Typography>
                  <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                    <Badge sx={{ backgroundColor: '#61DAFB', color: '#000', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>React</Badge>
                    <Badge sx={{ backgroundColor: '#F7DF1E', color: '#000', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>JavaScript</Badge>
                    <Badge sx={{ backgroundColor: '#1572B6', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>CSS</Badge>
                    <Badge sx={{ backgroundColor: '#007FFF', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>MUI</Badge>
                  </Stack>
                  <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                    <Badge sx={{ backgroundColor: '#fff', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>blank</Badge>
                  </Stack>
                  <Stack direction="row" sx={{ mt: 6, display: 'flex', justifyContent: 'space-between' }}>
                    <Link to="https://github.com/hyewon93/hyewon_portfolio_2024v" target='_blank' rel='noreferrer'>
                      <Button sx={{ border: '1.5px solid #802c86', color: '#802c86', fontSize: '12px', '&:hover': { transform: 'Scale(1.05)' }}}>
                        <CodeIcon fontSize='small' sx={{ mr: 1 }} /> CODE
                      </Button>
                    </Link>
                    <Link to="https://hyewonb.netlify.app/" target='_blank' rel='noreferrer'>
                      <Button sx={{ backgroundColor: '#802c86', color: '#fff', fontSize: '12px', '&:hover': { transform: 'Scale(1.05)', backgroundColor: '#802c86' }}}>
                        <PreviewIcon fontSize='small' sx={{ mr: 1 }}/> DEMO
                      </Button>
                    </Link>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ boxShadow: '10px 10px 5px rgb(0, 0, 0, 0.2)' }}>
                <CardMedia image={movie_now_image} sx={{ paddingTop: '56.25%'}} />
                <CardContent>
                  <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>Movie Now</Typography>
                  <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                    <Badge sx={{ backgroundColor: '#61DAFB', color: '#000', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>React</Badge>
                    <Badge sx={{ backgroundColor: '#F7DF1E', color: '#000', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>JavaScript</Badge>
                    <Badge sx={{ backgroundColor: '#1572B6', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>CSS</Badge>
                    <Badge sx={{ backgroundColor: '#007FFF', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>MUI</Badge>
                  </Stack>
                  <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                    <Badge sx={{ backgroundColor: '#fff', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>blank</Badge>
                  </Stack>
                  <Stack direction="row" sx={{ mt: 6, display: 'flex', justifyContent: 'space-between' }}>
                    <Link to="https://github.com/hyewon93/movie_now" target='_blank' rel='noreferrer'>
                      <Button sx={{ border: '1.5px solid #802c86', color: '#802c86', fontSize: '12px', '&:hover': { transform: 'Scale(1.05)' }}}>
                        <CodeIcon fontSize='small' sx={{ mr: 1 }} /> CODE
                      </Button>
                    </Link>
                    <Link to="https://movienow1.netlify.app/" target='_blank' rel='noreferrer'>
                      <Button sx={{ backgroundColor: '#802c86', color: '#fff', fontSize: '12px', '&:hover': { transform: 'Scale(1.05)', backgroundColor: '#802c86' }}}>
                        <PreviewIcon fontSize='small' sx={{ mr: 1 }}/> DEMO
                      </Button>
                    </Link>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Default>
      <Mobile>
        <Container sx={{ overflowX: 'scroll', pt: 25 }}>
          <Stack direction="row" spacing={3} sx={{ display: 'flex', width: 1000 }}>
            <Card sx={{ boxShadow: '10px 10px 5px rgb(0, 0, 0, 0.2)', width: 300 }}>
              <CardMedia component="img" image={easy_tracker_image} sx={{ width: 235 }} />
              <CardContent>
                <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>Easy Tracker</Typography>
                <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                  <Badge sx={{ backgroundColor: '#61DAFB', color: '#000', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>React</Badge>
                  <Badge sx={{ backgroundColor: '#646CFF', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>Vite</Badge>
                  <Badge sx={{ backgroundColor: '#FFCA28', color: '#000', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>Frebase</Badge>
                </Stack>
                <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                  <Badge sx={{ backgroundColor: '#007FFF', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>ChakraUI</Badge>
                  <Badge sx={{ backgroundColor: '#F7DF1E', color: '#000', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>JavaScript</Badge>
                  <Badge sx={{ backgroundColor: '#1572B6', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>CSS</Badge>
                </Stack>
                <Stack direction="row" sx={{ mt: 6, display: 'flex', justifyContent: 'space-between' }}>
                  <Link to="https://github.com/hyewon93/easy_tracker" target='_blank' rel='noreferrer'>
                    <Button sx={{ border: '1.5px solid #802c86', color: '#802c86', fontSize: '12px', '&:hover': { transform: 'Scale(1.05)' }}}>
                      <CodeIcon fontSize='small' sx={{ mr: 1 }} /> CODE
                    </Button>
                  </Link>
                  <Link to="https://easytracker1.netlify.app/" target='_blank' rel='noreferrer'>
                    <Button sx={{ backgroundColor: '#802c86', color: '#fff', fontSize: '12px', '&:hover': { transform: 'Scale(1.05)', backgroundColor: '#802c86' }}}>
                      <PreviewIcon fontSize='small' sx={{ mr: 1 }}/> DEMO
                    </Button>
                  </Link>
                </Stack>
              </CardContent>
            </Card>
            <Card sx={{ boxShadow: '10px 10px 5px rgb(0, 0, 0, 0.2)', width: 300 }}>
              <CardMedia component="img" image={instagram_clone_image} sx={{ width: 235 }} />
              <CardContent>
                <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>Instagram Clone</Typography>
                <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                  <Badge sx={{ backgroundColor: '#61DAFB', color: '#000', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>React</Badge>
                  <Badge sx={{ backgroundColor: '#646CFF', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>Vite</Badge>
                  <Badge sx={{ backgroundColor: '#FFCA28', color: '#000', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>Frebase</Badge>
                </Stack>
                <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                  <Badge sx={{ backgroundColor: '#007FFF', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>ChakraUI</Badge>
                  <Badge sx={{ backgroundColor: '#F7DF1E', color: '#000', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>JavaScript</Badge>
                  <Badge sx={{ backgroundColor: '#1572B6', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>CSS</Badge>
                </Stack>
                <Stack direction="row" sx={{ mt: 6, display: 'flex', justifyContent: 'space-between' }}>
                  <Link to="https://github.com/hyewon93/instagram_clone" target='_blank' rel='noreferrer'>
                    <Button sx={{ border: '1.5px solid #802c86', color: '#802c86', fontSize: '12px', '&:hover': { transform: 'Scale(1.05)' }}}>
                      <CodeIcon fontSize='small' sx={{ mr: 1 }} /> CODE
                    </Button>
                  </Link>
                  <Link to="https://insta-clone-hw.netlify.app/" target='_blank' rel='noreferrer'>
                    <Button sx={{ backgroundColor: '#802c86', color: '#fff', fontSize: '12px', '&:hover': { transform: 'Scale(1.05)', backgroundColor: '#802c86' }}}>
                      <PreviewIcon fontSize='small' sx={{ mr: 1 }}/> DEMO
                    </Button>
                  </Link>
                </Stack>
              </CardContent>
            </Card>
            <Card sx={{ boxShadow: '10px 10px 5px rgb(0, 0, 0, 0.2)', width: 300 }}>
              <CardMedia component="img" image={portfolio_2024v_image} sx={{ width: 235 }} />
              <CardContent>
                <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>Portfolio 2024v</Typography>
                <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                  <Badge sx={{ backgroundColor: '#61DAFB', color: '#000', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>React</Badge>
                  <Badge sx={{ backgroundColor: '#F7DF1E', color: '#000', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>JavaScript</Badge>
                  <Badge sx={{ backgroundColor: '#1572B6', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>CSS</Badge>
                </Stack>
                <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                  <Badge sx={{ backgroundColor: '#007FFF', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>MUI</Badge>
                </Stack>
                <Stack direction="row" sx={{ mt: 6, display: 'flex', justifyContent: 'space-between' }}>
                  <Link to="https://github.com/hyewon93/hyewon_portfolio_2024v" target='_blank' rel='noreferrer'>
                    <Button sx={{ border: '1.5px solid #802c86', color: '#802c86', fontSize: '12px', '&:hover': { transform: 'Scale(1.05)' }}}>
                      <CodeIcon fontSize='small' sx={{ mr: 1 }} /> CODE
                    </Button>
                  </Link>
                  <Link to="https://hyewonb.netlify.app/" target='_blank' rel='noreferrer'>
                    <Button sx={{ backgroundColor: '#802c86', color: '#fff', fontSize: '12px', '&:hover': { transform: 'Scale(1.05)', backgroundColor: '#802c86' }}}>
                      <PreviewIcon fontSize='small' sx={{ mr: 1 }}/> DEMO
                    </Button>
                  </Link>
                </Stack>
              </CardContent>
            </Card>
            <Card sx={{ boxShadow: '10px 10px 5px rgb(0, 0, 0, 0.2)', width: 300 }}>
              <CardMedia component="img" image={movie_now_image} sx={{ width: 235 }} />
              <CardContent>
                <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>Movie Now</Typography>
                <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                  <Badge sx={{ backgroundColor: '#61DAFB', color: '#000', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>React</Badge>
                  <Badge sx={{ backgroundColor: '#F7DF1E', color: '#000', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>JavaScript</Badge>
                  <Badge sx={{ backgroundColor: '#1572B6', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>CSS</Badge>
                </Stack>
                <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                  <Badge sx={{ backgroundColor: '#007FFF', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>MUI</Badge>
                </Stack>
                <Stack direction="row" sx={{ mt: 6, display: 'flex', justifyContent: 'space-between' }}>
                  <Link to="https://github.com/hyewon93/movie_now" target='_blank' rel='noreferrer'>
                    <Button sx={{ border: '1.5px solid #802c86', color: '#802c86', fontSize: '12px', '&:hover': { transform: 'Scale(1.05)' }}}>
                      <CodeIcon fontSize='small' sx={{ mr: 1 }} /> CODE
                    </Button>
                  </Link>
                  <Link to="https://movienow1.netlify.app/" target='_blank' rel='noreferrer'>
                    <Button sx={{ backgroundColor: '#802c86', color: '#fff', fontSize: '12px', '&:hover': { transform: 'Scale(1.05)', backgroundColor: '#802c86' }}}>
                      <PreviewIcon fontSize='small' sx={{ mr: 1 }}/> DEMO
                    </Button>
                  </Link>
                </Stack>
              </CardContent>
            </Card>
            <Card sx={{ boxShadow: '10px 10px 5px rgb(0, 0, 0, 0.2)', width: 300 }}>
              <CardMedia component="img" image={php_image} sx={{ width: 235 }} />
              <CardContent>
                <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>PHP Collection</Typography>
                <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                  <Badge sx={{ backgroundColor: '#777BB4', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>PHP</Badge>
                </Stack>
                <Stack direction="row" sx={{ mt: 6, display: 'flex', justifyContent: 'space-between' }}>

                </Stack>
                <Stack direction="row" sx={{ mt: 6, display: 'flex', justifyContent: 'space-between' }}>
                  <Link to="https://github.com/hyewon93/PHP" target='_blank' rel='noreferrer'>
                    <Button sx={{ border: '1.5px solid #802c86', color: '#802c86', fontSize: '12px', '&:hover': { transform: 'Scale(1.05)' }}}>
                      <CodeIcon fontSize='small' sx={{ mr: 1 }} /> CODE
                    </Button>
                  </Link>
                </Stack>
              </CardContent>
            </Card>
          </Stack>
        </Container>
      </Mobile>
    </>
    
  )
}

export default Projects