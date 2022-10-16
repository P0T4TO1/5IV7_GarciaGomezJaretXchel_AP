import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "../assets/img/cookingpotLogo.png";
import "../assets/css/styles.css"
import "../assets/bootstrap/css/bootstrap.min.css"

function NavBar (){
    return (
        <>
        <Navbar className="navbar-dark navbar-expand-lg py-3" style={styleNavbar}>
            <Container>
                <Navbar.Brand className="d-flex align-items-center">
                    <img draggable="false" height="60" src={logo} alt="imageLogo"/>
                        <span>Recetas App</span>
                </Navbar.Brand>
            </Container>
        </Navbar>
        </>
    )
}

const styleNavbar =  {
    boxShadow: "0 4px 12px 0 rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 5%)",
    background: "rgb(69,81,92)",
}

export default NavBar;