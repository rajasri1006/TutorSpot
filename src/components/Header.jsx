import Navbar from 'react-bootstrap/Navbar';
import '../styles/Header.css';

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark" className="header-navbar">
      <Navbar.Brand href="#">Tutor Spot</Navbar.Brand>
    </Navbar>
  );
}
