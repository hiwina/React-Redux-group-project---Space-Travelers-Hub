import { NavLink } from 'react-router-dom';
import logo from '../assets/planet.png';
import './navigation-bar.css';

function NavigationBar() {
  return (
    <div className="nav">
      <div className="logo">
        <img src={logo} alt="logo" />
        <p className="campany-name">Space Travels Hub</p>
      </div>
      <ul>
        <li>
          <NavLink to="/" className="Link" activeClassName="active" exact>
            Rocket
          </NavLink>
        </li>
        <li>
          <NavLink to="/mission" className="Link" activeClassName="active">
            Mission
          </NavLink>
        </li>
        <li>
          <NavLink to="/myprofile" className="Link" activeClassName="active">
            My Profile
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavigationBar;
