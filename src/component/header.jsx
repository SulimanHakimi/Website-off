import { Link } from "react-router-dom";
import Nav from "./nav";

export default function Header() {


  return (
    <div>
      <div className="navbar  bg-slate-100 shadow-md">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">Suliman Hakimi</Link>
        </div>
        <Nav/>
      </div>
    </div>
  );
}
