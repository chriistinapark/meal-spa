
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand text-white" to="/">
          Meal SPA
        </NavLink>

        
        <div className="d-flex gap-3">
          <NavLink className="nav-link text-white" to="/">Home</NavLink>
          <NavLink className="nav-link text-white" to="/about">About</NavLink>
          <NavLink className="nav-link text-white" to="/contact">Contact</NavLink>
        </div>

      </div>
    </nav>
  );
}

