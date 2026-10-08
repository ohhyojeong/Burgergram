
# 🍔 Burgerstagram 프로젝트 계획서

## 1. 프로젝트 개요

### 프로젝트명
**Burgerstagram (버거스타그램)**

### 프로젝트 소개
Burgerstagram은 인스타그램을 모티브로 한 햄버거 리뷰 SNS 웹 서비스입니다.

사용자는 자신이 먹은 햄버거의 사진과 리뷰를 게시하고, 다른 사용자의 게시글을 확인하거나 댓글을 남길 수 있습니다.

### 개발 목표
- React 기반 SPA(Single Page Application) 구현
- React Router를 이용한 페이지 이동
- Context API를 활용한 전역 상태 관리
- localStorage를 활용한 데이터 저장
- GitHub를 활용한 팀 협업 및 역할 분담

### 기술 스택
- Frontend: React, JavaScript, HTML, CSS
- Build Tool: Vite
- Routing: React Router
- State Management: Context API, useState
- Data Storage: localStorage
- Version Control: Git, GitHub

---

## 2. 주요 기능

### 2.1 회원가입 및 로그인
- 사용자 ID와 비밀번호 입력
- 회원가입 시 사용자 정보 저장
- 로그인 및 로그아웃
- 로그인 상태에 따라 화면 변경
- Admin 계정과 일반 사용자 계정 구분

### 2.2 홈 피드
- 전체 햄버거 리뷰 게시글 조회
- 게시글 카드 형태로 목록 출력
- 게시글 클릭 시 상세 페이지 이동
- Admin이 작성한 공지 게시글 구분

### 2.3 게시글 상세 페이지
- 햄버거 사진, 이름, 브랜드 표시
- 작성자 및 리뷰 내용 확인
- 댓글 목록 조회
- 댓글 작성
- 본인 게시글에 대한 수정 및 삭제

### 2.4 마이페이지
- 로그인한 사용자 정보 표시
- 자신이 작성한 게시글 목록 조회
- 자신의 게시글 관리

### 2.5 Admin 기능
- Admin 전용 계정 제공
- 공지사항 또는 추천 게시글 작성
- 일반 게시글과 Admin 게시글 구분

---

