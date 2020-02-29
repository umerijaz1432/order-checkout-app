import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProductList = props => {
  const { productList, onDeleteProduct, onAddToCart } = props;
  return (
    <Fragment>
      {productList.length > 0 && (<div>
        <table>
          <tbody>
            <tr>
              <th>Product Code</th>
              <th>Product Name</th>
              <th>Product Prize</th>
              <th></th>
            </tr>
            {productList.map((item, key) => {
              return (
                <tr key={key}>
                  <td>{item.code}</td>
                  <td>{item.name}</td>
                  <td>$ {item.prize}</td>
                  <td>
                    <button onClick={() => onAddToCart(item)} className="btn-small">Add to Cart</button>
                    <button onClick={() => onDeleteProduct(item)} className="btn-small">Delete</button></td>
                </tr>
              )
            })
            }
          </tbody>
        </table>
      </div>
      )}
    </Fragment>
  );
}

ProductList.propTypes = {
  productList: PropTypes.array,
  onDeleteProduct: PropTypes.func,
  onAddToCart: PropTypes.func,
}

ProductList.defaultProps = {
  productList: [],
  onDeleteProduct: fn => fn,
  onAddToCart: fn => fn,
}

export default ProductList;