import React from "react";

const LoginedNav = () => {
  return (
    <div>
      <ul className="menu hidden justify-between lg:menu-horizontal rounded-box">
        <li>
          <button
            className=""
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Inbox
            <span className="badge badge-sm">99+</span>
          </button>
          <dialog
            id="my_modal_1"
            className="modal flex justify-center items-center"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click the button below to close
              </p>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </li>
        <li>
          <button
            className=""
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            Stats
            <span className="badge badge-xs badge-info"></span>
          </button>
          <dialog
            id="my_modal_2"
            className="modal flex justify-center items-center"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click the button below to close
              </p>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </li>
        <li>
          <button
            className=""
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Updates
            <span className="badge badge-sm badge-warning">NEW</span>
          </button>
          <dialog
            id="my_modal_3"
            className="modal flex justify-center items-center"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">Not any update avilible yet</p>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </li>
      </ul>
    </div>
  );
};

export default LoginedNav;
