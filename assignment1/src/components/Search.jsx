import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setSearchItem } from '../redux/features/searchItemSlice';

function Search() {
    const dispatch = useDispatch()
    const searchItem = useSelector((state) => state.searchItem);

  return (
    <div>
      <input
        type="text"
        placeholder="Search by car name..."
        className="w-full p-2"
        value={searchItem.searchItem}
        onChange={(e) => dispatch(setSearchItem(e.target.value))}
      />
    </div>
  );
}

export default Search