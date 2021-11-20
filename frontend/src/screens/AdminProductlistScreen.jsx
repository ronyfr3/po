import React from "react";
import { Link } from "react-router-dom";
import ReactTable from "./ReactTable";
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";
import classes from "./AdminProductlistScreen.module.css";

const AdminProductlist = () => {
  return (
    <section className={classes.adminProductListSection}>
      <AdminSidebar />
      <div className={classes.adminProductListRight}>
        <AdminNavbar />
        <div className={classes.adminAllProductList}>
          <div>
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
          <Link to="/admin/productcreate" className={`btn ${classes.addBtn}`}>+ Add New</Link>
        </div>
        <ReactTable />
      </div>
    </section>
  );
};
export default AdminProductlist;
