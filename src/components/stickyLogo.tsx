import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export default function StickyLogo() {
  return (
    <div className="sticky top-0 z-50 flex justify-center pt-4">
      <Link to="/">
        <img
          src={logo}
          alt="Logo"
          className="h-14"
        />
      </Link>
    </div>
  );
}
