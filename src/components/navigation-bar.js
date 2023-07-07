import { NavLink } from 'react-router-dom';
import logo from '../assets/planet.png';
import './navigation-bar.css';

function NavigationBar() {
  return (
    <div className="nav">
      <div className="logo">
        <img src={logo} alt="logo" />
        <p className="company-name">Space Travels Hub</p>
      </div>
      <ul>
        <li>
          <NavLink to="/" className="Link">
            Rocket
          </NavLink>
        </li>
        <li>
          <NavLink to="/dragon" className="Link">
            Dragon
          </NavLink>
        </li>
        <li>
          <NavLink to="/mission" className="Link">
            Mission
          </NavLink>
        </li>
        <li>
          <NavLink to="/myprofile" className="Link">
            My Profile
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavigationBar;
