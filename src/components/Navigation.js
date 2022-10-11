import { NavLink, withRouter } from "react-router-dom";
import "../App.css";
const Navigation = (props) => {
  const NavLinks = [
    { name: "Home", to: "/", exact: true },
    { name: "Add Contact", to: "/add-contact" },
  ];
  return (
    <nav>
      <ul>
        {NavLinks.map((nav) => {
          return (
            <li key={nav.to}>
              <NavLink
                to={nav.to}
                exact={nav.exact}
                activeClassName="activeLink"
              >
                {nav.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default withRouter(Navigation);
