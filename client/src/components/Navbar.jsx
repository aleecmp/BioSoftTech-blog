import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import { images } from '../constants';

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  const Links = [
    'AI ML',
    'BIG DATA',
    'BIOINFORMATICS',
    'BLOCKCHAIN',
    'EDUCATION',
    'SOFTWARE',
  ];

  const NavLink = ({ link, children }) => (
    <Link className="link" href={`/?cat=${link}`} to={`/?cat=${link}`}>
      {children}
    </Link>
  );

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={images.logoImage} alt="" />
          </Link>
        </div>
        <div className="links">
          {Links.map((link) => (
            <NavLink
              key={link}
              link={link.toLowerCase().replace(/\s/g, '-')}
            >
              <h6>{link === 'AI ML' ? 'AI & ML' : link}</h6>
            </NavLink>
          ))}
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}

          <Link className="link" to="/write">
            <span className="write">Write</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
