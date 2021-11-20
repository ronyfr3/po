import React, {useState} from "react";
import { Link } from 'react-router-dom'

import classes from './AdminSidebar.module.css'

const AdminSidebar = () => {
  // const [active, secActive] = useState('active')
  return (
    <section className={classes.adminSidebarSection}>
      <div className={classes.topAdminSidebar}>
        <div className={classes.adminSidebarLogo}>
          <Link to="/">
          <img src="/icons/po_logo.png" alt="" />
          </Link>
        </div>
        <ul>
          <li className={classes.active}>
            <i className="fas fa-th-large"></i>
            <Link to="/admin/dashboard">DASHBOARD</Link>
          </li>
          <li>
            <i className="fas fa-shopping-cart"></i>
            <Link to="/admin/orderlist">ORDERS</Link>
          </li>
          <li>
            <i className="fas fa-shopping-bag"></i>
            <Link to="/admin/productlist">PRODUCTS</Link>
          </li>
          <li>
            <i className="fas fa-cog"></i>
            <Link to="/admin/settings">SETTINGS</Link>
          </li>
        </ul>
      </div>
      <div className={classes.bottomAdminSidebar}>
        <div className={classes.bottomAdminSidebarWrapper}>
          <div className={classes.bottomAdminSidebarImage}>
            <img src="/images/testimonial.jpg" alt="" />
          </div>
          <div className={classes.bottomAdminName}>
            <h5>Emily Blunt</h5>
            <p>Admin</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminSidebar;
