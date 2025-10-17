import "../styles/signup.css";
import { useState } from "react";

export default function Signup() {
  const [status, setStatus] = useState(null); 

   const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

     //Obtengo los datos del formulario
    const form = new FormData(e.target);
    const nombre = form.get("full_name");
    const contraseña = form.get("password");
    const email = form.get("email");

    //Validaciones
    if (!nombre || !contraseña || !email) {
      setStatus("All fields are required");
      return;
    }

    try {
      //Esta es la llamada a la API del metodo POST, aca no la va a haber porque es solo frontend
      
      localStorage.setItem("user", JSON.stringify({ nombre, email, contraseña }));

      setStatus("User created successfully!");
      e.target.reset();

    } catch (err) {
      console.log(err);
      setStatus("Error: " + err.message);
    }

  }
  return (
    <section className="auth">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit} method="post">
        <input type="text" name="full_name" placeholder="Full name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
        {status && <p id="agregar">{status}</p>}
      </form>
    </section>
  );
}
