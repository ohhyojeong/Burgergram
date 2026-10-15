import React, { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useAuth } from './AuthContext';

const FeedContext = createContext();



const initialFeeds = [
  {
    id: 1,
    userId: 1,
    burgerName: "더블 치즈버거",
    brand: "맥도날드",
    pattyType: "비프",
    price: 5500,
    image: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202302_0004-999_DoubleCheeseburgerv2_Alt_1564x1564?wid=1000&hei=1000&dpr=off",
    content: "치즈의 짭짤함과 패티의 육즙이 꽉 찬 조합.",
    rating: 4.5,
    isNotice: false,
    createdAt: "2026-10-12"
  },
  {
    id: 2,
    userId: 2,
    burgerName: "싸이버거",
    brand: "맘스터치",
    pattyType: "치킨",
    price: 4900,
    image: "https://momstouch.co.kr/upload_file/product_info/1781574164-JCDWG.png",
    content: "두툼한 치킨 패티 하나로 설명이 끝나는 맛.",
    rating: 4.8,
    isNotice: false,
    createdAt: "2026-10-12"
  },
  {
    id: 3,
    userId: 3,
    burgerName: "와퍼",
    brand: "버거킹",
    pattyType: "비프",
    price: 7200,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
    content: "불맛과 채소의 밸런스가 좋아서 자꾸 생각나요.",
    rating: 4.2,
    isNotice: false,
    createdAt: "2026-10-13"
  },
  {
    id: 4,
    userId: 4,
    burgerName: "리아 불고기",
    brand: "롯데리아",
    pattyType: "비프",
    price: 4800,
    image: "https://i.namu.wiki/i/rgsRmerotYndkqq4Oh3a5X9WElogC-q4jRe9Yh363SzIc21Cf2Y-plnGB-sCucyAZzEyhXT5fIOmECZtH3LGTg.webp",
    content: "익숙한 달큰한 소스가 매력적인 추억의 버거.",
    rating: 3.8,
    isNotice: false,
    createdAt: "2026-10-13"
  },
  {
    id: 5,
    userId: 5,
    burgerName: "쉑버거",
    brand: "쉐이크쉑",
    pattyType: "비프",
    price: 8900,
    image: "https://sitem.ssgcdn.com/34/78/22/item/1000548227834_i1_750.jpg",
    content: "부드러운 번과 패티, 소스까지 꽉 찬 한 입.",
    rating: 4.7,
    isNotice: false,
    createdAt: "2026-10-14"
  },
  {
    id: 6,
    userId: 2,
    burgerName: "화이트갈릭버거",
    brand: "맘스터치",
    pattyType: "치킨",
    price: 5900,
    image: "https://momstouch.co.kr/upload_file/product_info/1616055799-QYDPW.png",
    content: "마늘 소스의 풍미가 치킨과 잘 어울려요.",
    rating: 4.1,
    isNotice: false,
    createdAt: "2026-10-14"
  },
  {
    id: 7,
    userId: 1,
    burgerName: "빅맥",
    brand: "맥도날드",
    pattyType: "비프",
    price: 5900,
    image: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202302_0005-999_BigMac_1564x1564-1?wid=1000&hei=1000&dpr=off",
    content: "층층이 쌓인 재료와 시그니처 소스의 조합.",
    rating: 4.0,
    isNotice: false,
    createdAt: "2026-10-15"
  },
  {
    id: 8,
    userId: 3,
    burgerName: "콰트로치즈와퍼",
    brand: "버거킹",
    pattyType: "비프",
    price: 8900,
    image: "https://mob-prd.burgerking.co.kr/images/menu/web/main/2025/01/06/fe3b84c2-1e1c-47c1-aea2-a8a7f6d5a069.png",
    content: "네 가지 치즈의 진한 풍미가 취향을 저격.",
    rating: 4.6,
    isNotice: false,
    createdAt: "2026-10-15"
  },
  {
    id: 9,
    userId: 4,
    burgerName: "치킨버거",
    brand: "롯데리아",
    pattyType: "치킨",
    price: 3900,
    image: "https://i.namu.wiki/i/OZnGQVGsZVgIfNGUy7xojMIqgKjCauZ8-cCxZQnH4rEuxc63vSp5OxvvgT23ashK24tmY5V-mHIrdvcabpOQrQ.webp",
    content: "부담 없는 가격으로 가볍게 즐기기 좋아요.",
    rating: 3.5,
    isNotice: false,
    createdAt: "2026-10-15"
  },
  {
    id: 10,
    userId: 5,
    burgerName: "머쉬룸 버거",
    brand: "쉐이크쉑",
    pattyType: "기타",
    price: 10500,
    image: "https://theeburgerdude.com/wp-content/uploads/2022/09/9093e9_1da1d1947f3448fbba26fd701ccc0fbc_mv2.webp",
    content: "버섯의 감칠맛과 풍부한 식감이 인상적이에요.",
    rating: 4.4,
    isNotice: false,
    createdAt: "2026-10-15"
  },
  {
    id: 11,
    userId: 1,
    burgerName: "맥치킨",
    brand: "맥도날드",
    pattyType: "치킨",
    price: 4200,
    image: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202302_4314-999_McChicken_1564x1564-1?wid=1000&hei=1000&dpr=off",
    content: "바삭한 식감과 소스의 조화가 안정적인 메뉴.",
    rating: 3.9,
    isNotice: false,
    createdAt: "2026-10-15"
  },
  {
    id: 12,
    userId: 3,
    burgerName: "통새우와퍼",
    brand: "버거킹",
    pattyType: "비프",
    price: 8500,
    image: "https://soranews24.com/wp-content/uploads/sites/3/2023/06/Burger-King-Japan-Shrimp-Whopper-new-limited-edition-burger-exclusive-menu-fast-food-news-photos-3.jpg",
    content: "새우의 탱글한 식감이 더해져 질리지 않는 맛.",
    rating: 4.3,
    isNotice: false,
    createdAt: "2026-10-15"
  }
];

