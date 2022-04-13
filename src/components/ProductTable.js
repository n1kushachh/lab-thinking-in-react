import React from 'react'
import ProductRow from './ProductRow'

function ProductTable(props) {
  return (
    <div className='product-table'>
        <header className='product-table-header'>
            <ul className='product-menu'>
                <li className='product-menu-li'>Name</li>
                <li className='product-menu-li'>Price</li>
            </ul>
            <ProductRow searchTerm={props.searchTerm} setSearchTerm={props.setSearchTerm} products={props.products}></ProductRow>
        </header>
    </div>
  )
}

export default ProductTable