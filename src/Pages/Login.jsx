import "../assets/styles/login.css";

const Login = () => {
  return (
    <div className="login-container">
      <h1>Page de Connexion</h1>
      <form>
        <label>
          Nom d'utilisateur:
          <input type="text" name="username" />
        </label>
        <label>
          Mot de passe:
          <input type="password" name="password" />
        </label>
        <button type="submit">Connexion</button>
      </form>
    </div>
  );
};

export default Login;
