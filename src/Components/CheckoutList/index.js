import React, { Fragment } from 'react';
import PropTypes from "prop-types";

const CheckoutList = props => {
  const { checkoutList, bucketList, onCheckoutClick } = props;
  return (
    <Fragment>
      <div>
        <center>
          <button onClick={onCheckoutClick} className="btn">{bucketList.length > 0 ? `(${bucketList.length})` : ''} Checkout</button>
        </center>
        <table>
          <tbody>
            <tr>
              <th>#</th>
              <th>Busket Items</th>
              <th>Total Price</th>
            </tr>
            {checkoutList.map((item, key) => {
              return (
                <tr key={key}>
                  <td>{key+1}</td>
                  <td>{item.itemCodes.map(code => { return `${code},` })}</td>
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
  onCheckoutClick: PropTypes.func,
}

CheckoutList.defaultProps = {
  checkoutList: [],
  bucketList: [],
  onCheckoutClick: fn => fn,
}

export default CheckoutList;