## 3. 프로젝트 파일 구조

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── FeedCard.jsx
│   ├── CommentSection.jsx
│   └── FeedForm.jsx
│
├── pages/
│   ├── HomePage.jsx
│   ├── FeedDetailPage.jsx
│   ├── MyFeedPage.jsx
│   ├── LoginPage.jsx
│   └── SignUpPage.jsx
│
├── context/
│   ├── FeedContext.jsx
│   └── AuthContext.jsx
│
├── hooks/
│   └── useLocalStorage.js
│
├── styles/
│   ├
│   └── (페이지별 CSS)
│
├── data/
│   └── feeds.js
│
├── App.jsx
└── main.jsx
```

---

## 4. 팀원별 역할 분담

### 1.효정님

**담당 파일**
- `App.jsx`
- `Navbar.jsx`
- `HomePage.jsx`
- `data/feeds.js`

**담당 기능**
- 전체 프로젝트 구조 설계
- React Router 설정
- 상단 네비게이션 바 구현
- 전체 피드 목록 출력
- 초기 게시글 데이터 구성
- 팀원별 컴포넌트 연결 및 통합

---

### 2.우정님

**담당 파일**
- `FeedCard.jsx`
- `FeedDetailPage.jsx`
- `MyFeedPage.jsx`

**담당 기능**
- 게시글 카드 구현
- 게시글 상세 페이지 구현
- 사용자별 게시글 조회
- 본인 게시글 수정 및 삭제
- Admin 전용 공지 게시글 표시

---

### 3.형근님

**담당 파일**
- `LoginPage.jsx`
- `SignUpPage.jsx`
- `context/FeedContext.jsx`
- `context/AuthContext.jsx`
- `hooks/useLocalStorage.js`

**담당 기능**
- 로그인 및 회원가입 구현
- 로그인 사용자 상태 관리
- 게시글 및 댓글 전역 상태 관리
- Context API를 통한 데이터 공유
- localStorage 데이터 저장 및 불러오기
- Admin 및 일반 사용자 권한 구분

---

### 4.공주님

**담당 파일**
- `FeedForm.jsx`
- `CommentSection.jsx`
- `styles/global.css`
- 페이지별 CSS 파일

**담당 기능**
- 게시글 작성 폼 UI 구현
- 댓글 입력 및 목록 UI 구현
- 전체 웹사이트 디자인 및 CSS
- Navbar, FeedCard 등 공통 컴포넌트 스타일링
- 반응형 레이아웃 구성

---

## 협업 시 주의사항

- **1번:** 전체 프로젝트 구조 및 컴포넌트 연결 담당
- **2번:** 게시글 조회, 수정, 삭제 기능 담당
- **3번:** Context API 및 localStorage 데이터 관리 담당
- **4번:** 게시글 작성 UI, 댓글 UI 및 CSS 디자인 담당

### 개발 규칙
1. 각 팀원은 담당 파일을 중심으로 개발 나중에 main merge
2. 3번은 Context에서 사용할 함수와 데이터 구조를 먼저 정의한다.
3. 2,4번 역할 Context에서 제공하는 함수를 활용
5. 기능 구현 후 각자 Branch에 Push하고 Pull Request를 생성한다.


---

## 5. 페이지 경로 설계

| URL | 페이지 | 기능 |
|---|---|---|
| `/` | HomePage | 전체 피드 조회 |
| `/feeds/:id` | FeedDetailPage | 게시글 상세 조회 |
| `/my-feeds` | MyFeedPage | 내 게시글 조회 |
| `/login` | LoginPage | 로그인 |
| `/signup` | SignUpPage | 회원가입 |

게시글 작성 및 수정은 FeedForm 컴포넌트를 재사용

---

## 6. 데이터 구조(대략)

### 6.1 사용자 데이터

```js
const users = [
  {
    id: 1,
    username: "admin",
    role: "admin"
  },
  {
    id: 2,
    username: "user1",
    role: "user"
  }
];
```

### 6.2 게시글 데이터

```js
const feeds = [
  {
    id: 1,
    userId: 2,
    burgerName: "빅맥",
    brand: "맥도날드",
    image: "",
    content: "맛있어요!",
    rating: 5,
    isNotice: false,
    createdAt: "2026-10-08"
  }
];
```

### 6.3 댓글 데이터

```js
const comments = [
  {
    id: 1,
    feedId: 1,
    userId: 2,
    content: "저도 먹어보고 싶어요!",
    createdAt: "2026-10-08"
  }
];
```

---

## 7. Context API 설계

### FeedContext.jsx

게시글 및 댓글 관련 상태를 관리합니다.

**관리할 데이터**
- feeds: 전체 게시글 목록
- comments: 댓글 목록

**주요 함수**
- addFeed(): 게시글 추가
- updateFeed(): 게시글 수정
- deleteFeed(): 게시글 삭제
- addComment(): 댓글 추가
- deleteComment(): 댓글 삭제

### AuthContext.jsx

로그인한 사용자 정보를 관리합니다.

**관리할 데이터**
- currentUser: 현재 로그인 사용자

**주요 함수**
- login(): 로그인
- logout(): 로그아웃
- signup(): 회원가입

---

## 8. 데이터 저장 방식

Backend 및 Database를 사용하지 않고 localStorage를 활용합니다.

### 저장할 데이터
- users: 회원 정보
- currentUser: 로그인한 사용자
- feeds: 전체 게시글
- comments: 댓글

### 데이터 처리 흐름

1. 사용자가 게시글을 작성합니다.
2. FeedForm에서 입력값을 전달합니다.
3. FeedContext의 addFeed() 함수를 실행합니다.
4. feeds 상태를 업데이트합니다.
5. 변경된 데이터를 localStorage에 저장합니다.
6. HomePage에서 변경된 게시글을 렌더링합니다.


---

## 9. GitHub 협업 방식

### Branch 대략 구성

```text
main
├── feature/home
├── feature/feed
├── feature/comment
└── feature/auth-design
```



## 10. 개발 진행 순서

### 1단계 - 기본 환경 구성
- Vite React 프로젝트 생성
- GitHub Repository 연결
- React Router 설정
- 기본 페이지 생성
- Navbar 구현

### 2단계 - 핵심 기능 구현
- 회원가입 및 로그인
- 게시글 목록 조회
- 게시글 작성
- 게시글 상세 조회
- 게시글 수정 및 삭제

### 3단계 - 추가 기능 구현
- 댓글 작성 및 삭제
- 마이페이지
- Admin 공지 게시글
- localStorage 연동

### 4단계 - 통합 및 마무리
- 전체 컴포넌트 연결
- CSS 디자인 통일
- 기능별 오류 수정
- GitHub 코드 통합
- 최종 테스트 및 발표 준비


