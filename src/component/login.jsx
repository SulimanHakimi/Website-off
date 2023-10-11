import Header from "./header";

export default function Login() {
  return (
    <>
    <Header/>
      <div className="artboard artboard-horizontal phone-8 dark:bg-slate-950">
        <div className="hero min-h-screen min-w-full bg-base-200">
          <div className="hero-content justify-center items-center mobile:flex-col tablet:flex-row-reverse laptop:flex-row-reverse">
            <div className="text-center w-3/4 laptop:text-left">
              <h1 className="text-5xl font-bold dark:text-white">Join For First Time!</h1>
              <p className="py-6 dark:text-white">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full laptop:max-w-sm mobile:max-w-xs  shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text dark:text-white">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text dark:text-white">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="*********"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary dark:text-white">Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
