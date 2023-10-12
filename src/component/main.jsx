import { Link } from "react-router-dom";
export default function MainContent() {
  return (
    <>
      <div className="hero min-h-screen laptop:flex-row  bg-slate-100">
        <div className="hero-content mobile:flex-col mobile:justify-center laptop:flex-row">
          <img
            src="https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg?w=2000"
            className="w-72  h-60 rounded-lg shadow-2xl"
          />
          <div className="text-center laptop:text-left laptop:px-0 tablet:px-40">
            <h1 className="text-5xl font-bold">Suliman Hakimi!</h1>
            <p className="py-6 laptop:pr-60 ">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
           <Link to="/Login"> <button className="btn btn-primary">Get Started</button></Link>
          </div>
        </div>
      </div>
    </>
  );
}
