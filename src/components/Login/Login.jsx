import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import landingpage from "../../assets/landingpage.jpg";

const Login = () => {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/")
    // Handle login logic here
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-200">
    <div
      className="h-[93%] w-[95%] rounded-lg flex justify-center items-center"
      style={{
        backgroundImage: `url(${landingpage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-gray-700 bg-opacity-25 p-8 rounded-md shadow-lg w-[90%] sm:w-[400px]">
        <h1 className="text-3xl text-gray-200 font-bold mb-6 text-center">
          Login
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-gray-300 font-medium">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-300 font-medium"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
  );
};

export default Login;
