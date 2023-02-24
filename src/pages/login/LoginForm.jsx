import React, { useState } from 'react';
import "./login.css"

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí iría la lógica para enviar el formulario al servidor
  };

  return (
    <div className="container">
      {/* fancy stuff down here */}

      <form onSubmit={handleSubmit}>
      <div class="d-flex justify-content-center h-100">
        <div class="card">
          <div class="card-header">
            <h3>Sign In</h3>
            <div class="d-flex justify-content-end social_icon">
              <span><i class="fab fa-facebook-square"></i></span>
              <span><i class="fab fa-google-plus-square"></i></span>
              <span><i class="fab fa-twitter-square"></i></span>
            </div>
          </div>
          <div class="card-body">
            <form>
              <div class="input-group form-group">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fas fa-user"></i></span>
                </div>
                <input type="text" class="form-control" placeholder="username" value={username} onChange={handleUsernameChange} />

              </div>
              <div class="input-group form-group">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fas fa-key"></i></span>
                </div>
                <input type="password" class="form-control" placeholder="password" value={password} onChange={handlePasswordChange}/>
              </div>
              <div class="row align-items-center remember">
                <label>
                  Remember Me
                  <input type="checkbox" />
                </label>
              </div>
              <div class="form-group">
                <input type="submit" value="Login" class="btn float-right login_btn" />
              </div>
            </form>
          </div>
          <div class="card-footer">
            <div class="d-flex justify-content-center links">
              Don't have an account?<a href="nothing">Sign Up</a>
            </div>
            <div class="d-flex justify-content-center">
              <a href="nothing">Forgot your password?</a>
            </div>
          </div>
        </div>
      </div>

      {/* fancy stuff up here */}
      
        {/* <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <button type="submit">Log in</button> */}
      </form>
    </div>
  );
}

export default LoginForm;
