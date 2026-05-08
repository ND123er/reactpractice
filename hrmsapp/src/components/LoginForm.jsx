import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await loginUser({ email, password });

      if (!result.token) {
        setError("Invalid credentials");
        return;
      }

      // store token
      localStorage.setItem("token", result.token);

      // go to dashboard (ProtectedRoute will validate admin)
      navigate("/dashboard", { replace: true });

    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
       <h1 className="text-3xl font-bold mb-2">Welcome!</h1>
      <p className="text-gray-500 mb-6">
        Let's discover the HR solutions in a Snap.
      </p>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          className="w-full border border-[#D0D5DD] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label>Password</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password"
            className="w-full border border-[#D0D5DD] rounded-lg p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400"

            required
          />
        </div>
        <div className="flex items-center justify-between mb-6 text-sm pt-4">
        <label className="flex items-center gap-2">
          <input type="checkbox" />
          Remember me
        </label>
        <a href="#" className="text-blue-500">
          Forgot Password?
        </a>
      </div>

 <div className="flex justify-end">
        <button type="submit" disabled={loading} className="w-full bg-gray-400 text-white py-3 rounded-lg max-w-[90px] self-end">
          {loading ? "Logging in..." : "Log In →"}
        </button>
        </div>
      </form>
    </div>
  );
}