import HomePage from '@/components/page/HomePage';
import DetailPage from '@/components/page/DetailPage';
import SearchVideo from '@/components/page/SearchVideo';
export const routers = [
  {
    id: 1,
    path: '/',
    element: HomePage,
  },
  {
    id: 2,
    path: '/detail-page',
    element: DetailPage,
  },
  {
    id: 3,
    path: '/searchvideo',
    element: SearchVideo,
  },
];
