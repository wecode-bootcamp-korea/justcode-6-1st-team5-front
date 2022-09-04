import React from 'react';
import './Logout.scss';

function Logout() {
  const handleLogout = () => {
    localStorage.clear();
    // window.location.reload();
  };
  return (
    <div>
      <button className="logout_btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Logout;
