import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const DefineRules = props => {
  const { productList, onAddRules, discountRules } = props;
  const [form, setForm] = useState(discountRules);

  const handleOnChange = e => {
    const { name, value } = e.target;
    switch(name){
      case 'maxAmount':
      case 'dropPrice':
        if (value > 100000){
          return;
        }
        break;
      case 'maxNumOrder':
        if (value > 1000){
          return;
        }
        break;
      case 'offPercentage':
        if (value > 100){
          return;
        }
        break;
      default:
        break;
    }
    const values = {
      ...form,
      [name]: value,
    }
    setForm(values);
    onAddRules(values);
  }
  return (
    <Fragment>
      <div>
        <hr />
        <h4>Define Rules </h4>
        - Spend over $ <input type="number" onChange={handleOnChange} name="maxAmount" value={form.maxAmount} className="input-small" placeholder="$" />,
        And Get <input type="number" onChange={handleOnChange} name="offPercentage" value={form.offPercentage} className="input-small" placeholder="Num" /> % off your purchase.
      <br />
        - Buy <input type="number" onChange={handleOnChange} name="maxNumOrder" value={form.maxNumOrder} className="input-small" placeholder="Num" /> or more
         <select onChange={handleOnChange} name="productCode" value={form.productCode} className="input-small">
          <option disabled value={''}> --</option>
          {productList.map((item, key) => {
            return (
              <option key={key} value={item.code}>{item.name}</option>
            )
          })}
        </select>’s
         And price drops to $ <input type="number" onChange={handleOnChange} name="dropPrice" value={form.dropPrice} className="input-small" placeholder="$" />.
         <hr />
      </div>
    </Fragment >
  );
}

DefineRules.propTypes = {
  productList: PropTypes.array,
  onAddRules: PropTypes.func,
}

DefineRules.defaultProps = {
  productList: [],
  onAddRules: fn => fn,
}

export default DefineRules;
