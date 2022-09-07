import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.scss';

const USER_REGEX = /^[a-zA-Z\s]{3,30}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function Signup() {
  const userRef = useRef('');
  const pwdRef = useRef('');
  const emailRef = useRef('');
  const existRef = useRef('');

  const [exist, setExist] = useState(false);

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [signedUp, setSignedUp] = useState('');

  const navigate = useNavigate();
  const go_login = () => {
    navigate('/login');
  };

  const sendHandler = e => {
    e.preventDefault();

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
      .then(msg => {
        if (msg.message !== '이미 사용중인 이메일입니다.') {
          setSignedUp(true);
        } else {
          setExist(true);
        }
      });
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
    <>
      {signedUp ? (
        go_login()
      ) : (
        <section className="outter_content_signup ">
          <section>
            <div className="border_box_signup">
              <div className="header_content_signup">
                <h1 className="signup-text-h">REGISTER</h1>

                <p className="signup-text-p">
                  Please fill in the information below:
                </p>
                <p
                  ref={existRef}
                  className={exist ? 'errPopUp' : 'offscreen'}
                  aria-live="assertive"
                >
                  Email has already taken.
                </p>
              </div>

              <form className="input_content_signup">
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
                  Name length should be 3 to 30 characters.
                  <br />
                  Only uppecase and smallcase will allowed.
                  <br />
                  Please, input your name .
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
                    emailFocus && email && !validEmail
                      ? 'cond_msg'
                      : 'offscreen'
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
                  onMouseDown={sendHandler}
                  disabled={
                    !validName || !validPwd || !validEmail ? true : false
                  }
                >
                  Create My Account
                </button>
              </form>
            </div>
          </section>
        </section>
      )}
    </>
  );
}
export default Signup;
