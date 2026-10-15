import React, { useState, useContext } from 'react';
import { useFeed } from '../context/FeedContext';
import { useAuth } from '../context/AuthContext';


function CommentSection({ feedId }) {
  const [text, setText] = useState('');
  
  const { comments, addComment, deleteComment }  = useFeed();
  const { currentUser,users} = useAuth();

  // 문자열/숫자 타입 차이로 인한 비교 오류 방지를 위해 String()으로 감싸서 필터링
  const currentComments = Array.isArray(comments)
    ? comments.filter((c) => String(c.feedId) === String(feedId))
    : (comments[feedId] || []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    if (!currentUser) {
      alert('댓글은 로그인 후 작성할 수 있습니다.');
      return;
    }

    addComment(feedId, currentUser, text);
    setText('');
  };

  return (
    <div className="comments">
      <div className="comments-head">
        <strong>💬 댓글 <span>{currentComments.length}</span></strong>
      </div>

      <div className="comment-list-area">
        {currentComments.length > 0 ? (
          currentComments.map((comment) => {
            const author = users.find(user => user.id === comment.userId);
            const commentUser = author?.username ?? '알 수 없는 사용자';

            const isMyComment = currentUser && (
              currentUser.id === comment.userId ||
              currentUser.role === 'admin'
            );
            return (
              <div 
                key={comment.id} 
                className="comment" 
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <div>
                  <b>@{commentUser}</b>
                  <span>{comment.content}</span>
                </div>

                {isMyComment && (
                  <button
                    onClick={() => deleteComment(comment.id)}
                    style={{ 
                      background: 'none', 
                      border: 'none', 
                      color: 'var(--danger)', 
                      cursor: 'pointer', 
                      fontSize: '11px' 
                    }}
                  >
                    삭제
                  </button>
                )}
              </div>
            );
          })
        ) : (
          <p style={{ fontSize: '12px', color: 'var(--muted)', margin: '10px 0' }}>
            아직 댓글이 없습니다. 첫 번째 댓글을 남겨보세요!
          </p>
        )}
      </div>

      <form className="comment-form" onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={currentUser ? "따뜻한 한마디를 남겨주세요" : "댓글은 로그인 후 작성할 수 있어요"}
          disabled={!currentUser}
        />
        <button type="submit" disabled={!currentUser}>
          등록
        </button>
      </form>
    </div>
  );
}

export default CommentSection;