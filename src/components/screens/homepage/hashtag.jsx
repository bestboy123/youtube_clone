import React from 'react';

const arrHashtag = [
  'Tất cả',
  'Âm nhạc',
  'Trực tiếp',
  'Trò chơi',
  'Toán học',
  'Bóng đá',
  'Hoạt hình',
  'Mới tải lên',
];

function HashTag() {
  return (
    <div className="mainhashtag">
      <div className="hashtag">
        {arrHashtag.map((item, index) => (
          <button className="hashtag_button" key={index}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default HashTag;
