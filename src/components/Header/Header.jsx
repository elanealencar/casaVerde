import './Header.css'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-scroll';


const Menu = () => {
    return (

      <nav className="header">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <ul className="menu-list">
          <li><Link to="#initial" smooth={true} duration={500}>Newsletter</Link></li>
          <li><Link to="#como-fazer" smooth={true} duration={500}>Como Fazer</Link></li>
          <li><Link to="#ofertas" smooth={true} duration={500}>Ofertas</Link></li>
          <li><Link to="#meu-carrinho" smooth={true} duration={500}>Meu Carrinho</Link></li>
        </ul>
      </nav>
    );
  };
  
  export default Menu;