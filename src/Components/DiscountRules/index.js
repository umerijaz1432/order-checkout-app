import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const DefineRules = props => {
  const { productList } = props;
  return (
    <Fragment>
      <div>
        <hr />
        <h4>Define Rules </h4>
        - Spend over $ <input className="input-small" placeholder="$" />,
        And Get <input className="input-small" placeholder="Num" /> % off your purchase.
      <br />
        - Buy <input className="input-small" placeholder="Num" /> or more
         <select className="input-small">
          {productList.map((item, key) => {
            return (
              <option key={key} value={item}>{item.name}</option>
            )
          })}
        </select>’s
         And price drops to $ <input className="input-small" placeholder="$" />.
         <hr />
      </div>
    </Fragment>
  );
}

DefineRules.propTypes = {
  productList: PropTypes.array,
}

DefineRules.defaultProps = {
  productList: [],
}

export default DefineRules;
