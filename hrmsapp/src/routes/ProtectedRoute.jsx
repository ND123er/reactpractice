// import { Navigate, Outlet } from "react-router-dom";

// const decodeJwt = (token) => {
//   try {
//     const base64Url = token.split(".")[1];
//     const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
//     const jsonPayload = decodeURIComponent(
//       atob(base64)
//         .split("")
//         .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
//         .join("")
//     );
//     return JSON.parse(jsonPayload);
//   } catch {
//     return null;
//   }
// };

// export default function ProtectedRoute() {
//   const token = localStorage.getItem("token");

//   if (!token) {
//     return <Navigate to="/" replace />;
//   }

//   const decoded = decodeJwt(token);

//   const isAdmin = decoded?.is_admin;

//   if (!isAdmin) {
//     return <Navigate to="/" replace />;
//   }

//   return <Outlet />;
// }
import { Navigate, Outlet } from "react-router-dom";

const decodeJwt = (token) => {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch {
    return null;
  }
};

export default function ProtectedRoute() {
  const token = localStorage.getItem("token");

  // 1. No token → login
  if (!token) {
    return <Navigate to="/" replace />;
  }

  const decoded = decodeJwt(token);

  // 2. Invalid token → force logout
  if (!decoded) {
    localStorage.removeItem("token");
    return <Navigate to="/" replace />;
  }

  // 3. Role check
  const isAdmin = decoded?.is_admin === true;

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  // 4. Allow access
  return <Outlet />;
}