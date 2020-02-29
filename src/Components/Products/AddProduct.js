import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types'; 

const AddProduct = props => {
  const { onAddProduct, productList } = props;
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const onClearClick = () => {
    setCode('');
    setName('');
    setPrice('');
  }

  const onAddClick = () => {
    if (code && name && price){
    const data = {
      code,
      name,
      price
    }
    const isDataExist = productList.filter(item => item.code === code);
    if (isDataExist.length > 0){
        alert('Product Code Already Exists')
    }else{
    onAddProduct(data);
    onClearClick();
    }
  }
  }

  return (
    <Fragment>
      <div>
      <h4>Add Product</h4>
        <input onChange={e => setCode(e.target.value)} value={code} placeholder="Enter Product Code" />
        <input onChange={e => setName(e.target.value)} value={name} placeholder="Enter Product Name" />
        <input onChange={e => setPrice(e.target.value)} type="number" value={price} placeholder="Enter Product Price" />
        <button className="btn" onClick={onClearClick}>Clear</button>
        <button className="btn" onClick={onAddClick}>Add Product</button>
      </div>
    </Fragment>
  );
}

AddProduct.defaultProps = {
  productList: [],
  onAddProduct: fn => fn,
}

AddProduct.propTypes = {
  onAddProduct: PropTypes.func,
  productList: PropTypes.array,
}

export default AddProduct;