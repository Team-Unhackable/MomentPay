import { Outlet, Link } from "react-router-dom";
import "./pages.css"

const Layout = () => {
  return (
    <>
      <nav class="navbar">
        <ul>
            <Link to="/">APP</Link>
            <Link to="/expense">Expense</Link>
            <Link to="/user">User Info</Link>
            {/* <Link to="/login">Login</Link> */}
            <Link to="/subscription">Subscription</Link>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;