import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContextPro";
import "./NaviBar.css";

function NaviBar() {
  const { currentUser, logout } = useAuth();  //정의 필요
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <Link to="/" className="navbar-logo">🍔 버거워</Link>

        <div className="navbar-menu">
          {!currentUser ? (
            <>
              <Link to="/login" className="navbar-login">로그인</Link>
              <Link to="/join" className="navbar-signup">가입하기</Link>
            </>
          ) : (
            <>
              <span className="navbar-username">
                {currentUser.userId}
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