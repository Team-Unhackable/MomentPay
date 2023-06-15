import { Outlet, Link } from "react-router-dom";
import "./pages.css"

const Layout = () => {
  return (
    <>
      <nav class="navbar">
        <ul>
            <Link to="/">APP</Link>
            <Link to="/expense">Expense</Link>
            <Link to="/user">User information</Link>
            {/* <Link to="/login">Login</Link> */}
            <Link to="/order">Order</Link>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;