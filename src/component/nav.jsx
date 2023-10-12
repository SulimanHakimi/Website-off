import React from "react";
import { Link } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";

const Nav = () => {
  return (
    <div>
      <ul className="menu justify-between flex laptop:gap-6 tablet:gap-2 mobile:hidden tablet:flex tablet:flex-row rounded-box">
        <li>
        <Link to="/">
            <button>Home</button>
          </Link>
        </li>
        <li>
          <Link to="/gallary">
            <button>Gallary</button>
          </Link>
        </li>
        <li>
          <Link to="/Register"><button>Register</button></Link>
        </li>
        <li>
         <Link to="/Login"> <button>Login</button></Link>
        </li>
      </ul>

      <button className="mobile:block tablet:hidden">
        {<FiAlignJustify fontSize={25} />}
      </button>
    </div>
  );
};

export default Nav;
