import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <section id="page1">
        <div className="All">
          <div className="a a1"></div>
          <div className="a a2"></div>

          <div className="a a3">
            <p className="into"> Welcome,</p>
          </div>

          <div className="a a4">
            <div className="form">
              {/* {error.length >0 ? <div className="alert alert-danger"> </div>:''}            */}

              <form>
                <label htmlFor="email">Email:</label>
                <input
                  className="form-control mb-4"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter  email"
                />

                <label htmlFor="password">Password:</label>
                <input
                  className="form-control mb-4 "
                  type="password"
                  id="password"
                  name="password"
                  placeholder=" Password"
                />

                <div className="forget">
                  <Link className="nav-link " to="/forget-password">
                    Forget Password?{" "}
                  </Link>
                </div>

                <button className="btn  btn-lg   my-5 " type="submit">
                  Log in
                  {/* {islooding ===true ? <i className='fas fa-spinner fa-spin' ></i> : 'Log in' } */}
                </button>
              </form>
            </div>
            <div className="sign">
              <div className="row">
                <div className="col-12">
                  {" "}
                  <span> Don't have an account ?</span>{" "}
                  <Link className="nav-link " to="/register">
                    Sign Up{" "}
                  </Link>
                  <p>or login with:</p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-4"></div>

              <div className="col-3">
                {" "}
                <a href="http://">
                  {" "}
                  <i
                    id="u1"
                    class="fa-brands fa-facebook fa-bounce  fa-2x "
                  ></i>
                </a>{" "}
              </div>

              <div className="col-3">
                {" "}
                <a href="http://">
                  {" "}
                  <i id="u2" class="fa-brands fa-google fa-bounce fa-2x"></i>
                </a>{" "}
              </div>
            </div>
          </div>
          <div className="a a5"></div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
