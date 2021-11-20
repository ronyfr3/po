import React, { useState } from "react"
import SigninForm from "../components/SigninForm"
import SignupForm from "../components/SignupForm"

import classes from "./SigninSignupScreen.module.css"

const SigninSignupScreen = ({ history }) => {
  const [activeClass, setActiveClass] = useState("")

  const handleSignup = () => {
    setActiveClass(classes.rightPanelActive)
  }

  const handleSignin = () => {
    setActiveClass("")
  }

  return (
    <section className={classes.backgroundSignup}>
      <div className={`${activeClass} ${classes.container}`} id="containerr">
        <div className={`${classes.formContainer} ${classes.signUpContainer}`}>
          <SignupForm history={history} />
        </div>
        <div className={`${classes.formContainer} ${classes.signInContainer}`}>
          <SigninForm history={history} />
        </div>
        <div className={classes.overlayContainer}>
          <div className={classes.overlaySignup}>
            <div
              className={`${classes.overlayPanel}  ${classes.overlayLeft}`}
              style={{
                backgroundImage: `linear-gradient(rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5)), url(${
                  process.env.PUBLIC_URL + "/images/sign-up.png"
                })`,
              }}
            >
              <div className={classes.marginSignup}>
                <img src="/images/Logo.png" alt="" />
                <h5>Already have an account?</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore aliquid quam officia.
                </p>
                <button
                  onClick={handleSignin}
                  className={`${classes.ghost} btn`}
                  id="signIn"
                >
                  Signin
                </button>
              </div>
            </div>
            <div
              className={`${classes.overlayPanel} ${classes.overlayRight}`}
              style={{
                backgroundImage: `linear-gradient(rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5)), url(${
                  process.env.PUBLIC_URL + "/images/sign-up.png"
                })`,
              }}
            >
              <div className={classes.marginSignup}>
                <img src="/images/Logo.png" alt="" />
                <h5>New here?</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                  ipsum dolor sit amet.?
                </p>
                <button
                  onClick={handleSignup}
                  className={`${classes.ghost} btn`}
                  id="signUp"
                >
                  CREATE ACCOUNT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SigninSignupScreen
