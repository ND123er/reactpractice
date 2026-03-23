export default function LoginForm() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Welcome!</h1>
      <p className="text-gray-500 mb-6">
        Let's discover the HR solutions in a Snap.
      </p>

      {/* Email */}
      <div className="mb-4">
        <label className="block text-sm mb-1">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Password */}
      <div className="mb-4">
        <label className="block text-sm mb-1">Password</label>
        <div className="relative">
          <input
            type="password"
            placeholder="Enter your Password"
            className="w-full border rounded-lg p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <span className="absolute right-3 top-3 cursor-pointer">
            👁️
          </span>
        </div>
      </div>

      {/* Remember + Forgot */}
      <div className="flex items-center justify-between mb-6 text-sm">
        <label className="flex items-center gap-2">
          <input type="checkbox" />
          Remember me
        </label>
        <a href="#" className="text-blue-500">
          Forgot Password?
        </a>
      </div>

      {/* Button */}
      <div className="flex justify-end"><button className="w-full bg-gray-400 text-white py-3 rounded-lg max-w-[90px] self-end">
        Log In →
      </button></div>
    </div>
  );
}