const initialComments = [
  {
    id: 1,
    feedId: 1,
    userId: 2,
    content: "치즈가 진짜 듬뿍 들어있어서 좋았어요!",
    createdAt: "2026-10-12"
  },
  {
    id: 2,
    feedId: 1,
    userId: 3,
    content: "맥도날드 스테디셀러 인정합니다.",
    createdAt: "2026-10-12"
  },
  {
    id: 3,
    feedId: 2,
    userId: 1,
    content: "싸이버거는 역시 언제 먹어도 배신하지 않죠.",
    createdAt: "2026-10-13"
  }
];
export const FeedProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const [feeds, setFeeds] = useLocalStorage('burger_feeds', initialFeeds);
  const [comments, setComments] = useLocalStorage('burger_comments', initialComments);
  
  
  const toggleLike = (feedId) => {
      if (!currentUser) {
        alert('좋아요는 로그인 후 사용할 수 있습니다.');
        return;
      }
      const userId = currentUser.id;
      setFeeds(previous => previous.map(feed => {
        if (String(feed.id) !== String(feedId)) return feed;

        const likedBy = feed.likedBy ?? [];
        const alreadyLiked = likedBy.some(
          id => String(id) === String(userId)
        );

        return {
          ...feed,
          likedBy: alreadyLiked
            ? likedBy.filter(id => String(id) !== String(userId))
            : [...likedBy, userId],
        };
      }));
    };

  // 게시글 추가
  const addFeed = (feedData, currentUser) => {
    const newFeed = {
      id: Date.now(),
      userId: currentUser.id,
      burgerName: feedData.burgerName,
      brand: feedData.brand,
      price: feedData.price,          // 추가
      pattyType: feedData.pattyType,  // 추가
      image: feedData.image || "",
      content: feedData.content,
      rating: Number(feedData.rating) || 5,
      isNotice: currentUser.role === 'admin' ? (feedData.isNotice || false) : false,
      createdAt: new Date().toISOString().split('T')[0],
      likedBy: [],
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
        deleteComment, 
        toggleLike
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
