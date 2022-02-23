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
      <svg viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
        />
      </svg>
    </nav>
  );
};

export default Nav;
