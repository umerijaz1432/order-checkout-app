import React, { Fragment } from 'react';
import PropTypes from "prop-types";

const CheckoutList = props => {
  const { checkoutList, bucketList } = props;
  return (
    <Fragment>
      <div>
        <center>
          <button className="btn">{bucketList.length > 0 ? `(${bucketList.length})` : ''} Checkout</button>
        </center>
        <table>
          <tbody>
            <tr>
              <th>#</th>
              <th>Busket Items</th>
              <th>Total Prize</th>
            </tr>
            {checkoutList.map((item, key) => {
              return (
                <tr>
                  <td>{key}</td>

                  <td>{item.products.map(product => { return product.code })}</td>
                  <td>$ {item.totalAmount}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}

CheckoutList.propTypes = {
  checkoutList: PropTypes.array,
  bucketList: PropTypes.array,
}

CheckoutList.defaultProps = {
  checkoutList: [],
  bucketList: [],
}

export default CheckoutList;
