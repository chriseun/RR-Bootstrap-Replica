import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/nav';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../images/logo-dark.webp'


const NavBar = () => {

    return (
        <div className="" style={{width: "100%",backgroundColor: "rgb(52, 80, 72)" }}>
            {[false].map((expand) => (
                <Navbar key={expand} bg="" expand={expand}>
                    <Container
                      fluid
                        style={{ flexWrap: "none",backgroundColor: "rgb(52, 80, 72)", width: "100%" }}
                        className=""
                    >
                        <Navbar.Brand
                            className="align-self-start"
                            style={{ margin: "10px 0 0 20px", textAlign: "start"}}
                            href="#home"
                        >

                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                            <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="start"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    <Navbar.Brand
                                        className="align-self-start"
                                        style={{ margin: "5px 0 0 20px" }}
                                        href="#home"
                                    >
                                        <img className="p-2" src={Logo} alt="logo" />
                                    </Navbar.Brand>
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="#action1">Home</Nav.Link>
                                    <Nav.Link href="#action2">Link</Nav.Link>
                                    <Nav.Link href="#action1">Link</Nav.Link>
                                    <Nav.Link href="#action2">Link</Nav.Link>
                                    </Nav>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>

                            <img src={Logo} alt="logo" />
                        </Navbar.Brand>
                        <Navbar
                            id="basic-navbar-nav"
                            className=""
                            style={{ borderRadius: '10px', margin: "5px 0 0 20px", display: "flex" }}
                        >
                            <Nav
                                fill
                                className="mr-auto "
                                style={{ margin: "5px 0 0 20px"}}>
                                <Form className="d-flex" style={{width: "500px"}}>
                                    <Form.Control
                                        type="search"
                                        placeholder="Search products, stores and recipes"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success">
                                        Search
                                    </Button>
                                </Form>
                            </Nav>
                            <Nav>
                                <Nav.Link
                                    style={{color: "white", backgroundColor: "rgb(61, 128, 61)", borderRadius: "20px", textDecoration: "none", margin: "5px 0 0 100px", fontSize: "15px", fontWeight: "bold", width: "80px", textAlign: "center"}}
                                    href="#LogIn"
                                >
                                    Log In
                                </Nav.Link>
                            </Nav>
                            <Button
                                variant="success"
                                style={{ borderRadius: '20px', margin: "5px 0 0 20px", fontSize: "15px", fontWeight: "bold" }}
                            >
                                Sign Up
                            </Button>
                        </Navbar>

                    </Container>
                </Navbar>
            ))}
        </div>
    )
}

export default NavBar
