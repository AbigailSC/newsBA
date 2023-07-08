import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <section className="min-h-screen pt-20">
      <h3>Sing up for a new account</h3>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Username" />
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Email" />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>

        <label htmlFor="remember">
          Remember me
          <input type="checkbox" name="remember" id="remember" />
        </label>
      </form>
      <div>
        <span>or continue with</span>
        <div>
          <button>Google</button>
          <button>Facebook</button>
          <button>Github</button>
        </div>
      </div>
      <div>
        <p>Do you have an account?</p>
        <Link to="/login">Login</Link>
      </div>
    </section>
  );
};

export default Register;
