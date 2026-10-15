import { Fragment, useEffect, useRef, useState } from 'react';
import FeedCard from '../components/FeedCard';
import FeedDetail from '../components/FeedDetail';
import { useFeed } from "../context/FeedContext";
import FeedForm from '../components/FeedForm';
import { useAuth } from '../context/AuthContext';

const HomePage = () => {
  const { feeds, addFeed } = useFeed();
  const { currentUser } = useAuth();
  const [isWriting, setIsWriting] = useState(false);

  const hasFeeds = feeds.length > 0;
  const [selectedId, setSelectedId] = useState(null);
  const [columns, setColumns] = useState(3);
  const gridRef = useRef(null);
  const detailRef = useRef(null);
  const sortedFeeds = [...feeds].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  const selectedIndex = sortedFeeds.findIndex(feed => feed.id === selectedId);
  const rowEnd = selectedIndex < 0 ? -1 : Math.min(
    feeds.length - 1,
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


  const handleWrite = () => {
    if (!currentUser) {
      alert('로그인하세요.');
      return;
    }

    setIsWriting(true);
  };

  const handleSubmit = (formData) => {
    if (!currentUser) {
      alert('로그인하세요.');
      return;
    }

    addFeed(formData, currentUser);
    setIsWriting(false);
  };

  return (
    <main className="home-page">
      <h1>버거 리뷰 피드</h1>
      <button
        type="button"
        className="btn btn-yellow"
        onClick={handleWrite}
      >
        + 게시물 추가
      </button>

      {isWriting && currentUser && (
        <FeedForm
          onSubmit={handleSubmit}
          onCancel={() => setIsWriting(false)}
        />
      )}
      
       {feeds.length === 0 ? (
        <p>아직 등록된 리뷰가 없어요.</p>
      ) : (
        <section ref={gridRef} className="feed-grid">
          {sortedFeeds.map((feed, index) => (
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
    </main>
  );
};

export default HomePage;
