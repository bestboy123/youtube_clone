import { context } from '@/store/Context/context';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { useState, useEffect , useContext} from 'react';
// import { createContext } from 'react';

// const ListVideo = createContext()

function Header() {
  const { state, setShow, changeInput, keyDown, clickSearch } =
    useContext(context);
  const { show } = state;
  return (
    <div className="header">
      <div className="start">
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
      <form className="search">
        <input
          className="search__input"
          placeholder="Tìm kiếm"
          onChange={(e) => changeInput(e.target.value)}
          onKeyDown={(e) => keyDown(e.keyCode)}
        />
        <Link to="/searchvideo">
          <button className="search__btn" onClick={() => clickSearch()}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </Link>
        <div className="search__micro">
          <i className="fa-solid fa-microphone"></i>
        </div>
      </form>
      <div className="login">
        <div className="login__grid">
          <i className="fa-solid fa-border-all"></i>
        </div>
        <div className="login__vertical">
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
        <button className="login__btn">
          <i className="fa-solid fa-circle-user"></i>
          <span className="login__btn__text">Đăng Nhập</span>
        </button>
      </div>
    </div>
  );
}

export default Header;
