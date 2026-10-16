import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { useFeed } from '../context/FeedContext';
import { useAuth } from '../context/AuthContext';

import FeedForm from '../components/FeedForm';
import CommentSection from '../components/CommentSection';

function FeedDetailPage() {

  // URL에서 게시글 ID 가져오기
  const { id } = useParams();
  const navigate = useNavigate();

  // Context에서 게시글 데이터와 함수 가져오기
  const { feeds, updateFeed, deleteFeed } = useFeed();

  // 현재 로그인한 사용자 정보
  const { currentUser, users } = useAuth();

  // 수정 화면 표시 여부
  const [isEditing, setIsEditing] = useState(false);

  // URL의 ID와 일치하는 게시글 찾기
  const feed = feeds.find(
    (item) => String(item.id) === String(id)
  );

  // 게시글이 존재하지 않는 경우
  if (!feed) {
    return (
      <div className="container">
        <h2>게시글을 찾을 수 없습니다.</h2>
        <Link to="/">홈으로 돌아가기</Link>
      </div>
    );
  }

  // 본인이 작성한 게시글인지 확인
  const author = users.find(
    (user) => String(user.id) === String(feed.userId)
  );
  const isAuthor = currentUser?.id === feed.userId;
  const isAdmin = currentUser?.role === 'admin';
  const canManage = isAuthor || isAdmin;

  // 게시글 수정
  const handleUpdate = (updatedData) => {

    if (!canManage) {
      alert('게시글 작성자 또는 관리자만 수정할 수 있습니다.');
      return;
    }

    updateFeed(feed.id, updatedData);

    alert('게시글이 수정되었습니다.');

    setIsEditing(false);
  };

  // 게시글 삭제
  const handleDelete = () => {

    if (!canManage) {
      alert('게시글 작성자 또는 관리자만 삭제할 수 있습니다.');
      return;
    }

    const isConfirmed = window.confirm(
      '정말 이 게시글을 삭제하시겠습니까?'
    );

    if (!isConfirmed) {
      return;
    }

    deleteFeed(feed.id);

    alert('게시글이 삭제되었습니다.');

    navigate('/');
  };

  return (
    <div className="container">

      {/* 홈으로 이동 */}
      <Link to="/" className="btn btn-outline">
        ← 목록으로
      </Link>

      {/* 수정 화면 */}
      {isEditing ? (

        <FeedForm
          initialValues={feed}
          onSubmit={handleUpdate}
          onCancel={() => setIsEditing(false)}
        />

      ) : (

        /* 게시글 상세 화면 */
        <div className="feed-detail">

          {/* 관리자 공지 */}
          {feed.isNotice && (
            <div className="feed-notice">
              📌 관리자 공지
            </div>
          )}

          {/* 햄버거 이미지 */}
          <div className="feed-detail-image">

            {feed.image ? (
              <img
                src={feed.image}
                alt={feed.burgerName}
                style={{
                  width: '100%',
                  maxWidth: '500px',
                  borderRadius: '12px'
                }}
              />
            ) : (
              <div className="feed-no-image">
                🍔 이미지가 없습니다.
              </div>
            )}

          </div>

          {/* 게시글 정보 */}
          <div className="feed-detail-content">

            <p className="feed-brand">
              {feed.brand}
            </p>

            <h2>{feed.burgerName}</h2>

            <p className="feed-rating">
              ⭐ {feed.rating} / 5
            </p>

            {/* 가격 */}
            {feed.price != null && (
              <p>
                가격: {Number(feed.price).toLocaleString()}원
              </p>
            )}

            {/* 패티 종류 */}
            {feed.pattyType && (
              <p>
                패티 종류: {feed.pattyType}
              </p>
            )}

            {/* 리뷰 내용 */}
            <p className="feed-description">
              {feed.content}
            </p>

            {/* 작성일 */}
            <p className="feed-date">
              작성일: {feed.createdAt}
            </p>

            {/* 작성자 */}
            <p>
              작성자 ID: {author?.username || '알 수 없는 사용자'}
            </p>

            {/* 작성자 또는 관리자에게 수정/삭제 버튼 표시 */}
            {canManage && (

              <div
                className="feed-actions"
                style={{
                  display: 'flex',
                  gap: '10px',
                  marginTop: '20px'
                }}
              >

                <button
                  className="btn btn-outline"
                  onClick={() => setIsEditing(true)}
                >
                  수정
                </button>

                <button
                  className="btn btn-dark"
                  onClick={handleDelete}
                >
                  삭제
                </button>

              </div>

            )}

          </div>

          {/* 댓글 컴포넌트 */}
          <CommentSection feedId={feed.id} />

        </div>

      )}

    </div>
  );
}

export default FeedDetailPage;
