import React, { Fragment } from 'react';
import AddProduct from './AddProduct';
import ProductList from './ProductList';
import PropTypes from 'prop-types'; 

const Products = props => {
  const { onAddProduct, productList, onDeleteProduct, onAddToCart } = props;
  return (
    <Fragment>
      <AddProduct productList={productList} onAddProduct={onAddProduct} />
      <ProductList productList={productList} onDeleteProduct={onDeleteProduct} onAddToCart={onAddToCart} />
    </Fragment>
  );
}

ProductList.propTypes = {
  onDeleteProduct: PropTypes.func,
  onAddProduct: PropTypes.func,
  productList: PropTypes.array,
  onAddToCart: PropTypes.func,
}

ProductList.defaultProps ={
  productList: [],
  onAddProduct: fn => fn,
  onDeleteProduct: fn => fn,
  onAddToCart: fn => fn,
}

export default Products;
