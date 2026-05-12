import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth";

export default function LoginFormworked() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const decodeJwt = (token) => {
    try {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join(""),
      );
      return JSON.parse(jsonPayload);
    } catch {
      return {};
    }
  };

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
      //imp
      const decoded = decodeJwt(result.token);
      const isOrgPresent = decoded?.is_org_present ?? false;
      const isAdmin = decoded?.is_admin ?? false;

      if (isOrgPresent) navigate("/dashboard");
      else if (isAdmin) navigate("/orgRegister");
      else navigate("/dashboard");
      
      //imp
      // if (isOrgPresent) {
      //   window.location.href = `http://hrmsnap.com/dashboard?token=${result.token}`;
      // } else if (isAdmin) {
      //   window.location.href = `http://hrmsnap.com/dashboard?token=${result.token}`;
      // } else {
      //   window.location.href = "http://hrmsnap.com/dashboard?token=${result.token}";
      // }
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
        </div>
        <div>
          <label>Password</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
