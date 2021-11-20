import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";
import ReactTable2 from "./ReactTable2";
import classes from "./AdminOrderlistScreen.module.css";

const AdminOrderlistScreen = () => {
  // const { orders } = useSelector((state) => state.orderReducer)
  return (
    <section className={classes.adminOrderListSection}>
      <AdminSidebar />
      <div className={classes.adminOrderListRight}>
        <AdminNavbar />
        <div className={classes.adminAllOrderList}>
          <h4>ALL ORDER LIST</h4>
          {/* <ul class="product-divisions">
            <li>
              <Link to="/">ALL</Link>
            </li>
            <li>
              <Link to="/">IN STOCK</Link>
            </li>
            <li>
              <Link to="/">OUT OF STOCK</Link>
            </li>
          </ul> */}
        </div>
        <ReactTable2 />
      </div>
    </section>
  );
};
export default AdminOrderlistScreen;
