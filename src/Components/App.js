import React, { Fragment, Component } from "react";
import Products from "./Products";
import DiscountRules from "./DiscountRules";
import CheckoutList from "./CheckoutList";
import PageTitle from "./PageTitle";
import '../styles/app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      discountRules: {},
      bucketList: [],
      checkoutList: [],
    }
  }

  addProductData = data => {
    const { productList } = this.state;
    productList.push(data);
    this.setState({
      productList,
    })
  };

  addRulesData = data => {
    this.setState({
      discountRules: data,
    })
  };

  handleCheckout = rules => {
    const { checkoutList } = this.state;
    checkoutList.push(rules);
    this.setState({
      checkoutList,
    })
  };

  onDeleteProduct = product => {
    const { productList, bucketList } = this.state;
    const newProductList = productList.filter(item => item.code !== product.code);
    const newBucketList = bucketList.filter(item => item.code !== product.code);
    this.setState({
      productList: newProductList,
      bucketList: newBucketList,
    })

  };

  addToCart = product => {
    const { bucketList } = this.state;
    bucketList.push(product);
    this.setState({
      bucketList,
    })
  };

  render() {
    const { productList, discountRules, checkoutList, bucketList } = this.state;
    return (
      <Fragment>
        <PageTitle title="Order Checkout App" />
        <Products
          productList={productList}
          onAddProduct={data => this.addProductData(data)}
          onDeleteProduct = {key => this.onDeleteProduct(key)}
          onAddToCart = {item => this.addToCart(item)}
        />
        <DiscountRules
          discountRules={discountRules}
          onAddRules={data => this.addRulesData(data)}
          productList={productList}
        />
        <CheckoutList
          checkoutList={checkoutList}
          bucketList={bucketList}
          onCheckoutClick={() => this.handleCheckout(discountRules)}
        />
      </Fragment >
    );
  };
}

export default App;
