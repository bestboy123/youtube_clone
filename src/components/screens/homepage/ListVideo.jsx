import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { context } from '@store/Context/context';
function ListVideo() {
  const { state, clickVideo } = useContext(context);
  const { products } = state;
  return (
    <div className="listvideo">
      {products.map((item) => (
        <Link key={item.id.videoId} to="/detail-page" className="itemvideo">
          <div
            className="itemvideo-frames"
            onClick={() => clickVideo(item.id.videoId)}>
            <div className="itemvideo__img">
              <img src={item.snippet.thumbnails.high.url} />
            </div>
            <div className="itemvideo__info">
              <div className="itemvideo__info__avt">
                <img src={item.snippet.thumbnails.medium.url} />
              </div>
              <div className="itemvideo__info__text">
                <p className="itemvideo__info__text__name">
                  {item.snippet.title}
                </p>
                <p className="itemvideo__info__text__author">
                  {item.snippet.channelTitle}
                </p>
                <p className="itemvideo__info__text__view">
                  1 Tr lượt xem * 1 tháng trước
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ListVideo;
