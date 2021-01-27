import { useState, useEffect } from "react";

import classes from "./Auth.module.scss";
import girlSVG from "./girl.svg";
import LoginFrom from "./LoginFrom";
import SignUpFrom from "./SignUpFrom";
import { Route } from "react-router-dom";

import backgroundImage from "./background.jpg";
import Logout from "./Logout";

const Auth = (props) => {
  const [clipath, setClippath] = useState();
  const [clipathColor, setClippathColor] = useState('#7b2caa');

  useEffect(() => {
    const clipathInterval = setInterval(() => {
      const x = Math.floor(Math.random() * 101);
      const y = Math.floor(Math.random() * 101);
      const radius = Math.floor(Math.random() * 101) / 2;
      setClippath(`circle(${radius}% at ${x}% ${y}%)`);
    }, 1000);
    const randomColorInterval = setInterval(() => {
      const randomColor = "#" + (((1 << 24) * Math.random()) | 0).toString(16);
      setClippathColor(randomColor);
    }, 3000)

    return () => {
      clearInterval(clipathInterval);
      clearInterval(randomColorInterval);
    }
  }, []);

  const formChangeHandler = (event) => {
    const cl = event.target.style.clipPath;
    event.target.style.clipPath = "circle(150% at 87% -1%)";
    event.target.style.color = "rgba(0, 0, 0, 0)";
    setTimeout(() => {
      props.history.push(
        props.location.pathname !== "/login" ? "login" : "signup"
      );
      event.target.style.clipPath = cl;
    }, 1000);
  };

  return (
    
    <div
      className={classes.auth}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Route path="/logout" component={Logout} />
      <svg
        className={classes.wave_top}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1554 265"
      >
        <path
          d="M1554,0s-130.411,4.157-398.856,84.928c-266.069,83.147-416.615,95.748-647.053,28.659C192.977,8.55,0,263.1,0,263.1V-.541Z"
          transform="translate(0.5 1.041)"
          fill={clipathColor}
        />
      </svg>
      <div
        className={classes.container}
        style={{
          backgroundColor:
            props.location.pathname === "/login"
              ? "var(--orange)"
              : "var(--choco)",
        }}
      >
        <div
          className={classes.cliping}
          style={{
            clipPath: clipath,
            backgroundColor: clipathColor,
          }}
        />
        <Route path="/login" component={LoginFrom} />
        <Route path="/signup" component={SignUpFrom} />
        <div
          className={classes.btn_change}
          style={{
            backgroundColor:
              props.location.pathname !== "/login"
                ? "var(--orange)"
                : "var(--choco)",
            color:
              props.location.pathname !== "/login"
                ? "var(--black)"
                : "var(--white)",
          }}
          onClick={formChangeHandler}
        >
          {props.location.pathname !== "/login" ? "Log In" : "Sign Up"}
        </div>
      </div>
      <div className={classes.body}>
        <h1>ChatThings</h1>
        <h2>Let's meet a new person</h2>
        <div className={classes.chat_msg}>Hi, what's going on?</div>
      </div>
      <img src={girlSVG} className={classes.girl_svg} alt="girl cartoon" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={classes.wave_bottom}
        viewBox="0 0 1920.002 243.239"
      >
        <path
          d="M1920,836.761S1588.341,1187.9,893.826,970.146c-181.007-64.3-372.329,34.762-516.046,16.8C137.636,956.939-.595,838.571,0,839.208.952,840.229,0,1080,0,1080H1920Z"
          transform="translate(0.002 -836.761)"
          fill={clipathColor}
        />
      </svg>
    </div>
  );
};
export default Auth;
