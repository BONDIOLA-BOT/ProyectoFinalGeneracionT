import "../styles/login.css";
import { useState } from "react";

export default function Login() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    //Obtengo los datos del formulario
    const form = new FormData(e.target);
    const contraseña = form.get("password");
    const email = form.get("email");

    //Validaciones
    if (!contraseña || !email) {
      setStatus("All fields are required");
      return;
    }

     try {
      
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user || user.email !== email || user.contraseña !== contraseña) {
        setStatus("Invalid email or password");
        return;
      }

      setStatus("Access granted successfully!");
      e.target.reset();

    } catch (err) {
      console.log(err);
      setStatus("Error: " + err.message);
    }


  };
  return (
    <section className="auth">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Login</button>
        {status && <p id="agregar">{status}</p>}
      </form>
    </section>
  );
}
