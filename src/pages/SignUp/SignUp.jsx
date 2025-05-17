import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photo)
          .then(() => {
            console.log("user profile info updated");

            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          })
          .catch((error) => console.log(error));
      })
      .then((error) => {
        const errors = error.message;
        console.log(errors);
      });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss| Sign Up</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold"> SignUp Now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut
              assumenda.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <fieldset className="fieldset">
                <div className="form-control">
                  <label className="label">Name</label>
                  <input
                    name="name"
                    type="text"
                    {...register("name", { required: true })}
                    className="input"
                    placeholder="Name"
                  />
                  {errors.name && (
                    <span className="text-red-600 ">Name is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">Photo URL</label>
                  <input
                    type="text"
                    {...register("photo", { required: true })}
                    className="input"
                    placeholder="photo URL...."
                  />
                  {errors.photo && (
                    <span className="text-red-600 ">Photo URL is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">Email</label>
                  <input
                    name="email"
                    type="email"
                    {...register("email", { required: true })}
                    className="input"
                    placeholder="Email"
                  />
                  <div>
                    {errors.email && (
                      <span className="text-red-600 ">Name is required</span>
                    )}
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">Password</label>
                  <input
                    name="password"
                    type="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z]).{8}/,
                    })}
                    className="input"
                    placeholder="Password"
                  />
                  <div>
                    {errors.password?.type === "required" && (
                      <p role="alert" className="text-red-600">
                        password is required
                      </p>
                    )}
                    {errors.password?.type === "minLength" && (
                      <p role="alert" className="text-red-600">
                        password must be 6 character
                      </p>
                    )}
                    {errors.password?.type === "maxLength" && (
                      <p role="alert" className="text-red-600">
                        password must be less then 20 characters
                      </p>
                    )}
                    {errors.password?.type === "pattern" && (
                      <p role="alert" className="text-red-600">
                        password must have one upper case , one lower case , one
                        number and one special characters
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">SignUp</button>
              </fieldset>
            </form>
            <p className="text-center mb-4">
              <small>
                Already hav an account?{" "}
                <Link className="text-blue-600" to="/login">
                  Login
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
