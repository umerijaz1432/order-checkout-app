import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types'; 

const AddProduct = props => {
  const { onAddProduct, productList } = props;
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [prize, setPrize] = useState('');

  const onClearClick = () => {
    setCode('');
    setName('');
    setPrize('');
  }

  const onAddClick = () => {
    if (code && name && prize){
    const data = {
      code,
      name,
      prize
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
        <input onChange={e => setPrize(e.target.value)} type="number" value={prize} placeholder="Enter Product Prize" />
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