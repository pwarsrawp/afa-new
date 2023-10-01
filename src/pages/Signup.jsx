import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postOne } from "../functions/api.calls";
const api_url = import.meta.env.VITE_API_URL;

function Signup() {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await postOne(`${api_url}/auth/signup`, {
        fullname,
        email,
        password,
        phone,
      });
      navigate("/login");
    } catch (error) {
      console.log("Issue with the sign up: ", error);
    }
  };

  return (
    <div className="signup-form">
      <h1>Registro</h1>
      <form onSubmit={handleSignup}>
        <label>Nombre Madre/Padre:</label>
        <input
          value={fullname}
          required
          onChange={(event) => {
            setFullName(event.target.value);
          }}
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          required
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <label>Contraseña:</label>
        <input
          type="password"
          value={password}
          required
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <label>Telefono:</label>
        <input
          type="tel"
          value={phone}
          placeholder="+34 612 345 678"
          required
          onChange={(event) => {
            setPhone(event.target.value);
          }}
        />
        <button type="submit">Aceptar</button>
      </form>

      <div className="signup-form-bottom-text">
        <p>Ya tienes cuenta?</p>
        <Link to={"/login"}>Login</Link>
      </div>
    </div>
  );
}

export default Signup;
