import React from 'react';
import SideBar from '../_share/SideBar';
import ContentHomePage from '../screens/homepage/ContentHomePage';

function HomePage() {
  return (
    <div className="homepage">
      <SideBar />
      <ContentHomePage />
    </div>
  );
}

export default HomePage;
