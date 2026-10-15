import { useAuth } from '../context/AuthContext';
import { useFeed } from '../context/FeedContext';

const FeedCard = ({ feed, onSelect, expanded = false }) => {
  const { users, currentUser } = useAuth();
  const { toggleLike } = useFeed();
  const likedBy = feed.likedBy ?? [];
  const isLiked = Boolean(currentUser && likedBy.some(
    id => String(id) === String(currentUser.id)
  ));

  const author = users.find(
    user => String(user.id) === String(feed.userId)
  );

  return (
    <article className="feed-card">

      {/* 햄버거 이미지 */}
      <button type="button" className="feed-card-trigger" onClick={() => onSelect(feed.id)} aria-expanded={expanded}>
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
      </button>

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
          <button type="button" className="feed-card-trigger" onClick={() => onSelect(feed.id)} aria-expanded={expanded}>
            {feed.burgerName}
          </button>
        </h3>

        {/* 별점 */}
        <p className="feed-rating">
          ⭐ {feed.rating} / 5
        </p>

        {/* 리뷰 내용 */}
        <p className="feed-description">
          {feed.content}
        </p>

        <button
          type="button"
          className={`like-button ${isLiked ? 'is-liked' : ''}`}
          onClick={() => toggleLike(feed.id)}
          aria-pressed={isLiked}
          aria-label={`좋아요 ${likedBy.length}개${isLiked ? ', 취소하기' : ', 누르기'}`}
        >
          {isLiked ? '♥' : '♡'} {likedBy.length}
        </button>

        {/* 작성자 */}
        {/* <p className="feed-author">
          작성자: {author?.username ?? '알 수 없는 사용자'}
        </p>
         */}

         
        {/* 작성일 */}
        <small className="feed-date">
          {feed.createdAt}
        </small>

      </div>
    </article>
  );
};

export default FeedCard;
