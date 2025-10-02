import { Navbar, Container } from "react-bootstrap";
export const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">***</Navbar.Brand>
                <Navbar.Toggle aria-control="#home">Basic nav</Navbar.Toggle>
                <Navbar.Collapse id="basic-nav">


                </Navbar.Collapse>
            </Container>
        </Navbar>
    )


}