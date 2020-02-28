import React, { Fragment, useState } from "react";
import Products from "./Products";
import DiscountRules from "./DiscountRules";
import CheckoutList from "./CheckoutList";
import PageTitle from "./PageTitle";

const App = () => {
  const [productList, setProductList] = useState([]);
  const [discountRules, setDiscountRules] = useState({});
  const [checkoutList, setCheckoutList] = useState([]);

  const addProductData = data => {
    const productData = productList;
    productData.push(data);
    setProductList(productData);
  };

  const addRulesData = data => {
    setDiscountRules(data);
  };

  const handleCheckout = rules => {
    const checkoutData = checkoutList;
    checkoutData.push(rules);
    setCheckoutList(checkoutData);
  };

  return (
    <Fragment>
      <PageTitle title="Order Checkout App" />
      <Products
        productList={productList}
        onAddProduct={data => addProductData(data)}
      />
      <DiscountRules
        discountRules={discountRules}
        onAddRules={data => addRulesData(data)}
      />
      <CheckoutList
        checkoutList={checkoutList}
        onCheckoutClick={() => handleCheckout(discountRules)}
      />
    </Fragment>
  );
};

export default App;
