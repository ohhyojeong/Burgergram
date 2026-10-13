import React, { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const FeedContext = createContext();

const initialFeeds = [
  {
    id: 1,
    userId: 1,
    burgerName: "와퍼",
    brand: "버거킹",
    image: "",
    content: "불향이 가득해서 정말 맛있습니다!",
    rating: 5,
    isNotice: true,
    createdAt: "2026-10-08"
  }
];

const initialComments = [
  {
    id: 1,
    feedId: 1,
    userId: 2,
    content: "공지 확인했습니다! 저도 오늘 와퍼 먹어야겠네요.",
    createdAt: "2026-10-08"
  }
];

export const FeedProvider = ({ children }) => {
  const [feeds, setFeeds] = useLocalStorage('burger_feeds', initialFeeds);
  const [comments, setComments] = useLocalStorage('burger_comments', initialComments);

  // 게시글 추가
  const addFeed = (feedData, currentUser) => {
    const newFeed = {
      id: Date.now(),
      userId: currentUser.id,
      burgerName: feedData.burgerName,
      brand: feedData.brand,
      image: feedData.image || "",
      content: feedData.content,
      rating: Number(feedData.rating) || 5,
      isNotice: currentUser.role === 'admin' ? (feedData.isNotice || false) : false,
      createdAt: new Date().toISOString().split('T')[0]
    };
    setFeeds([newFeed, ...feeds]);
  };

  // 게시글 수정
  const updateFeed = (id, updatedData) => {
    setFeeds(feeds.map(feed => feed.id === id ? { ...feed, ...updatedData } : feed));
  };

  // 게시글 삭제
  const deleteFeed = (id) => {
    setFeeds(feeds.filter(feed => feed.id !== id));
    setComments(comments.filter(comment => comment.feedId !== id));
  };

  // 댓글 추가
  const addComment = (feedId, currentUser, content) => {
    if (!content.trim()) return;
    const newComment = {
      id: Date.now(),
      feedId,
      userId: currentUser.id,
      content,
      createdAt: new Date().toISOString().split('T')[0]
    };
    setComments([...comments, newComment]);
  };

  // 댓글 삭제
  const deleteComment = (commentId) => {
    setComments(comments.filter(comment => comment.id !== commentId));
  };

  return (
    <FeedContext.Provider 
      value={{ 
        feeds, 
        comments, 
        addFeed, 
        updateFeed, 
        deleteFeed, 
        addComment, 
        deleteComment 
      }}
    >
      {children}
    </FeedContext.Provider>
  );
};

export const useFeed = () => {
  const context = useContext(FeedContext);
  if (!context) {
    throw new Error('useFeed must be used within a FeedProvider');
  }
  return context;
};
