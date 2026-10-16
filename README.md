
# 🍔 Burgergram

햄버거 리뷰를 공유하는 SNS 웹 애플리케이션입니다.

인스타그램을 모티브로 사용자가 직접 먹어본 햄버거의 사진, 평점, 후기를 공유하고 다른 사용자의 리뷰를 확인할 수 있도록 개발하고 있습니다.

React 기반으로 제작하며, Context API와 localStorage를 활용해 데이터를 관리합니다.

## 🛠️ 기술 스택

| 구분 | 기술 |
|---|---|
| Frontend | React, JavaScript, HTML, CSS |
| Styling | CSS, Tailwind CSS |
| Build Tool | Vite |
| Routing | React Router DOM |
| State Management | Context API, React Hooks |
| Data Storage | localStorage |
| Collaboration | Git, GitHub |

## ✨ 주요 기능

### 1. 회원가입 및 로그인
- 회원가입 및 중복 아이디 검사
- 로그인 및 로그아웃
- 로그인 상태 유지
- 관리자(Admin) 및 일반 사용자(User) 구분

### 2. 햄버거 리뷰 피드
- 전체 사용자의 리뷰 게시글을 최신 작성일순으로 조회
- 햄버거 사진, 브랜드, 평점 및 후기 표시
- 카드 선택 시 피드 안에서 상세 내용 펼치기
- 전체 페이지 상세 보기 지원
- 로그인한 사용자의 좋아요 등록 및 취소
- 게시글별 좋아요 개수 표시

### 3. 게시글 관리
- 햄버거명, 브랜드, 이미지, 가격, 패티 종류, 평점, 후기 입력
- 작성자는 본인 게시글 수정·삭제 가능
- 관리자는 모든 게시글 수정·삭제 가능
- 관리자 공지 작성 및 공지 표시

### 4. 댓글 기능
- 게시글별 댓글 목록 및 개수 표시
- 로그인한 사용자만 댓글 작성 가능
- 작성자는 본인 댓글 삭제 가능
- 관리자는 모든 댓글 삭제 가능

### 5. 마이페이지
- 로그인한 사용자의 게시글 조회
- 본인이 작성한 리뷰 관리

> 현재 개발 진행 중이며 일부 기능은 구현 및 통합 작업 중입니다.

## 💾 데이터 저장 방식

별도의 백엔드와 데이터베이스 없이 브라우저의 localStorage에 데이터를 저장합니다.

| 키 | 저장 내용 |
|---|---|
| `burger_users` | 회원 목록 |
| `burger_currentUser` | 현재 로그인한 회원 정보 |
| `burger_feeds` | 게시글 및 좋아요 정보 |
| `burger_comments` | 댓글 목록 |

- 새로고침하거나 브라우저를 다시 열어도 데이터가 유지됩니다.
- 데이터는 접속 주소와 브라우저별로 저장되며 다른 사용자나 기기와 공유되지 않습니다.
- 저장된 데이터가 있으면 코드에 정의된 초기 데이터보다 우선합니다.
- 인증과 권한 처리는 프론트엔드에서 수행하며, 비밀번호도 평문으로 저장하는 학습용 구조입니다.

## 🔑 테스트 계정

| 구분 | 아이디 | 비밀번호 |
|---|---|---|
| 관리자 | `admin` | `123` |
| 일반 회원 | `user1` | `123` |

초기 데이터 기준이며, 기존 localStorage 데이터에 따라 달라질 수 있습니다.

## 📁 프로젝트 구조

```text
src/
├── assets/
│   └── hero.png
│
├── components/
│   ├── Navbar.jsx
│   ├── FeedCard.jsx
│   ├── FeedDetail.jsx
│   ├── FeedForm.jsx
│   └── CommentSection.jsx
│
├── pages/
│   ├── HomePage.jsx
│   ├── FeedDetailPage.jsx
│   ├── MyFeedPage.jsx
│   ├── LoginPage.jsx
│   └── SignUpPage.jsx
│
├── context/
│   ├── AuthContext.jsx
│   └── FeedContext.jsx
│
├── hooks/
│   └── useLocalStorage.js
│
├── data/
│   └── feeds.js
│
├── styles/
│   └── global.css
│
├── App.jsx
├── main.jsx
└── index.css
```

## 🧩 주요 컴포넌트

| 파일 | 역할 |
|---|---|
| `App.jsx` | 페이지 라우팅 및 전체 구조 |
| `Navbar.jsx` | 상단 네비게이션 |
| `HomePage.jsx` | 전체 피드 조회 및 리뷰 작성 |
| `FeedCard.jsx` | 리뷰 요약, 좋아요, 상세 펼치기 |
| `FeedForm.jsx` | 리뷰 작성 및 수정 폼 |
| `FeedDetail.jsx` | 피드 내부에서 펼치는 상세 화면 및 게시글 수정·삭제 |
| `FeedDetailPage.jsx` | `/feeds/:id` 전체 상세 페이지 |
| `MyFeedPage.jsx` | 사용자별 게시글 조회 |
| `CommentSection.jsx` | 댓글 조회·작성·삭제 |
| `AuthContext.jsx` | 로그인 및 사용자 상태 관리 |
| `FeedContext.jsx` | 게시글 및 댓글 상태 관리 |
| `useLocalStorage.js` | localStorage 데이터 동기화 |

## 🚀 실행 방법

### 1. 저장소 복제

```bash
git clone https://github.com/ohhyojeong/Burgergram.git
cd Burgergram
```

### 2. 패키지 설치

```bash
npm install
```

### 3. 개발 서버 실행

```bash
npm run dev
```

기본 접속 주소: http://localhost:5173

### 👥 팀

|  | |  |  |
|:---:|:---:|:---:|:---:|
| <img src="https://github.com/ohhyojeong.png" width="80"/> | <img src="https://github.com/amandine3235-prog.png" width="80"/>| <img src="https://github.com/ArthuriaSaber-FGO.png" width="80"/> | <img src="https://github.com/KKongKKong2da.png" width="80"/> |
| @ohhyojeong | @amandine3235-prog | @ArthuriaSaber-FGO | @kkongkkong2da |
| **프로젝트 구조 및 통합** | **피드 기능 개발** | **인증 및 상태 관리** | **UI/UX 디자인** |
| React Router 설정<br>Navbar 및 HomePage<br>초기 데이터 구성<br>컴포넌트 통합 | FeedCard 및 상세 페이지<br>MyFeedPage 구현<br>게시글 수정·삭제<br>관리자 공지 표시 | 로그인 및 회원가입<br>AuthContext·FeedContext<br>localStorage 연동<br>사용자 권한 관리 | FeedForm 구현<br>CommentSection 구현<br>CSS 및 공통 디자인<br>반응형 UI 구성 |






