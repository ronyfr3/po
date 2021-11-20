import React from "react"
import { Link } from "react-router-dom"
import AdminNavbar from "../components/AdminNavbar"
import AdminSidebar from "../components/AdminSidebar"
import classes from "./AdminSettingsScreen.module.css"

const AdminSettingsScreen = () => {
  const data = [
    {
      id: "1",
      tabTitle: (
        <li className={classes.tabItem}>
          {/* <Link to="/"> */}
          <i className="far fa-user"></i> <span>ACCOUNT</span>
          {/* </Link> */}
        </li>
      ),
      tabContent: (
        <div className={classes.accountSection}>
          <div className={classes.accountProfile}>
            <h5>EDIT PROFILE</h5>
            <div className={classes.profileImage}>
              <img src="/images/Testimonial.jpg" alt="" />
              <div className={classes.profileChange}>
                <i className="fas fa-camera-retro"></i>
              </div>
            </div>
          </div>
          <form>
            <div className={classes.doubleInput}>
              <div className={classes.inputLeft}>
                <label htmlFor="">First name</label>
                <input type="text" placeholder="Emily" />
              </div>
              <div className={classes.inputRight}>
                <label htmlFor="">Last name</label>
                <input type="text" placeholder="Blunt" />
              </div>
            </div>
            <div className={classes.doubleInput}>
              <div className={classes.inputLeft}>
                <label htmlFor="">Email</label>
                <input type="text" placeholder="emily@gmail.com" />
              </div>
              <div className={classes.inputRight}>
                <label for="">Phone number</label>
                <input type="text" placeholder="+880 123 123 1234" />
              </div>
            </div>
            <div className={classes.noDoubleInput}>
              <label htmlFor="">Address</label>
              <input type="text" placeholder="1368 Hayhrust lane" />
            </div>
            <div className={classes.doubleInput}>
              <div className={classes.inputLeft}>
                <label htmlFor="">First name</label>
                <input type="text" placeholder="Mcallen" />
              </div>
              <div className={classes.inputRight}>
                <label htmlFor="">Last name</label>
                <input type="text" placeholder="New York" />
              </div>
            </div>
            <div className={classes.doubleInput}>
              <div className={classes.inputLeft}>
                <label htmlFor="">First name</label>
                <input type="text" placeholder="11357" />
              </div>
              <div className={classes.inputRight}>
                <label htmlFor="">Last name</label>
                <input type="text" placeholder="United States" />
              </div>
            </div>
            <div className={classes.accountButtons}>
              <button className={`btn ${classes.saveBtn}`}>SAVE CHANGES</button>
              <button className={`btn ${classes.cancelBtn}`}>CANCEL</button>
            </div>
          </form>
        </div>
      ),
    },
    {
      id: "2",
      tabTitle: (
        <li className={classes.tabItem}>
          {/* <Link to="/"> */}
          <i className="far fa-bell"></i> <span>NOTIFICATION</span>
          {/* </Link> */}
        </li>
      ),
      tabContent: (
        <div className={classes.notificationSection}>
          <div className={classes.notificationDetails}>
            <h5>EDIT PROFILE</h5>
          </div>
          <div className={classes.notificationFiles}>
            <div className={classes.noti}>
              <div className={classes.notiLeft}>
                <h6>Order Alert</h6>
                <p>
                  Send me a copy of order email to my personal email address
                </p>
              </div>
              <div className={classes.notiRight}>
                <label className={classes.switch}>
                  <input type="checkbox" checked />
                  <span className={`${classes.slider} ${classes.round}`}></span>
                </label>
              </div>
            </div>
            <div className={classes.noti}>
              <div className={classes.notiLeft}>
                <h6>Order Alert</h6>
                <p>
                  Send me a copy of order email to my personal email address
                </p>
              </div>
              <div className={classes.notiRight}>
                <label className={classes.switch}>
                  <input type="checkbox" />
                  <span className={`${classes.slider} ${classes.round}`}></span>
                </label>
              </div>
            </div>
            <div className={classes.noti}>
              <div className={classes.notiLeft}>
                <h6>Order Alert</h6>
                <p>
                  Send me a copy of order email to my personal email address
                </p>
              </div>
              <div className={classes.notiRight}>
                <label className={classes.switch}>
                  <input type="checkbox" checked />
                  <span className={`${classes.slider} ${classes.round}`}></span>
                </label>
              </div>
            </div>
            <div className={classes.noti}>
              <div className={classes.notiLeft}>
                <h6>Order Alert</h6>
                <p>
                  Send me a copy of order email to my personal email address
                </p>
              </div>
              <div className={classes.notiRight}>
                <label className={classes.switch}>
                  <input type="checkbox" />
                  <span class={`${classes.slider} ${classes.round}`}></span>
                </label>
              </div>
            </div>
            <div className={classes.noti}>
              <div className={classes.notiLeft}>
                <h6>Order Alert</h6>
                <p>
                  Send me a copy of order email to my personal email address
                </p>
              </div>
              <div className={classes.notiRight}>
                <label className={classes.switch}>
                  <input type="checkbox" checked />
                  <span className={`${classes.slider} ${classes.round}`}></span>
                </label>
              </div>
            </div>
            <div className={classes.noti}>
              <div className={classes.notiLeft}>
                <h6>Order Alert</h6>
                <p>
                  Send me a copy of order email to my personal email address
                </p>
              </div>
              <div className={classes.notiRight}>
                <label className={classes.switch}>
                  <input type="checkbox" checked />
                  <span className={`${classes.slider} ${classes.round}`}></span>
                </label>
              </div>
            </div>
          </div>
          <div className={classes.notificationButtons}>
            <button className={`btn ${classes.saveBtn}`}>SAVE CHANGES</button>
            <button className={`btn ${classes.cancelBtn}`}>CANCEL</button>
          </div>
        </div>
      ),
    },
    {
      id: "3",
      tabTitle: (
        <li className={classes.tabItem}>
          {/* <Link to="/"> */}
          <i className="fas fa-shield-alt"></i> <span>SECURITY</span>
          {/* </Link> */}
        </li>
      ),
      tabContent: (
        <div className={classes.securitySection}>
          <div className={classes.securityDetails}>
            <h5>PASSWORD SETTINGS</h5>
          </div>
          <form>
            <div className={classes.emailField}>
              <label htmlFor="">Email address</label>
              <input type="email" name="" id="" placeholder="emily@gmail.com" />
            </div>
            <div className={classes.changePassword}>
              <div className="">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="***************"
                />
              </div>
              <div className="">
                <Link to="/">Change password</Link>
              </div>
            </div>
            <div className={classes.noti}>
              <div className={classes.notiLeft}>
                <h6>Security Alert</h6>
                <p>Notify me if someone want to login in my account</p>
              </div>
              <div className={classes.notiRight}>
                <label className={classes.switch}>
                  <input type="checkbox" checked />
                  <span className={`${classes.slider} ${classes.round}`}></span>
                </label>
              </div>
            </div>
            <div className={classes.securityButtons}>
              <button className={`btn ${classes.saveBtn}`}>SAVE CHANGES</button>
              <button className={`btn ${classes.cancelBtn}`}>CANCEL</button>
            </div>
          </form>
        </div>
      ),
    },
  ]

  const [visibleTab, setVisibleTab] = React.useState(data[0].id)

  const listTitles = data.map((item) => (
    <li
      onClick={() => setVisibleTab(item.id)}
      classNameName={
        visibleTab === item.id ? "tab-title tab-title--active" : "tab-title"
      }
    >
      {item.tabTitle}
    </li>
  ))

  const listContent = data.map((item) => (
    <p style={visibleTab === item.id ? {} : { display: "none" }}>
      {item.tabContent}
    </p>
  ))
  return (
    <section className={classes.settingsSection}>
      <AdminSidebar />
      <div className={classes.settingsWrapper}>
        <AdminNavbar />
        <div className={classes.settingsDetails}>
          <div className="">
            <h4>SETTINGS</h4>
          </div>
        </div>
        <div className={classes.settingsDetailsProfile}>
          <div className={classes.settingsDetailsWrapper}>
            <ul className={classes.settingsDetailsLeft}>{listTitles}</ul>
            <div className={classes.settingsDetailsRight}>{listContent}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdminSettingsScreen
