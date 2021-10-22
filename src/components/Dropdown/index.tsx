import React, { useRef } from 'react';
import './style.css';
import { useDetectOutsideClick } from './useDetectOutSideClick';
const Dropdown = () => {
  const dropdownRef = useRef<any>(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  // const onClick = () => setIsActive(!isActive);
  function onClick() {
    console.log(123);
    setIsActive(!isActive);
  }
  return (
    <>
      <div className="menu-container">
        <button className="menu-trigger" onClick={onClick}>
          <span className="menu-name">User</span>
          <img
            src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg"
            alt="User avatar"
          />
        </button>
      </div>
      <div
        className={`menu ${isActive ? 'active' : 'inactive'}`}
        ref={dropdownRef}
      >
        <ul className="menu-ul">
          <li className="menu-li">
            <a href="#">测试1</a>
          </li>
          <li className="menu-li">
            <a href="#">测试222</a>
          </li>
          <li className="menu-li">
            <a href="#">测试33333</a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Dropdown;
