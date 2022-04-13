import React from 'react'

function ProductRow(props) {
    console.log(props.searchTerm)
  return (
      <div className='products-container'>
          {
            props.products.filter((value) => {
                if(props.searchTerm == "") {
                    return value
                } else if(value.name.toLowerCase().includes(props.searchTerm.toLowerCase())) {
                    return value
                }
            }).map((oneProduct, index) => {
                if(oneProduct.inStock == true){
                    return (
                        <div key={index} className='product-row'>
                            <h1 className='product-row-h1'>{oneProduct.name}</h1>
                            <h1 className='product-row-h1'>{oneProduct.price}</h1>
                        </div>
                    )
                } else if(oneProduct.inStock == false){
                    return (
                        <div id={oneProduct.id} key={index} className='product-row'>
                            <h1 className='product-row-h1 outofstock'>{oneProduct.name}</h1>
                            <h1 className='product-row-h1'>{oneProduct.price}</h1>
                        </div>
                    )
                }

            })
          }
      </div>
  )
}

export default ProductRow