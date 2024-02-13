import { useState } from "react";
import Header from "../header/header";
import { Link } from "react-router-dom";
// import axios from "axios";
export default function Login() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios
  //     // .get("https://sulimanhakimi.github.io/json-files/login.json")
  //     .then((res) => setData(res.data.accoutData))
  //     .then((err) => console.log(err));
  // });

  const [dataEmail, setDataEmail] = useState("");
  const [dataPassword, setDataPassword] = useState("");

  const inputChangeEmail = (event) => {
    setDataEmail(event.target.value);
  };
  const inputChangePassword = (event) => {
    setDataPassword(event.target.value);
  };

  const btnClick = () => {};
  return (
    <>
      <Header />
      <div className="artboard  artboard-horizontal phone-8 dark:bg-slate-950 bg-slate-100">
        <div className="hero min-h-screen min-w-full">
          <div className="hero-content justify-center items-center mobile:w-full laptop:flex-row-reverse">
            <div className="text-center mobile:hidden laptop:block w-2/4 laptop:text-left">
              <h1 className="text-5xl font-bold dark:text-white">
                Join For First Time!
              </h1>
              <p className="py-6 dark:text-white">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full laptop:max-w-sm mobile:h-1/3  shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text dark:text-white">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    onChange={inputChangeEmail}
                    value={dataEmail}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text dark:text-white">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="*********"
                    name="password"
                    className="input input-bordered"
                    value={dataPassword}
                    onChange={inputChangePassword}
                  />
                  <div className="flex justify-between">
                    <Link>
                      <label className="label">
                        <span className="label-text dark:text-white cursor-pointer">
                          Forget Password
                        </span>
                      </label>
                    </Link>
                    <Link to="/Register">
                      <label className="label">
                        <span className="label-text dark:text-white hover:underline cursor-pointer">
                          Creat Account
                        </span>
                      </label>
                    </Link>
                  </div>
                </div>

                <Link
                  onClick={btnClick}
                  to="/"
                  className="btn btn-primary bg-green-700 dark:text-white"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
