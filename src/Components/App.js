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
      discountRules: {
        maxAmount: 30,
        offPercentage: 10,
        maxNumOrder: 2,
        productCode: '',
        dropPrice: 3.89,
      },
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
    const { checkoutList, bucketList } = this.state;
    if (bucketList.length > 0) {
      let totalAmount = 0;
      let itemCodes = [];
      let multiOrderOffer = [];
      let dropCharges = 0;
      let data = {};
      for (let i = 0; i < bucketList.length; i++) {
        totalAmount = Number(totalAmount) + Number(bucketList[i].price);
        itemCodes.push(bucketList[i].code);
        data = {
          itemCodes,
          totalAmount,
        }
        if (rules.productCode && bucketList[i].code === rules.productCode){
            multiOrderOffer.push(bucketList[i].code);
        }
      }
      if (rules.maxAmount && totalAmount > rules.maxAmount){
        dropCharges = Number(dropCharges) + (Number(totalAmount)/100) * Number(rules.offPercentage);
      } 
     if (multiOrderOffer.length >= rules.maxNumOrder){
      dropCharges = Number(dropCharges) + Number(rules.dropPrice);
      }
      data.totalAmount = Number(totalAmount) - Number(dropCharges);
      checkoutList.push(data);
      this.setState({
        checkoutList,
        bucketList: [],
      })
    }
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
          onDeleteProduct={key => this.onDeleteProduct(key)}
          onAddToCart={item => this.addToCart(item)}
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
