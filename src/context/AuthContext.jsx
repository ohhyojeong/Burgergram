import React, { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const AuthContext = createContext();

const initialUsers = [
  { id: 1, username: "admin", password: "123", role: "admin" },
  { id: 2, username: "user1", password: "123", role: "user" }
];

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useLocalStorage('burger_users', initialUsers);
  const [currentUser, setCurrentUser] = useLocalStorage('burger_currentUser', null);

  // 회원가입 함수
  const signup = (username, password) => {
    if (!username.trim() || !password.trim()) {
      alert('아이디와 비밀번호를 모두 입력해주세요.');
      return false;
    }

    const isDuplicate = users.some(user => user.username === username);
    if (isDuplicate) {
      alert('이미 존재하는 아이디입니다.');
      return false;
    }

    const newUser = {
      id: Date.now(),
      username,
      password,
      role: 'user'
    };

    setUsers([...users, newUser]);
    alert('회원가입이 완료되었습니다. 로그인해주세요.');
    return true;
  };

  // 로그인 함수
  const login = (username, password) => {
    const foundUser = users.find(
      user => user.username === username && user.password === password
    );

    if (foundUser) {
      setCurrentUser(foundUser);
      alert(`${foundUser.username}님 환영합니다!`);
      return true;
    } else {
      alert('아이디 또는 비밀번호가 올바르지 않습니다.');
      return false;
    }
  };

  // 로그아웃 함수
  const logout = () => {
    setCurrentUser(null);
    alert('로그아웃 되었습니다.');
  };

  return (
    <AuthContext.Provider value={{ users, currentUser, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
