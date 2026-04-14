
import { useDispatch } from "react-redux";
import { login } from "./authSlice";

export default function Login(){
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Login</h2>
      <button onClick={()=>dispatch(login({name:"Demo User"}))}>
        Fake Login
      </button>
    </div>
  );
}
