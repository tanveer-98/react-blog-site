import { Component } from "react";
import "./search-box.styles.css";
const SearchBox = (props:any) =>{
  return   <input
  className={`search-box ${props.className}`}
  type="search"
  placeholder="Search Robots"
  onChange={props.onChangeHandler}
/>
}
export default SearchBox;
