import { Fragment, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { useFeed } from '../context/FeedContext';
import { useAuth } from '../context/AuthContext';

import FeedCard from '../components/FeedCard';
import FeedDetail from '../components/FeedDetail';

function MyFeedPage() {

  // 전체 게시글 가져오기
  const { feeds } = useFeed();

  // 현재 로그인한 사용자 가져오기
  const { currentUser } = useAuth();

  // 로그인하지 않은 경우
  const myFeeds = currentUser ? feeds.filter(
    feed => String(feed.userId) === String(currentUser.id)
  ) : [];

  const hasFeeds = myFeeds.length > 0;
  const [selectedId, setSelectedId] = useState(null);
  const [columns, setColumns] = useState(3);
  const gridRef = useRef(null);
  const detailRef = useRef(null);
  const selectedIndex = myFeeds.findIndex(feed => feed.id === selectedId);
  const rowEnd = selectedIndex < 0 ? -1 : Math.min(
    myFeeds.length - 1,
    Math.floor(selectedIndex / columns) * columns + columns - 1,
  );

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const observer = new ResizeObserver(() => {
      setColumns(getComputedStyle(grid).gridTemplateColumns.split(' ').length);
    });
    observer.observe(grid);
    return () => observer.disconnect();
  }, [hasFeeds]);

  useEffect(() => {
    detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [selectedId]);

  const toggleDetail = id => setSelectedId(previous => previous === id ? null : id);


  if (!currentUser) {
    return (
      <div className="container">
        <h2>로그인이 필요합니다.</h2>
        <p>내 게시글을 확인하려면 먼저 로그인해주세요.</p>

        <Link to="/login" className="btn btn-dark">
          로그인하러 가기
        </Link>
      </div>
    );
  }

  // 현재 로그인한 사용자가 작성한 게시글만 필터링


  return (
    <div className="container">

      <div className="my-feed-header">
        <h2>🍔 내 게시글</h2>

        <p>
          {currentUser.username}님이 작성한 버거 리뷰입니다.
        </p>

        <p>
          총 {myFeeds.length}개의 게시글
        </p>
      </div>

      {/* 내가 작성한 게시글이 없는 경우 */}
      {myFeeds.length === 0 ? (

        <div className="empty-feed">
          <p>아직 작성한 게시글이 없습니다.</p>

          <Link to="/" className="btn btn-dark">
            버거 리뷰 보러가기
          </Link>
        </div>

      ) : (

        /* 내가 작성한 게시글 목록 */
        <section ref={gridRef} className="feed-grid">
          {myFeeds.map((feed, index) => (
            <Fragment key={feed.id}>
              <FeedCard feed={feed} onSelect={toggleDetail} expanded={selectedId === feed.id} />
              {index === rowEnd && (
                <div ref={detailRef} className="feed-inline-detail">
                  <FeedDetail key={selectedId} feedId={selectedId} onClose={() => setSelectedId(null)} />
                </div>
              )}
            </Fragment>
          ))}
        </section>
      )}

    </div>
  );
}

export default MyFeedPage;
