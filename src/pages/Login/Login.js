import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.scss';

function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [isValid, setisValid] = useState(false);

  const getId = e => {
    const idValue = e.target.value;
    setId(idValue);
    idValue.includes('@' && '.com') && pw.length > 5
      ? setisValid(true)
      : setisValid(false);
  };
  const getPw = e => {
    const pwValue = e.target.value;
    setPw(pwValue);
    pwValue.length > 5 && id.includes('@' && '.com')
      ? setisValid(true)
      : setisValid(false);
  };

  const navigate = useNavigate();
  const go_signup = () => {
    navigate('/signup');
  };
  const go_main = () => {
    navigate('/');
  };

  return (
    <>
      <div className="border_box_login">
        <div className="header_content_login">
          <h1 className="login-text-h">Login</h1>
          <p className="login-text-p">Please enter your e-mail password:</p>
        </div>

        <div className="input_content_login">
          <input
            className="login_input"
            placeholder="Email"
            onChange={getId}
          ></input>
          <input
            className="login_input"
            type="password"
            placeholder="Password"
            onChange={getPw}
          ></input>
          <button
            className="login_btn"
            type="submit"
            disabled={isValid ? false : true}
            onClick={go_main}
            onSubmit={''}
          >
            Login
          </button>
        </div>

        <div className="link_content_login">
          <span className="span_link login_span">Don't have an account? </span>
          <span className="login_span" onClick={go_signup}>
            Create one
          </span>
        </div>
      </div>
    </>
  );
}

export default Login;
