import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section className="flex flex-col items-start gap-5 p-5 bg-red-300">
      <h3 className="text-xl font-semibold">Login</h3>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Username" />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" />
        <button type="submit">Sign in</button>

        <a href="#">Forgot password?</a>
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
        <p>Don{"'"}t have an account?</p>
        <Link to="/register">Register</Link>
      </div>
    </section>
  );
};

export default Login;
