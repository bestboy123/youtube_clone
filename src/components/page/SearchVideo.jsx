import { context } from '@/store/Context/context';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

function SearchVideo() {
  const { state, clickVideo } = useContext(context);
  const { searchList } = state;
  const kind = 'youtube#video';
  return (
    <div className="content_search-video">
      {searchList.map((item) =>
        item.id.kind === kind ? (
          <Link
            to="/detail-page"
            key={item.id.videoId}
            className="search_video-item">
            <div
              className="search_video-item-child"
              onClick={() => clickVideo(item.id.videoId)}>
              <div>
                <img src={item.snippet.thumbnails.high.url} />
              </div>
              <div className="search_video-video">
                <h3>{item.snippet.title}</h3>
                <p>253 Tr lượt xem • 3 năm trước</p>
                <p>
                  <img src={item.snippet.thumbnails.medium.url} />
                  {item.snippet.channelTitle}
                </p>
              </div>
            </div>
          </Link>
        ) : (
          <div key={item.etag} className="search_video-item">
            <div className="search_video-item-frame">
              <img
                src={item.snippet.thumbnails.high.url}
                style={{ borderRadius: '50%', width: '136px', height: '136px' }}
              />
            </div>
            <div className="search_video-video">
              <h3>{item.snippet.title}</h3>
              <p>10 Tr lượt đăng ký • 192 video</p>
            </div>
          </div>
        ),
      )}
    </div>
  );
}
export default SearchVideo;
