import React from 'react';
import './Account.scss';
import Logout from '../../components/Footer/Logout/Logout';

function Account() {
  return (
    <>
      <div className="wrapper_content_account">
        <section className="account_header">
          <Logout />
          <h1 className="account_header_title"> My Account</h1>
          <p className="account_header_text">Welcome back!</p>
        </section>

        <section className="account_order">
          <h2 className="account_order_title">MY ORDERS</h2>
          <p className="account_order_text">You haven't placed any order yet</p>
        </section>
      </div>
    </>
  );
}

export default Account;
