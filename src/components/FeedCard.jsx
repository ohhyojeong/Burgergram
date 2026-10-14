import React from 'react';
import { Link } from 'react-router-dom';

const FeedCard = ({ feed }) => {
  return (
    <article className="feed-card">

      {/* 햄버거 이미지 */}
      <Link to={`/feeds/${feed.id}`}>
        {feed.image ? (
          <img
            src={feed.image}
            alt={feed.burgerName}
            className="feed-card-image"
          />
        ) : (
          <div className="feed-card-no-image">
            🍔 이미지 없음
          </div>
        )}
      </Link>

      {/* 게시글 정보 */}
      <div className="feed-card-content">

        {/* 관리자 공지 */}
        {feed.isNotice && (
          <span className="feed-notice">
            📌 공지
          </span>
        )}

        {/* 브랜드 */}
        <p className="feed-brand">
          {feed.brand}
        </p>

        {/* 햄버거 이름 */}
        <h3>
          <Link to={`/feeds/${feed.id}`}>
            {feed.burgerName}
          </Link>
        </h3>

        {/* 별점 */}
        <p className="feed-rating">
          ⭐ {feed.rating} / 5
        </p>

        {/* 리뷰 내용 */}
        <p className="feed-description">
          {feed.content}
        </p>

        {/* 작성일 */}
        <small className="feed-date">
          {feed.createdAt}
        </small>

      </div>
    </article>
  );
};

export default FeedCard;