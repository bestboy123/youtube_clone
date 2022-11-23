import React, { useContext } from 'react';

import { Home } from '@mui/icons-material';
import ExploreIcon from '@mui/icons-material/Explore';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import HistoryIcon from '@mui/icons-material/History';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import FeedIcon from '@mui/icons-material/Feed';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import AlbumIcon from '@mui/icons-material/Album';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { context } from '@/store/Context/context';
import { useLocation } from 'react-router-dom';
import { Drawer } from '@mui/material';
import { Link } from 'react-router-dom';

const arrItemSidebarMainOne = [
  { name: 'Trang chủ', icon: <Home /> },
  { name: 'Khám phá', icon: <ExploreIcon /> },
  { name: 'Shorts', icon: <SlowMotionVideoIcon /> },
  { name: 'Kênh đăng kí', icon: <OndemandVideoIcon /> },
];

const arrItemSidebarMainTow = [
  { name: 'Thư viện', icon: <VideoLibraryIcon /> },
  { name: 'Video đã xem', icon: <HistoryIcon /> },
];

const arrItemSidebarMainThree = [
  { name: 'Hãy đăng nhập để thích video, bình luận và đăng ký kênh', icon: '' },
  {
    name: (
      <button>
        <AccountCircleIcon className="iconbtn" /> Đăng nhập
      </button>
    ),
    icon: '',
  },
];

const arrItemSidebarMainFour = [{ name: 'HAY NHẤT TRÊN YOUTUBE', icon: '' }];

const arrItemSidebarMainFive = [
  { name: 'Âm nhạc', icon: <MusicNoteIcon /> },
  { name: 'Thể thao', icon: <EmojiEventsIcon /> },
  { name: 'Trò chơi', icon: <SportsEsportsIcon /> },
  { name: 'Tin tức', icon: <FeedIcon /> },
  { name: 'Sự kiện trực tiếp', icon: <PodcastsIcon /> },
  { name: 'Video 360', icon: <AlbumIcon /> },
];

const arrItemSidebarMainSix = [
  { name: 'Xem qua các kênh', icon: <AddCircleOutlineIcon /> },
];

const arrItemSidebarMainSeven = [
  { name: 'DỊCH VỤ KHÁC CỦA YOUTUBE', icon: '' },
];

const arrItemSidebarMainEight = [
  { name: 'Sự kiện trực tiếp', icon: <PodcastsIcon /> },
];

const arrItemSidebarMainNine = [
  { name: 'Cài đặt', icon: <SettingsIcon /> },
  { name: 'Lịch sử báo cáo', icon: <AssistantPhotoIcon /> },
  { name: 'Trợ giúp', icon: <HelpOutlineIcon /> },
  { name: 'Gửi phản hồi', icon: <FeedbackIcon /> },
];

const arrItemSidebarMainTen = [
  {
    name: 'Giới thiệu Báo chí Bản quyền Liên hệ với chúng tôi Người sáng tạo Quảng cáo Nhà phát triển',
    icon: '',
  },
  {
    name: 'Điều khoản Quyền riêng tư Chính sách và an toàn Cách YouTube hoạt động Thử các tính năng mới',
    icon: '',
  },
  { name: '© 2022 Google LLC', icon: '' },
];
const arrItemSidebarMain = [
  { name: 'Trang chủ', icon: <Home /> },
  { name: 'Khám phá', icon: <ExploreIcon /> },
  { name: 'Shorts', icon: <SlowMotionVideoIcon /> },
  { name: 'Kênh đăng kí', icon: <OndemandVideoIcon /> },
  { name: 'Thư viện', icon: <VideoLibraryIcon /> },
  { name: 'Video đã xem', icon: <HistoryIcon /> },
  { name: 'Hãy đăng nhập để thích video, bình luận và đăng ký kênh', icon: '' },
  {
    name: (
      <button>
        <AccountCircleIcon className="iconbtn" /> Đăng nhập
      </button>
    ),
    icon: '',
  },
  { name: 'HAY NHẤT TRÊN YOUTUBE', icon: '' },
  { name: 'Âm nhạc', icon: <MusicNoteIcon /> },
  { name: 'Thể thao', icon: <EmojiEventsIcon /> },
  { name: 'Trò chơi', icon: <SportsEsportsIcon /> },
  { name: 'Tin tức', icon: <FeedIcon /> },
  { name: 'Sự kiện trực tiếp', icon: <PodcastsIcon /> },
  { name: 'Video 360', icon: <AlbumIcon /> },
  { name: 'Xem qua các kênh', icon: <AddCircleOutlineIcon /> },
  { name: 'DỊCH VỤ KHÁC CỦA YOUTUBE', icon: '' },
  { name: 'Sự kiện trực tiếp', icon: <PodcastsIcon /> },
  { name: 'Cài đặt', icon: <SettingsIcon /> },
  { name: 'Lịch sử báo cáo', icon: <AssistantPhotoIcon /> },
  { name: 'Trợ giúp', icon: <HelpOutlineIcon /> },
  { name: 'Gửi phản hồi', icon: <FeedbackIcon /> },
  {
    name: 'Giới thiệu Báo chí Bản quyền Liên hệ với chúng tôi Người sáng tạo Quảng cáo Nhà phát triển',
    icon: '',
  },
  {
    name: 'Điều khoản Quyền riêng tư Chính sách và an toàn Cách YouTube hoạt động Thử các tính năng mới',
    icon: '',
  },
  { name: '© 2022 Google LLC', icon: '' },
];

