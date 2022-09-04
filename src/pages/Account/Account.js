import React from 'react';
import './Account.scss';
import Logout from '../../components/Footer/Logout/Logout';

function Account() {
  return (
    <>
      <div className="wrapper_content_account">
        <section className="account_header">
          <Logout />
          <header> My Account</header>
          <p>Welcome back!</p>
        </section>

        <section className="account_info">
          <div>
            <h2></h2>
            <p></p>
          </div>

          <div>
            <h2></h2>
            <p></p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Account;
