import FeedCard from "../components/FeedCard";
import { useFeed } from "../context/FeedContext";
import FeedForm from '../components/FeedForm';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const HomePage = () => {
  const { feeds, addFeed } = useFeed();
  const { currentUser } = useAuth();
  const [isWriting, setIsWriting] = useState(false);

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
        <section className="feed-grid" aria-label="버거 리뷰 목록">
          {feeds.map((feed) => (
            <FeedCard key={feed.id} feed={feed} />
          ))}
        </section>
      )}
    </main>
  );
};

export default HomePage;