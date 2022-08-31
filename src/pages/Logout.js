import react from 'react';

function Logout() {
  const handleLogout = () => {
    localStorage.clear();
    // window.location.reload();
  };
  return (
    <div>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
}

export default Logout;
