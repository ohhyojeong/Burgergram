import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


function NaviBar() {
  const { currentUser, logout } = useAuth();  //정의 필요
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="topbar">
      <div className="navbar-container">

        <Link to="/" className="brand">🍔 버거워</Link>

        <div className="top-actions">
          <Link to ="/" className = "btn btn-outline">홈</Link>
          {!currentUser ? (
            <>
              <Link to="/login" className="navbar-login">로그인</Link>
              <Link to="/signup" className="navbar-signup">가입하기</Link>
            </>
          ) : (
            <>
              <span className="navbar-username">
                {currentUser.username}
              </span>
              <button onClick={handleLogout} className="navbar-logout">로그아웃</button>
            </>
          )}
        </div>

      </div>
    </nav>
  );
}

export default NaviBar;