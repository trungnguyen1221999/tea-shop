import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="container flex items-center justify-between py-4">
      <NavLink className="flex items-center" to="/">
        <img className="w-15" src="/public/assets/logo.png" alt="" />
        <h3 className="text-xl font-lobster text-p-700">Tea Shop</h3>
      </NavLink>

      <div className="flex gap-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
