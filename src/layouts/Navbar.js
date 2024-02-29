import { AppBar, Box, Button, Container, CssBaseline, Stack, Toolbar, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

    const { pathname } = useLocation();

    return (
        <CssBaseline>
            <AppBar sx={{ background: 'transparent', postion: 'sticky', height: '70px', zIndex: '9999', boxShadow: 'none' }}>
                <Container maxWidth="x1">
                        <Toolbar disableGutters>
                            <Stack direction={{ xs: "column", sm: "row", md: "row" }}>
                                <Typography variant='h4' sx={{ m: 3, mt: 4, color: '#000', fontFamily: 'Anta !important' }}>Hyewon Bae</Typography>
                                <Box sx={{ flexGrow: 1, display: 'flex', mt: 1 }}>
                                    <Link to="/" style={{ textDecoration: 'none' }}>
                                        <Button 
                                            key="Home"
                                            sx={{ mr: {xs: 1, sm: 3, md: 3}, ml: {xs: 1, sm: 3, md: 3}, mt: {xs: 1, sm: 3, md: 3}, mb: 1, color: '#000', fontSize: { xs: "10px", sm: "14px", md: "14px" }, fontWeight: pathname === "/" ? 'bold' : '', display: 'block', '&:hover': { fontWeight: 'bold', background: 'none' } }}
                                        >
                                            Home
                                        </Button>
                                        <Box sx={{ backgroundColor: '#802c86', height: '2px', mr: 3, ml: 3, display: pathname === "/" ? 'block' : 'none' }}></Box>
                                    </Link>
                                    <Link to="/profile" style={{ textDecoration: 'none' }}>
                                        <Button 
                                            key="Profile"
                                            sx={{ mr: {xs: 1, sm: 3, md: 3}, ml: {xs: 1, sm: 3, md: 3}, mt: {xs: 1, sm: 3, md: 3}, mb: 1, color: '#000', fontSize: { xs: "10px", sm: "14px", md: "14px" }, fontWeight: pathname === "/profile" ? 'bold' : '', display: 'block', '&:hover': { fontWeight: 'bold', background: 'none' } }}
                                        >
                                            Profile
                                        </Button>
                                        <Box sx={{ backgroundColor: '#802c86', height: '2px', mr: 3, ml: 3, display: pathname === "/profile" ? 'block' : 'none' }}></Box>
                                    </Link>
                                    <Link to="/projects" style={{ textDecoration: 'none' }}>
                                        <Button 
                                            key="Projects"
                                            sx={{ mr: {xs: 1, sm: 3, md: 3}, ml: {xs: 1, sm: 3, md: 3}, mt: {xs: 1, sm: 3, md: 3}, mb: 1, color: '#000', fontSize: { xs: "10px", sm: "14px", md: "14px" }, fontWeight: pathname === "/projects" ? 'bold' : '', display: 'block', '&:hover': { fontWeight: 'bold', background: 'none' } }}
                                        >
                                            Projects
                                        </Button>
                                        <Box sx={{ backgroundColor: '#802c86', height: '2px', mr: 3, ml: 3, display: pathname === "/projects" ? 'block' : 'none' }}></Box>
                                    </Link>

                                    <Link to="/career" style={{ textDecoration: 'none' }}>
                                        <Button 
                                            key="Career"
                                            sx={{ mr: {xs: 1, sm: 3, md: 3}, ml: {xs: 1, sm: 3, md: 3}, mt: {xs: 1, sm: 3, md: 3}, mb: 1, color: '#000', fontSize: { xs: "10px", sm: "14px", md: "14px" }, fontWeight: pathname === "/career" ? 'bold' : '', display: 'block', '&:hover': { fontWeight: 'bold', background: 'none' } }}
                                        >
                                            Career
                                        </Button>
                                        <Box sx={{ backgroundColor: '#802c86', height: '2px', mr: 3, ml: 3, display: pathname === "/career" ? 'block' : 'none' }}></Box>
                                    </Link>
                                </Box>
                            </Stack>
                        </Toolbar>
                    
                </Container>
            </AppBar>
        </CssBaseline>
    )
}

export default Navbar