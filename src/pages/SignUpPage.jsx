import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

export default function SignUpPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (signup(username, password)) {
      navigate('/login');
    }
  };

  return (
    <div className="signup-page">
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>아이디: </label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="사용할 아이디"
            required 
          />
        </div>
        <div>
          <label>비밀번호: </label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="사용할 비밀번호"
            required 
          />
        </div>
        <button type="submit">가입하기</button>
      </form>
      <p>
        이미 계정이 있으신가요? <Link to="/login">로그인하기</Link>
      </p>
    </div>
  );
}
