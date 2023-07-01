const Login = () => {
  return (
    <section className="min-h-screen pt-20">
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </section>
  );
};

export default Login;
