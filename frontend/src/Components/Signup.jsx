import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Login from "./Login";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [pass, setPwd] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  // handle signup
  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:4001/user/signup", data);

      // store token in localStorage
      localStorage.setItem("token", res.data.token);

      // redirect to protected page
      navigate("/");
    } catch (error) {
      console.error(error);
      setErrorMsg(
        error.response?.data?.message || "Signup failed, please try again."
      );
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="modal-box">
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </Link>

          <h3 className="font-bold text-lg">Signup</h3>
          <div>
            {/* Name */}
            <span>Name</span>
            <br />
            <input
              type="text"
              placeholder="Enter your name"
              className="w-80 px-3 border rounded-md outline-none"
              {...register("name", { required: true })}
            />
            <br />
            {errors.name && (
              <span className="text-red-600 ">*This field is required</span>
            )}
            <br />

            {/* Email */}
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-80 px-3 border rounded-md outline-none"
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && (
              <span className="text-red-600 ">*This field is required</span>
            )}
            <br />

            {/* Password */}
            <span>Password</span>
            <br />
            <div className="flex flex-row">
              <input
                type={pass ? "text" : "password"}
                placeholder="Enter your password"
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
              <span className="text-red-600 ">*This field is required</span>
            )}

            {/* Error message */}
            {errorMsg && (
              <p className="text-red-600 mt-2 font-semibold">{errorMsg}</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-20 border-2 border-green-900 bg-green-500 ml-10 mt-3 rounded-md px-3 py-1 text-green-950 font-bold"
            >
              Submit
            </button>

            <h1>
              Already have an account?
              <button
                type="button"
                onClick={() => {
                  document.getElementById("my_modal_3").showModal();
                }}
              >
                <b className="text-blue-600 underline"> Click here to login</b>
              </button>
            </h1>
            <Login />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
