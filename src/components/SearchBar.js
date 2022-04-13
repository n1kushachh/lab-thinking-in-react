import React from 'react'

function SearchBar(props) {

  // Working on radio buttons
  // console.log(props.radioBtn)
  return (
    <div className='search-bar'>
        <h1 className='search-bar-h1'>Search</h1>
        <input className='search-input' type="text" size="50" onChange={props.handleInputChange}></input>
        <div className='radio-show-product'>
            <input onChange={props.handleRadioButton} type="radio" placeholder='Only show products in stock'></input>
            <label>Only show products in stock</label>
        </div>
    </div>
  )
}

export default SearchBar