const arrItemSidebarSummary = [
  { name: 'Trang chủ', icon: <Home /> },
  { name: 'Khám phá', icon: <ExploreIcon /> },
  { name: 'Shorts', icon: <SlowMotionVideoIcon /> },
  { name: 'Kênh đăng kí', icon: <OndemandVideoIcon /> },
  { name: 'Thư viện', icon: <VideoLibraryIcon /> },
];

function SideBar() {
  const { state, setShow } = useContext(context);
  const { show } = state;
  const location = useLocation();
  return (
    <>
      {location.pathname.includes('/detail-page') ? (
        <Drawer
          anchor="left"
          open={show}
          onClose={show}
          PaperProps={{
            sx: { width: '240px' },
          }}>
          <div className="start-detailpage">
            <span className="start__menu" onClick={() => setShow(show)}>
              <i className="fa-solid fa-bars"></i>
            </span>
            <Link to="/">
              <img
                className="start__img"
                src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
              />
            </Link>
            <span className="start__text">VN</span>
          </div>
          <div className="sidebarlist">
            {arrItemSidebarMain.map((item, index) => (
              <div className="sidebarItem" key={index}>
                {item.icon !== '' ? <i>{item.icon}</i> : null}
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </Drawer>
      ) : (
        <div className={`sidebar ${show ? null : 'zoomout'}`}>
          {show && (
            <div className="sidebarlist">
              {arrItemSidebarMainOne.map((item, index) => (
                <div className="hover sidebarItem" key={index}>
                  {item.icon !== '' ? <i>{item.icon}</i> : null}
                  <p>{item.name}</p>
                </div>
              ))}
              <hr></hr>
              {arrItemSidebarMainTow.map((item, index) => (
                <div className="sidebarItem hover" key={index}>
                  {item.icon !== '' ? <i>{item.icon}</i> : null}
                  <p>{item.name}</p>
                </div>
              ))}
              <hr></hr>
              {arrItemSidebarMainThree.map((item, index) => (
                <div className="sidebarItem" key={index}>
                  {item.icon !== '' ? <i>{item.icon}</i> : null}
                  <p>{item.name}</p>
                </div>
              ))}
              <hr></hr>
              {arrItemSidebarMainFour.map((item, index) => (
                <div className="sidebarItem" key={index}>
                  {item.icon !== '' ? <i>{item.icon}</i> : null}
                  <p>{item.name}</p>
                </div>
              ))}
              <hr></hr>
              {arrItemSidebarMainFive.map((item, index) => (
                <div className="sidebarItem hover" key={index}>
                  {item.icon !== '' ? <i>{item.icon}</i> : null}
                  <p>{item.name}</p>
                </div>
              ))}
              <hr></hr>
              {arrItemSidebarMainSix.map((item, index) => (
                <div className="sidebarItem hover" key={index}>
                  {item.icon !== '' ? <i>{item.icon}</i> : null}
                  <p>{item.name}</p>
                </div>
              ))}
              <hr></hr>
              {arrItemSidebarMainSeven.map((item, index) => (
                <div className="sidebarItem" key={index}>
                  {item.icon !== '' ? <i>{item.icon}</i> : null}
                  <p>{item.name}</p>
                </div>
              ))}
              <hr></hr>
              {arrItemSidebarMainEight.map((item, index) => (
                <div className="sidebarItem hover" key={index}>
                  {item.icon !== '' ? <i>{item.icon}</i> : null}
                  <p>{item.name}</p>
                </div>
              ))}
              <hr></hr>
              {arrItemSidebarMainNine.map((item, index) => (
                <div className="sidebarItem hover" key={index}>
                  {item.icon !== '' ? <i>{item.icon}</i> : null}
                  <p>{item.name}</p>
                </div>
              ))}
              <hr></hr>
              {arrItemSidebarMainTen.map((item, index) => (
                <div className="sidebarItem" key={index}>
                  {item.icon !== '' ? <i>{item.icon}</i> : null}
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          )}
          {!show
            ? arrItemSidebarSummary.map((item, index) => (
                <div key={index} className="sidebarSummary">
                  <i>{item.icon}</i>
                  <p>{item.name}</p>
                </div>
              ))
            : null}
        </div>
      )}
    </>
  );
}

export default SideBar;
