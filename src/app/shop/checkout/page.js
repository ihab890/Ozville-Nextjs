"use client"
import Breadcrum from '@/components/common/Breadcrum'
import Footer1 from '@/components/Footer/Footer1'
import Home1FooterTop from '@/components/Footer/Home1FooterTop'
import Header1 from '@/components/header/Header1'
import Link from 'next/link'
import React, { useState } from 'react'

const CheckoutPage = () => {
  const [activeOption, setActiveOption] = useState("paypal");
  const [quantities, setQuantities] = useState({ item1: 1, item2: 1 });

  const incrementQuantity = (item) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [item]: prevQuantities[item] + 1
    }));
  }

  const decrementQuantity = (item) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [item]: Math.max(prevQuantities[item] - 1, 1)
    }));
  }

  const handleOptionChange = (option) => {
    setActiveOption(option);
  };
  return (
    <>
      <Header1 fluid={"container-fluid"} />
      <Breadcrum pageTitle={'Secure Checkout'} pagename={'Checkout'}  content='Select Your Favorite Product'/>
      <div className="checkout-page pt-150 mb-120" id="scroll-section">
        <div className="container">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-7">
              <div className="checkout-form-wrapper">
                <div className="checkout-form-title">
                  <h4>Billing Information</h4>
                </div>
                <div className="checkout-form">
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-inner mb-30">
                          <label>Full Name*</label>
                          <input type="text" placeholder="Daniel Scoot" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-inner mb-30">
                          <label>Phone*</label>
                          <input type="text" placeholder="(212)+ 455 645 678" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-inner mb-30">
                          <label>Email Address (Optional)</label>
                          <input type="email" placeholder="info@gmail.com" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-inner mb-30">
                          <label>Your Location</label>
                          <input type="text" placeholder="Type Location" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-inner mb-30">
                          <label>Street Address*</label>
                          <input type="text" placeholder="Street address" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-inner mb-30">
                          <label>Postal Code*</label>
                          <input type="text" placeholder="Postal code" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-inner mb-30">
                          <label>Short Notes*</label>
                          <textarea placeholder="Write Something..." defaultValue={""} />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-inner2">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="contactCheck" />
                            <label className="form-check-label" htmlFor="contactCheck">
                              Save my information for next time when I purchased
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="checkout-form-wrapper">
                <div className="checkout-form-title">
                  <h4>Order Summary</h4>
                </div>
                <div className="checkout-form">
                  <form>
                    <div className="cart-menu">
                      <div className="cart-body">
                        <ul>
                          <li className="single-item">
                            <div className="item-area">
                              <div className="main-item">
                                <div className="item-img">
                                  <img src="/assets/img/inner-pages/product-img1.jpg" alt="" />
                                </div>
                                <div className="content-and-quantity">
                                  <div className="content">
                                    <div className="price-and-btn d-flex align-items-center justify-content-between">
                                      <span>$234</span>
                                      <button type="reset" className="close-btn"><i className="bi bi-x" /></button>
                                    </div>
                                    <h6><Link href="/shop/product-details">Air Pod Pro</Link></h6>
                                  </div>
                                  <div className="quantity-area">
                                    <div className="quantity">
                                      <a className="quantity__minus" onClick={() => decrementQuantity('item1')}><span><i className="bi bi-dash" /></span></a>
                                      <input name="quantity" type="text" className="quantity__input" value={quantities.item1} readOnly />
                                      <a className="quantity__plus" onClick={() => incrementQuantity('item1')}><span><i className="bi bi-plus" /></span></a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="single-item">
                            <div className="item-area">
                              <div className="main-item">
                                <div className="item-img">
                                  <img src="/assets/img/inner-pages/product-img6.jpg" alt="" />
                                </div>
                                <div className="content-and-quantity">
                                  <div className="content">
                                    <div className="price-and-btn d-flex align-items-center justify-content-between">
                                      <span>$150</span>
                                      <button type="reset" className="close-btn"><i className="bi bi-x" /></button>
                                    </div>
                                    <h6><a href="#">Dove Beauty Cream</a></h6>
                                  </div>
                                  <div className="quantity-area">
                                    <div className="quantity">
                                      <a className="quantity__minus" onClick={() => decrementQuantity('item2')}><span><i className="bi bi-dash" /></span></a>
                                      <input name="quantity" type="text" className="quantity__input" value={quantities.item2} readOnly />
                                      <a className="quantity__plus" onClick={() => incrementQuantity('item2')}><span><i className="bi bi-plus" /></span></a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="cart-footer">
                        <div className="pricing-area">
                          <ul>
                            <li><span>Sub Total</span><span>$468</span></li>
                            <li><span>Offer (20%)</span><span>$56</span></li>
                          </ul>
                          <ul className="total">
                            <li><span>Total</span><span>$425</span></li>
                          </ul>
                        </div>
                        <div className="choose-payment-method">
                          <h6>Select Payment Method</h6>
                          <div className="payment-option">
                            <ul>
                              <li
                                onClick={() => handleOptionChange("paypal")}
                                className={`paypal ${activeOption === "paypal" ? "active" : ""}`}
                              >
                                <img src="/assets/img/inner-pages/icon/payPal.svg" alt="" />
                                <div className="checked">
                                  <i className="bi bi-check" />
                                </div>
                              </li>
                              <li
                                className={`stripe ${activeOption === "stripe" ? "active" : ""}`}
                                onClick={() => handleOptionChange("stripe")}
                              >
                                <img src="/assets/img/inner-pages/icon/stripe.svg" alt="" />
                                <div className="checked">
                                  <i className="bi bi-check" />
                                </div>
                              </li>
                              <li
                                className={`offline ${activeOption === "offline" ? "active" : ""}`}
                                onClick={() => handleOptionChange("offline")}
                              >
                                <img src="/assets/img/inner-pages/icon/offline.svg" alt="" />
                                <div className="checked">
                                  <i className="bi bi-check" />
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="pt-25" id="StripePayment" style={{
                            display: activeOption === "stripe" ? "block" : "none",
                          }}>
                            <div className="row g-4">
                              <div className="col-md-12">
                                <div className="form-inner">
                                  <label>Card Number</label>
                                  <input type="text" placeholder="1234 1234 1234 1234" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-inner">
                                  <label>Expiry</label>
                                  <input type="text" placeholder="MM/YY" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-inner">
                                  <label>CVC</label>
                                  <input type="text" placeholder="CVC" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button type="submit" className="primary-btn" data-text="Place Your Order"><span>Place Your Order</span></button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <Home1FooterTop/>                    
      <Footer1 />
    </>
  )
}

export default CheckoutPage