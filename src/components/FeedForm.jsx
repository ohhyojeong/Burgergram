import React, { useState } from 'react';

function FeedForm({ initialValues = {}, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    burgerName: initialValues.burgerName || initialValues.name || '',
    brand: initialValues.brand || '맥도날드',
    pattyType: initialValues.pattyType || initialValues.patty || '비프',
    price: initialValues.price || '',
    rating: initialValues.rating || '4',
    content: initialValues.content || initialValues.desc || '',
    image: initialValues.image || ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.burgerName.trim() || !formData.content.trim()) {
      alert('버거 이름과 한 줄 후기는 필수 입력 항목입니다!');
      return;
    }

    // 제출 직전 price와 rating을 숫자로 확실하게 변환하여 전달
    const processedData = {
      ...formData,
      price: Number(formData.price) || 0,
      rating: Number(formData.rating)
    };

    onSubmit(processedData);
  };

  return (
    <div className="auth-card" style={{ maxWidth: '680px', margin: '0 auto' }}>
      <h2>{initialValues.id ? '버거 리뷰 수정' : '버거 리뷰 작성'}</h2>
      <p className="sub" style={{ textAlign: 'left' }}>
        직접 먹어본 버거의 경험을 공유해 주세요.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="burgerName">버거 이름 *</label>
          <input
            id="burgerName"
            value={formData.burgerName}
            onChange={handleChange}
            required
            placeholder="예: 더블 치즈버거"
          />
        </div>

        <div className="field-row">
          <div className="field">
            <label htmlFor="brand">브랜드 *</label>
            <select id="brand" value={formData.brand} onChange={handleChange}>
              <option value="맥도날드">맥도날드</option>
              <option value="버거킹">버거킹</option>
              <option value="맘스터치">맘스터치</option>
              <option value="롯데리아">롯데리아</option>
              <option value="수제버거">수제버거</option>
              <option value="기타">기타</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="pattyType">패티 종류 *</label>
            <select id="pattyType" value={formData.pattyType} onChange={handleChange}>
              <option value="비프">비프</option>
              <option value="치킨">치킨</option>
              <option value="기타">기타</option>
            </select>
          </div>
        </div>

        <div className="field-row">
          <div className="field">
            <label htmlFor="price">구매 가격 (원)</label>
            <input
              id="price"
              type="number"
              min="0"
              value={formData.price}
              onChange={handleChange}
              placeholder="5500"
            />
          </div>

          <div className="field">
            <label htmlFor="rating">평점 *</label>
            <select id="rating" value={formData.rating} onChange={handleChange}>
              <option value="5">5.0</option>
              <option value="4.5">4.5</option>
              <option value="4">4.0</option>
              <option value="3.5">3.5</option>
              <option value="3">3.0</option>
              <option value="2.5">2.5</option>
              <option value="2">2.0</option>
              <option value="1.5">1.5</option>
              <option value="1">1.0</option>
              <option value="0.5">0.5</option>
            </select>
          </div>
        </div>

        <div className="field">
          <label htmlFor="content">한 줄 후기 *</label>
          <textarea
            id="content"
            value={formData.content}
            onChange={handleChange}
            required
            maxLength={180}
            placeholder="맛, 식감, 가성비 등을 자유롭게 적어주세요."
          />
        </div>

        <div className="field">
          <label htmlFor="image">사진 경로 (URL 또는 파일 경로)</label>
          {/* type="url" 제약을 풀어주기 위해 type="text"로 변경 */}
          <input
            id="image"
            type="text"
            value={formData.image}
            onChange={handleChange}
            placeholder="https://... 또는 이미지 경로 입력"
          />
        </div>

        <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
          <button type="submit" className="btn btn-dark form-submit" style={{ flex: 1 }}>
            {initialValues.id ? '리뷰 수정하기' : '리뷰 등록하기'}
          </button>
          
          {onCancel && (
            <button
              type="button"
              className="btn btn-outline"
              onClick={onCancel}
              style={{ marginTop: '5px' }}
            >
              취소
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default FeedForm;