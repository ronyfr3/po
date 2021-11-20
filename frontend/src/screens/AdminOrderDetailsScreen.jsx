import React from "react";
import { useSelector } from "react-redux";
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";
import classes from "./AdminOrderDetailsScreen.module.css";

const AdminOrderDetailsScreen = () => {
  const { orders } = useSelector((state) => state.orderReducer);
  console.log(orders);
  return (
    <section className={classes.orderDetailsScreen}>
      <AdminSidebar />
      <div className={classes.orderDetailsWrapper}>
        <AdminNavbar />
        <div className={classes.orderDetailsRight}>
          <h4>ORDER DETAILS</h4>
          <div className={classes.orderAllLists}>
            <div className={classes.orderAllListsLeft}>
              <ul>
                <li>
                  <span>items summary</span>
                  <span>qty</span>
                  <span>price</span>
                  <span>total price</span>
                </li>
                {orders?.map((x, i) => {
                  return (
                    <li key={i}>
                      <span>
                        {x.orderItems.find((x) => x.name).name}{" "}
                        {x.orderItems.find((x) => x.image).image}
                      </span>
                      <span>{x.orderItems.find((x) => x.qty).qty}</span>
                      <span>{x.orderItems.find((x) => x.price).price}</span>
                      <span>{x.totalPrice}</span>
                    </li>
                  );
                })}
              </ul>
              <ul>
                <li>
                  <span>items summary</span>
                  <span>qty</span>
                  <span>price</span>
                  <span>total price</span>
                </li>
                {orders?.map((x, i) => {
                  return (
                    <li key={i}>
                      <span>
                        {x.orderItems.find((x) => x.name).name}{" "}
                        {x.orderItems.find((x) => x.image).image}
                      </span>
                      <span>{x.orderItems.find((x) => x.qty).qty}</span>
                      <span>{x.orderItems.find((x) => x.price).price}</span>
                      <span>{x.totalPrice}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={classes.orderAllTablesRight}>
              <ul>
                <li>
                  <span>items summary</span>
                  <span>qty</span>
                  <span>price</span>
                  <span>total price</span>
                </li>
                {orders?.map((x, i) => {
                  return (
                    <li key={i}>
                      <span>
                        {x.orderItems.find((x) => x.name).name}{" "}
                        {x.orderItems.find((x) => x.image).image}
                      </span>
                      <span>{x.orderItems.find((x) => x.qty).qty}</span>
                      <span>{x.orderItems.find((x) => x.price).price}</span>
                      <span>{x.totalPrice}</span>
                    </li>
                  );
                })}
              </ul>
              <ul>
                <li>
                  <span>items summary</span>
                  <span>qty</span>
                  <span>price</span>
                  <span>total price</span>
                </li>
                {orders?.map((x, i) => {
                  return (
                    <li key={i}>
                      <span>
                        {x.orderItems.find((x) => x.name).name}{" "}
                        {x.orderItems.find((x) => x.image).image}
                      </span>
                      <span>{x.orderItems.find((x) => x.qty).qty}</span>
                      <span>{x.orderItems.find((x) => x.price).price}</span>
                      <span>{x.totalPrice}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className={classes.rightOrderInfo}>
            <div className={classes.customerInfo}>
              <div className={classes.headCustomerInfo}>
                <h5>CUSTOMER INFO</h5>
                <p>
                  <i className="fas fa-ellipsis-v"></i>
                </p>
              </div>
              <div className={classes.detailed}>
                <div className={classes.leftDetailed}>
                  <p>User name:</p>
                  <p>Email:</p>
                  <p>Mobile no.:</p>
                </div>
                <div className={classes.rightDetailed}>
                  <p>{orders[0]?.user?.name}</p>
                  <p>johndoe@gmail.com</p>
                  <p>+880 123 123 1234</p>
                </div>
              </div>
            </div>
            <div className={classes.shippingInfo}>
              <div className={classes.headShippingInfo}>
                <h5>SHIPPING INFO</h5>
                {/* <!-- <p><i className="fas fa-ellipsis-v"></i></p> --> */}
              </div>
              <div className={classes.detailed}>
                <div className={classes.leftDetailed}>
                  <p>Address:</p>
                  <p>Street:</p>
                  <p>City:</p>
                  <p>State:</p>
                  <p>Country:</p>
                </div>
                <div className={classes.rightDetailed}>
                  <p>{orders[0]?.shippingAddress?.address}</p>
                  <p>North Street</p>
                  <p>{orders[0]?.shippingAddress?.city}</p>
                  <p>Dhaka</p>
                  <p>{orders[0]?.shippingAddress?.country}</p>
                </div>
              </div>
            </div>
            <div className={classes.paymentInfo}>
              <div className={classes.headPaymentInfo}>
                <h5>PAYMENT INFO</h5>
                {/* <!-- <p><i className="fas fa-ellipsis-v"></i></p> --> */}
              </div>
              <div className={classes.detailed}>
                <div className={classes.leftDetailed}>
                  <p>Method:</p>
                  <p>Card Type:</p>
                  <p>Paid Amount:</p>
                </div>
                <div className={classes.rightDetailed}>
                  <p>{orders[0]?.paymentMethod}</p>
                  <p>Visa</p>
                  <p>{orders[0]?.totalPrice}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminOrderDetailsScreen;
