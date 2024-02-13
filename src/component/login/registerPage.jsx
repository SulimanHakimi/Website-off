import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../header/header";
import axios from "axios";

export default function Register() {
  const [rejData, setRejData] = useState("");
  const data = (e) => {
    setRejData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(rejData);
  const register = () => {
    axios
      .post("http://localhost:2000/accountData", {
        id: 5,
        name: rejData.name,
        email: rejData.email,
        password: rejData.password,
        state: "active",
      })
      .then((res) => console.log("rej succes"));
  };
  return (
    <>
      <Header />
      <div className=" phone-8">
        <div className="hero min-h-screen min-w-full bg-slate-100">
          <div className="hero-content justify-center items-center flex-col laptop:flex-row-reverse">
            <div className="text-center mobile:hidden laptop:block w-2/4 lg:text-left">
              <h1 className="text-5xl font-bold">Join For First Time!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    name="name"
                    onChange={data}
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={data}
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="*********"
                    onChange={data}
                    className="input input-bordered"
                  />
                  <div className="flex justify-between mt-2">
                    <div className="flex items-center focus:outline-none">
                      <input type="checkbox" />

                      <label className="label">
                        <span className="label-text">remmber me</span>
                      </label>
                    </div>
                    <label className="label">
                      <span className="label-text flex justify-end hover:underline">
                        <Link to="/Login"> Already Have an Account</Link>
                      </span>
                    </label>
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary" onClick={register}>
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
