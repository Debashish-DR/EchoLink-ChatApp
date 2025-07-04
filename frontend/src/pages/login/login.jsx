import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin"; // ✅ import added

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex justify-center flex-col item-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-blue-200 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-300"> EchoLink</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="input input-bordered w-full max-w-xs h-10"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="input input-bordered w-full max-w-xs h-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Link
            to={"/signup"}
            className="text-sm hover:underline hover:text-blue-500 mt-2 inline-block"
          >
            {"Don't"} have an account ?
          </Link>

          <div>
            <button
              className="btn btn-block btn-sm mt-2 max-w-xs"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login; // ✅ capitalized export

//STARTER CODE FOR THIS FILE:

// import React from "react";

// const login = () => {
//   return (
//     <div className="flex justify-center flex-col item-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-blue-200 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Login
//           <span className="text-blue-300"> EchoLink</span>
//         </h1>

//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Username"
//               className="input input-bordered w-full max-w-xs h-10"
//             />
//           </div>

//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               className="input input-bordered w-full max-w-xs h-10"
//             />
//           </div>

//           <a
//             href="a"
//             className="text-sm hover:underline hover:text-blue-500 mt-2 inline-block"
//           >
//             {"Don't"} have ab account?
//           </a>

//           <div>
//             <button className="btn btn-block btn-sm mt-2 max-w-xs">
//               Login
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default login;
