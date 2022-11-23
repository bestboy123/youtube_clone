import React, { useContext } from 'react';
import HashTag from '../screens/homepage/HashTag';
import { context } from '@store/Context/context';
import { Link } from 'react-router-dom';
import SideBar from '../_share/SideBar';

function DetailPage() {
  const { state, clickVideo } = useContext(context);
  const { products, item } = state;

  return (
    <>
      <SideBar />
      <div className="detail_page">
        <div className="detail_page-video">
          <div className="show_video">
            <iframe
              width="420"
              height="345"
              src={`https://www.youtube.com/embed/${item[0].id}`}
              autoPlay
              allowFullScreen></iframe>
            <h3>{item[0].snippet.title}</h3>
            <p>54.754.143 lượt xem...</p>
          </div>
          <div className="infor_video">
            <img src={`${item[0].snippet.thumbnails.medium.url}`} />
            <div className="channel">
              <h3>{item[0].snippet.channelTitle}</h3>
              <span>489 N người đăng ký</span>
            </div>
            <button>Đăng ký</button>
          </div>
        </div>
        <div className="detail_page-list-video">
          <HashTag />
          {products.map((item) => (
            <Link
              to="/detail-page"
              key={item.id.videoId}
              className="list-video-item">
              <div
                className="list-video-item__frames"
                onClick={() => clickVideo(item.id.videoId)}>
                <div>
                  <img src={item.snippet.thumbnails.high.url} />
                </div>
                <div className="context-video">
                  <h4>{item.snippet.title}</h4>
                  <p>{item.snippet.channelTitle}</p>
                  <span>120 Tr lượt xem • 1 năm trước</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default DetailPage;
