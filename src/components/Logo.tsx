import { Link } from "react-router-dom";

const Logo = ({ light = false }: { light?: boolean }) => (
  <Link to="/" className="group flex items-center gap-2.5">
    <img
      src="/nvlogo.png"
      alt="Nova Brands Logo"
      className={`h-44 w-auto  duration-500 group-hover:scale-105 ${light ? "" : ""}`}
    />
  </Link>
);

export default Logo;
