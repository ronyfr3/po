import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./AdminNavbar.module.css";

const AdminNavbar = () => {
  const [notification, setNotification] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleNotification = () => {
    setNotification(!notification);
  };

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <section className={classes.adminNavbarSection}>
      <div className={classes.adminSearch}>
        <input type="text" placeholder="Search here" />
        <img
          className={classes.adminSearchIcon}
          src="/icons/search.png"
          alt="Search"
        />
      </div>
      <ul className={classes.adminNavbar}>
        <li>
          <div className={classes.adminNotification}>
            <i onClick={handleNotification} className="fas fa-bell"></i>
            <span></span>
            {notification ? (
              <div className={classes.notificationWrapper}>
                <div className={classes.notificationContent}>
                  <div className={classes.arrowUp}>
                    <i className="fas fa-sort-up"></i>
                  </div>
                  <div className={classes.headNotificationContent}>
                    <h5>Mark all as read</h5>
                    <h5>Notification Settings</h5>
                  </div>
                  <ul className={classes.notificationList}>
                    <li>
                      <p>You have pending order request for product #1287730 on 14th October 2021</p>
                      <p>2 hours ago</p>
                    </li>
                    <li>
                      <p>You have pending order request for product #1287730 on 14th October 2021</p>
                      <p>2 hours ago</p>
                    </li>
                    <li>
                      <p>You have pending order request for product #1287730 on 14th October 2021</p>
                      <p>2 hours ago</p>
                    </li>
                    <li>
                      <p>You have pending order request for product #1287730 on 14th October 2021</p>
                      <p>2 hours ago</p>
                    </li>
                    <li>
                      <p>You have pending order request for product #1287730 on 14th October 2021</p>
                      <p>2 hours ago</p>
                    </li>
                    <li>
                      <p>You have pending order request for product #1287730 on 14th October 2021</p>
                      <p>2 hours ago</p>
                    </li>
                  </ul>
                 
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </li>
        <li className={classes.settings}>
          <Link to="/admin/settings">
            <i className="fas fa-cog"></i>
          </Link>
        </li>
        <li className={classes.adminNavbarProfile}>
            <img onClick={handleDropdown} src="/images/testimonial.jpg" alt="" />
              {dropdown ? <ul className={classes.adminNavbarDropdown}>
              <li><Link to="/abc">Go to Website</Link></li>
              <li><Link to="/abc">Profile settings</Link></li>
              <li><Link to="/abc">Logout</Link></li>
            </ul> : ''}
            
            {/* <div className="profile-card" id="profilecard">
              <div className="dropdown-wrapper">
                <div className="arrow-up-profile">
                  <i className="fas fa-sort-up"></i>
                </div>
                <ul className="dropdown-profile">
                  <li>
                    <Link to="/">Go to website</Link>
                  </li>
                  <li>
                    <Link to="/">Profile settings</Link>
                  </li>
                  <li>
                    <Link to="/">Log out</Link>
                  </li>
                </ul>
              </div>
            </div> */}
        </li>
      </ul>
    </section>
  );
};

export default AdminNavbar;
