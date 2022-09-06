import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Account from '../Account/Account';

import './Login.scss';

function Login() {
  const pwdRef = useRef('');
  const emailRef = useRef('');

  const EMAIL_REGEX = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const invalidRef = useRef();
  const [invalid, setInvalid] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();
  const go_signup = () => {
    navigate('/signup');
  };
  const go_main = () => {
    navigate('/');
  };

  const postHandlerLogin = e => {
    e.preventDefault();
    console.log(pwdRef.current.value);
    console.log(emailRef.current.value);

    fetch('http://localhost:10010/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        pwd: pwdRef.current.value,
        email: emailRef.current.value,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          go_main();
        } else {
          setInvalid('activated');
        }
      });
  };

  const tokenStatus = localStorage.getItem('token');

  const getToken = () => {
    if (tokenStatus) {
      tokenStatus !== null ? setLoggedIn(true) : setLoggedIn(false);
    }
  };

  // const decodeToken = localStorage.getItem('token');
  // const decode = jwtDecode(decodeToken);
  // console.log(decode);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
  }, [pwd]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    getToken();
  }, []);

  useEffect(() => {
    setInvalid('');
  }, [email, pwd]);

  return (
    <>
      {loggedIn ? (
        <Account />
      ) : (
        <section className="wrapper_content_login">
          <div className="border_box_login">
            <div className="header_content_login">
              <h1 className="login-text-h">Login</h1>
              <p className="login-text-p">Please enter your e-mail password:</p>
              <p
                ref={invalidRef}
                className={invalid ? 'errPopUp' : 'offscreen'}
                aria-live="assertive"
              >
                Please Check Your E-mail and Password
              </p>
            </div>

            <div className="input_content_login">
              <input
                className="login_input"
                placeholder="Email"
                type="text"
                ref={emailRef}
                onChange={e => setEmail(e.target.value)}
                required
                aria-invalid={validEmail ? 'false' : 'true'}
                aria-describedby="emailnote"
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
              />
              <p
                id="emailnote"
                className={
                  emailFocus && email && !validEmail ? 'cond_msg' : 'offscreen'
                }
              >
                E-mail should include "@"
                <br />
                Please check your email address
              </p>

              <input
                className="login_input"
                type="password"
                placeholder="Password"
                ref={pwdRef}
                onChange={e => setPwd(e.target.value)}
                required
                aria-invalid={validPwd ? 'false' : 'ture'}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              />
              <p
                id="pwdnote"
                className={
                  pwdFocus && pwd && !validPwd ? 'cond_msg' : 'offscreen'
                }
              >
                Password length should be 8 to 24 characters. Must includes
                <br />
                uppercase, lowercase and one special characters(!,@,#,$).
                <br />
              </p>

              <button
                type="button"
                className="login_btn"
                onMouseDown={postHandlerLogin}
                disabled={!validPwd || !validEmail ? true : false}
              >
                Login
              </button>
            </div>

            <div className="link_content_login">
              <span className="span_link login_span">
                Don't have an account?{' '}
              </span>
              <span className="login_span" onClick={go_signup}>
                Create one
              </span>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Login;
