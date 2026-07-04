import { Link } from "react-router-dom";
import "./Header.css";
export function Header() {
  return (
    <>
      <nav className="header">
        <div className="nav-logo">
          <h1>Benago</h1>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
        </div>
      </nav>
      <hr />
    </>
  );
}
