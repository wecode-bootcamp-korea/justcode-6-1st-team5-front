import React from 'react';
import { useRef, useState, useEffect } from 'react';
import './Signup.scss';

const USER_REGEX = /^[a-zA-Z]{3,10}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function Signup() {
  const userRef = useRef('');
  const pwdRef = useRef('');
  const emailRef = useRef('');

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [success, setSuccess] = useState(false);

  const sendHandler = e => {
    e.preventDefault();
    console.log(userRef.current.value);
    console.log(pwdRef.current.value);
    console.log(emailRef.current.value);

    fetch('http://localhost:8000/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: userRef.current.value,
        pwd: pwdRef.current.value,
        email: emailRef.current.value,
      }),
    })
      .then(res => res.json())
      //! res.json() 적용 시 오류 발생
      .then(data => console.log(data));
  };

  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);

  // useEffect(() => {
  //   pwdRef.current.focus();
  // }, []);

  // useEffect(()=>{
  //   email.current.focus()
  // }, [])

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
  }, [pwd]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  return (
    <section className="outter_content_signup ">
      {success ? (
        <section className="toLogin">
          <h1>Success</h1>
          <a href="login">Sing in</a>
        </section>
      ) : (
        <section>
          <div className="border_box_signup">
            <div className="header_content_signup">
              <h1 className="signup-text-h">REGISTER</h1>
              <p className="signup-text-p">
                Please fill in the information below:
              </p>
            </div>

            <form className="input_content_signup">
              {/* !form에 onsubmit handler적용시 값 인식 불가  */}
              <input
                className="signup_input"
                placeholder="Name"
                type="text"
                ref={userRef}
                autoComplete="off"
                onChange={e => setUser(e.target.value)}
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
                className="signup_input"
                placeholder="Password"
                type="password"
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
                className="signup_btn"
                onClick={setSuccess}
                onMouseDown={sendHandler}
                disabled={!validName || !validPwd || !validEmail ? true : false}
              >
                Create My Account
              </button>
            </form>
          </div>
        </section>
      )}
    </section>
  );
}

export default Signup;
