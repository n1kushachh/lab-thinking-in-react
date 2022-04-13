import React from 'react'
import { useState } from 'react'
import jsonData from '../data.json'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'


function ProductsPage(props) {

    const [products, setProducts] = useState(jsonData);
    const [searchTerm, setSearchTerm] = useState("");

    // Working on radio buttons
    // const [radioButton, setRadioButton] = useState();


  return (
    <div className='products-page'>
        <h1 className='products-page-h1'>Iron Store</h1>
        
        <SearchBar handleInputChange={(event) => {setSearchTerm(event.target.value)}}></SearchBar>
        <ProductTable searchTerm={searchTerm} setSearchTerm={setSearchTerm} products={products}></ProductTable>
    </div>
  )
}

export default ProductsPage