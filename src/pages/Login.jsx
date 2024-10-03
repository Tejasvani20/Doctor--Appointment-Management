
import { useState } from "react";

const Login = () => {
  const [state, setState] = useState('Sign Up'); // Tracks whether the form is for "Sign Up" or "Login"
  const [email, setEmail] = useState(''); // Tracks email input
  const [password, setPassword] = useState(''); // Tracks password input
  const [name, setName] = useState(''); // Tracks name input

  // Handles form submission
  const onSubmitHandler = async (event) => {
    event.preventDefault(); // Prevents page refresh
    console.log({ name, email, password });
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <form onSubmit={onSubmitHandler} className="bg-white p-8 rounded-lg shadow-lg w-80">
        <div>
          <p className="text-center text-2xl mb-4 font-semibold">
            {state === 'Sign Up' ? "Create Account" : "Login"}
          </p>
        </div>

        {/* Name input for Sign Up */}
        {state === 'Sign Up' && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        )}

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          {state === 'Sign Up' ? "Sign Up" : "Login"}
        </button>

        {/* Switch between Sign Up and Login */}
        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={() => setState(state === 'Sign Up' ? 'Login' : 'Sign Up')}
            className="text-blue-500 hover:underline"
          >
            {state === 'Sign Up' ? "Already have an account? Login" : "Don't have an account? Sign Up"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
