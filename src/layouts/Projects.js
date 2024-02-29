import { Badge, Button, Card, CardContent, CardMedia, Container, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

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
        <Container sx={{ display: 'flex', justifyContent: 'center', pt: 20 }}>
          <Stack direction="row" spacing={5}>
            <Card sx={{ boxShadow: '10px 10px 5px rgb(0, 0, 0, 0.2)' }}>
              <CardMedia component="img" image={portfolio_2024v_image} sx={{ width: 300, height: 160 }} />
              <CardContent>
                <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>Portfolio 2024v</Typography>
                <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                  <Badge sx={{ backgroundColor: '#61DAFB', color: '#000', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>React</Badge>
                  <Badge sx={{ backgroundColor: '#F7DF1E', color: '#000', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>JavaScript</Badge>
                  <Badge sx={{ backgroundColor: '#1572B6', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>CSS</Badge>
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
            <Card sx={{ boxShadow: '10px 10px 5px rgb(0, 0, 0, 0.2)' }}>
              <CardMedia component="img" image={movie_now_image} sx={{ width: 300 }} />
              <CardContent>
                <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>Movie Now</Typography>
                <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                  <Badge sx={{ backgroundColor: '#61DAFB', color: '#000', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>React</Badge>
                  <Badge sx={{ backgroundColor: '#F7DF1E', color: '#000', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>JavaScript</Badge>
                  <Badge sx={{ backgroundColor: '#1572B6', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>CSS</Badge>
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
            <Card sx={{ boxShadow: '10px 10px 5px rgb(0, 0, 0, 0.2)' }}>
              <CardMedia component="img" image={php_image} sx={{ width: 300 }} />
              <CardContent>
                <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>PHP Collection</Typography>
                <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                  <Badge sx={{ backgroundColor: '#777BB4', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>PHP</Badge>
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
      </Default>
      <Mobile>
        <Container sx={{ overflowX: 'scroll', pt: 25 }}>
          <Stack direction="row" spacing={3} sx={{ display: 'flex', width: 1000 }}>
            <Card sx={{ boxShadow: '10px 10px 5px rgb(0, 0, 0, 0.2)', width: 300 }}>
              <CardMedia component="img" image={portfolio_2024v_image} sx={{ width: 300, height: 160 }} />
              <CardContent>
                <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>Portfolio 2024v</Typography>
                <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                  <Badge sx={{ backgroundColor: '#61DAFB', color: '#000', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>React</Badge>
                  <Badge sx={{ backgroundColor: '#F7DF1E', color: '#000', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>JavaScript</Badge>
                  <Badge sx={{ backgroundColor: '#1572B6', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>CSS</Badge>
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
              <CardMedia component="img" image={movie_now_image} sx={{ width: 300 }} />
              <CardContent>
                <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>Movie Now</Typography>
                <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                  <Badge sx={{ backgroundColor: '#61DAFB', color: '#000', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>React</Badge>
                  <Badge sx={{ backgroundColor: '#F7DF1E', color: '#000', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>JavaScript</Badge>
                  <Badge sx={{ backgroundColor: '#1572B6', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>CSS</Badge>
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
              <CardMedia component="img" image={php_image} sx={{ width: 300 }} />
              <CardContent>
                <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>PHP Collection</Typography>
                <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                  <Badge sx={{ backgroundColor: '#777BB4', color: '#fff', mr: 0.5, fontSize: '12px', pl: 1, pr: 1, pt: 0.5, pb: 0.5, borderRadius: '7px'}}>PHP</Badge>
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