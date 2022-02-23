import { NavLink } from 'react-router-dom';

import './Nav.css';

const Nav = () => {
  const getClass = ({ isActive }) => (isActive ? 'active' : '');

  const toggleDark = () => {
    document.body.classList.toggle('dark');
    if (document.body.className === 'dark') {
      document.documentElement.style.setProperty('--text-color', '#fff');
      document.documentElement.style.setProperty('--white-color', '#121620');
      document.documentElement.style.setProperty('--gray-color', '#222c44');
      document.documentElement.style.setProperty(
        '--lightgray-color',
        '#1c212e',
      );
    } else {
      document.documentElement.style.setProperty('--text-color', '#000');
      document.documentElement.style.setProperty('--white-color', '#fff');
      document.documentElement.style.setProperty('--gray-color', '#e8e8e8');
      document.documentElement.style.setProperty(
        '--lightgray-color',
        '#f5f6fa',
      );
    }
  };

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
      <svg viewBox="0 0 24 24" onClick={toggleDark}>
        <path
          fill="currentColor"
          d="M12,18C11.11,18 10.26,17.8 9.5,17.45C11.56,16.5 13,14.42 13,12C13,9.58 11.56,7.5 9.5,6.55C10.26,6.2 11.11,6 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z"
        />
      </svg>
    </nav>
  );
};

export default Nav;
