import { NavLink } from 'react-router-dom';

import './Nav.css';

const Nav = () => {
  const getClass = ({ isActive }) => (isActive ? 'active' : '');

  return (
    <nav className="navbar">
      <a href="/">
        <h2>Bookstore CMS</h2>
      </a>
      <ul className="links">
        <li>
          <NavLink className={getClass} to="/">
            BOOKS
          </NavLink>
        </li>
        <li>
          <NavLink className={getClass} to="/categories">
            CATEGORIES
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
