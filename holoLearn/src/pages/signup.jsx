import "../styles/signup.css";

export default function Signup() {
  return (
    <section className="auth">
      <h2>Create Account</h2>
      <form>
        <input type="text" placeholder="Full name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
    </section>
  );
}
