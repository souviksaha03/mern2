import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [pass, setPwd] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:4001/user/signin", data);

      
      localStorage.setItem("token", res.data.token);

      navigate("/");
    } catch (err) {
      console.error(err);
      setErrorMsg("Invalid email or password. Please try again.");
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* close modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>

            {/* Email */}
            <div>
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="enter your email"
                className="w-80 px-3 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-red-600">*This field is required</span>
              )}
            </div>

            {/* Password */}
            <div className="mt-3">
              <span>Password</span>
              <br />
              <div className="flex flex-row">
                <input
                  type={pass ? "text" : "password"}
                  placeholder="enter your password"
                  className="w-80 px-3 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                <button
                  type="button"
                  onClick={() => setPwd(!pass)}
                  className="w-20 ml-2"
                >
                  {pass ? (
                    <img
                      src="hidepwd.png"
                      alt="hide"
                      className="w-8 h-8 hover:opacity-80 transition duration-300"
                    />
                  ) : (
                    <img
                      src="sp.png"
                      alt="show"
                      className="w-10 h-10 hover:opacity-80 transition duration-300"
                    />
                  )}
                </button>
              </div>
              {errors.password && (
                <span className="text-red-600">*This field is required</span>
              )}
            </div>

            {/* Error Message */}
            {errorMsg && (
              <p className="text-red-600 font-semibold mt-2">{errorMsg}</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-32 h-10 mt-4 rounded-md bg-green-500 text-white font-bold hover:bg-green-600 transition"
            >
              Login
            </button>

            {/* Signup Link */}
            <h1 className="mt-3">
              Don’t have an account?{" "}
              <Link to="/signup">
                <b className="text-blue-600 underline">Click here to signup</b>
              </Link>
            </h1>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
