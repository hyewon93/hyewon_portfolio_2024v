import { AppBar, Box, Button, Container, CssBaseline, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

    const { pathname } = useLocation();

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 767 })
        return isMobile ? children : null
    }
    const Default = ({ children }) => {
        const isNotMobile = useMediaQuery({ minWidth: 768 })
        return isNotMobile ? children : null
    }

    return (
        <CssBaseline>
            <AppBar sx={{ background: 'transparent', height: '70px', zIndex: '9999', boxShadow: 'none' }}>
                <Container maxWidth="x1">
                    <Default>
                        <Toolbar disableGutters>
                            <Typography variant='h4' sx={{ m: 3, mt: 4, color: '#000', fontFamily: 'Anta !important' }}>Hyewon Bae</Typography>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                <Link to="/" style={{ textDecoration: 'none' }}>
                                    <Button 
                                        key="Home"
                                        sx={{ mr: 3, ml: 3, mt: 3, mb: 1, color: '#000', fontWeight: pathname === "/" ? 'bold' : '', display: 'block', '&:hover': { fontWeight: 'bold', background: 'none' } }}
                                    >
                                        Home
                                    </Button>
                                    <Box sx={{ backgroundColor: '#802c86', height: '2px', mr: 3, ml: 3, display: pathname === "/" ? 'block' : 'none' }}></Box>
                                </Link>
                                <Link to="/profile" style={{ textDecoration: 'none' }}>
                                    <Button 
                                        key="Profile"
                                        sx={{ mr: 3, ml: 3, mt: 3, mb: 1, color: '#000', fontWeight: pathname === "/profile" ? 'bold' : '', display: 'block', '&:hover': { fontWeight: 'bold', background: 'none' } }}
                                    >
                                        Profile
                                    </Button>
                                    <Box sx={{ backgroundColor: '#802c86', height: '2px', mr: 3, ml: 3, display: pathname === "/profile" ? 'block' : 'none' }}></Box>
                                </Link>
                                <Link to="/skills" style={{ textDecoration: 'none' }}>
                                    <Button 
                                        key="Skills"
                                        sx={{ mr: 3, ml: 3, mt: 3, mb: 1, color: '#000', fontWeight: pathname === "/skills" ? 'bold' : '', display: 'block', '&:hover': { fontWeight: 'bold', background: 'none' } }}
                                    >
                                        Skills
                                    </Button>
                                    <Box sx={{ backgroundColor: '#802c86', height: '2px', mr: 3, ml: 3, display: pathname === "/skills" ? 'block' : 'none' }}></Box>
                                </Link>
                                <Link to="/projects" style={{ textDecoration: 'none' }}>
                                    <Button 
                                        key="Projects"
                                        sx={{ mr: 3, ml: 3, mt: 3, mb: 1, color: '#000', fontWeight: pathname === "/projects" ? 'bold' : '', display: 'block', '&:hover': { fontWeight: 'bold', background: 'none' } }}
                                    >
                                        Projects
                                    </Button>
                                    <Box sx={{ backgroundColor: '#802c86', height: '2px', mr: 3, ml: 3, display: pathname === "/projects" ? 'block' : 'none' }}></Box>
                                </Link>

                                <Link to="/career" style={{ textDecoration: 'none' }}>
                                    <Button 
                                        key="Career"
                                        sx={{ mr: 3, ml: 3, mt: 3, mb: 1, color: '#000', fontWeight: pathname === "/career" ? 'bold' : '', display: 'block', '&:hover': { fontWeight: 'bold', background: 'none' } }}
                                    >
                                        Career
                                    </Button>
                                    <Box sx={{ backgroundColor: '#802c86', height: '2px', mr: 3, ml: 3, display: pathname === "/career" ? 'block' : 'none' }}></Box>
                                </Link>
                            </Box>
                        </Toolbar>
                    </Default>
                    <Mobile>

                    </Mobile>
                </Container>
            </AppBar>
        </CssBaseline>
    )
}

export default Navbar