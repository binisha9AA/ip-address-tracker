import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

export default function SearchBar() {
  return (
    <>
      <div className="searchbar">
        <input type="text" placeholder="search for IP address or Domain" />
        <div className="arrow-right">
          <MdOutlineKeyboardArrowRight />
        </div>
      </div>
    </>
  );
}
