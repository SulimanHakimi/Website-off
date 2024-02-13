import { Link } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";

export default function Header() {
  return (
    <div className="navbar bg-gray-100">
      <div className="flex-1">
        <Link to="/" className="font-semibold pl-2 normal-case text-xl">
          Suliman Hakimi
        </Link>
      </div>
      <div>
        <ul className="menu justify-between flex laptop:gap-6 tablet:gap-2 mobile:hidden tablet:flex tablet:flex-row rounded-box">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/Photoghraphy">Photoghraphy</Link>
          </li>
          <li>
            <Link to="/Shope">Shope</Link>
          </li>
          <li>
            <Link to="/Donation">Donation</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </ul>
        <button className="mobile:block tablet:hidden">
          <FiAlignJustify fontSize={25} />
        </button>
      </div>
    </div>
  );
}
