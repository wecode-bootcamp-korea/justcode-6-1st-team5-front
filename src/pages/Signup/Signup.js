import React from 'react';
import { useRef, useState, useEffect } from 'react';
import './Signup.scss';
// import axios from '../../api/axios';

const USER_REGEX = /^[a-zA-Z]{3,10}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// const REGISTER_URL = '/register';

function Signup() {
  const userRef = useRef();
  const pwdRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    pwdRef.current.focus();
  }, []);
  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
  }, [pwd]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd, email]);

  const sendHandler = e => {
    e.preventDefault();
    const user = e.target.user.value;
    const pwd = e.target.pwd.value;
    fetch('http://localhost:4000/api/info', {
      method: 'POST',
      body: JSON.stringify({
        user,
        pwd,
      }),
    });
  };

  // fetch('http://localhost:4000/api/info')
  //   .then(res => res.json())
  //   .then(data => console.log(data));

  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   const v1 = USER_REGEX.test(user);
  //   const v2 = PWD_REGEX.test(pwd);
  //   if (!v1 || !v2) {
  //     setErrMsg('Invalid Entry');
  //     return;
  //   }
  //   try {
  //     const response = await axios.post(
  //       REGISTER_URL,
  //       JSON.stringify({ user, pwd }),
  //       {
  //         headers: { 'Content-Type': 'application/json' },
  //         withCredentials: true,
  //       }
  //     );
  //     console.log(response?.data);
  //     console.log(response?.accessToken);
  //     console.log(JSON.stringify(response));
  //     setSuccess(true);
  //     setUser('');
  //     setPwd('');
  //     setEmail('');
  //   } catch (err) {
  //     if (!err?.response) {
  //       setErrMsg('No Server Response');
  //     } else if (err.response?.status === 409) {
  //       setErrMsg('Username Taken');
  //     } else {
  //       setErrMsg('Registration Failed');
  //     }
  //     errRef.current.focus();
  //   }
  // };

  return (
    <>
      {success ? (
        <section className="toLogin">
          <h1>Success</h1>
          <a href="login">Sing in</a>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? 'errmsg' : 'offscreen'}
            aria-live="assertive"
          >
            {errMsg}
          </p>

          <form className="border_box_signup">
            {/* onSubmit={handleSubmit} */}
            <div className="header_content_signup">
              <h1 className="signup-text-h">REGISTER</h1>
              <p className="signup-text-p">
                Please fill in the information below:
              </p>
            </div>

            <div className="input_content_signup">
              <input
                name="user"
                className="signup_input"
                placeholder="Name"
                type="text"
                ref={userRef}
                autoComplete="off"
                onChange={e => setUser(e.target.value)}
                value={user}
                required
                aria-invalid={validName ? 'false' : 'true'}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
              />
              <p
                id="uidnote"
                className={
                  userFocus && user && !validName ? 'cond_msg' : 'offscreen'
                }
              >
                Name length should be 3 to 10 characters.
                <br />
                Only uppecase and smallcase will allowed.
                <br />
                Please, input your name without spacing.
              </p>

              <input
                className="signup_input"
                placeholder="Email"
                type="text"
                value={email}
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
                name="pwd"
                className="signup_input"
                placeholder="Password"
                type="password"
                ref={pwdRef}
                onChange={e => setPwd(e.target.value)}
                value={pwd}
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
                className="signup_btn"
                onClick={setSuccess}
                onSubmit={sendHandler}
                disabled={!validName || !validPwd ? true : false}
              >
                Create My Account
              </button>
            </div>
          </form>
        </section>
      )}
    </>
  );
}

export default Signup;
