import { Link } from "react-router-dom";
import Header from "./header";

export default function Register() {
  return (
    <>
      <Header />
      <div className=" phone-8">
        <div className="hero min-h-screen min-w-full bg-slate-100">
          <div className="hero-content justify-center items-center flex-col laptop:flex-row-reverse">
            <div className="text-center w-2/4 lg:text-left">
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
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Famliy Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="famliy"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
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
                    placeholder="*********"
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
                  <button className="btn btn-primary">Register</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
