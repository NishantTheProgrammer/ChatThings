import { useState, useEffect } from "react";

import classes from "./Auth.module.scss";
import waveTopSVG from "./waveTop.svg";
import waveBottomSVG from "./waveBottom.svg";
import girlSVG from "./girl.svg";

const Auth = (props) => {
  const [formType, setFormType] = useState("Log In");
  const [clipath, setClippath] = useState();
  const [clipathColor, setClippathColor] = useState();

  useEffect(() => {
    setInterval(() => {
      const x = Math.floor(Math.random() * 101);
      const y = Math.floor(Math.random() * 101);
      const radius = Math.floor(Math.random() * 101) / 2;
      const randomColor = "#" + (((1 << 24) * Math.random()) | 0).toString(16);

      setClippath(`circle(${radius}% at ${x}% ${y}%)`);
      setClippathColor(randomColor);
    }, 1000);
  }, []);

  const formChangeHandler = (event) => {
    const cl = event.target.style.clipPath;
    event.target.style.clipPath = "circle(150% at 87% -1%)";
    event.target.style.color = "rgba(0, 0, 0, 0)";
    setTimeout(() => {
      setFormType(formType !== "Log In" ? "Log In" : "Sign Up");
      event.target.style.clipPath = cl;
    }, 1000);
  };

  const loginForm = (
    <form className={classes.form} action="#">
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="submit" id="submitbtn" value={formType} />
    </form>
  );
  const signUpForm = (
    <form className={classes.form} action="#">
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="submit" id="submitbtn" value={formType} />
    </form>
  );

  return (
    <>
      <img src={waveTopSVG} className={classes.wave_top} alt="" />
      <div
        className={classes.container}
        style={{
          backgroundColor:
            formType === "Log In" ? "var(--orange)" : "var(--choco)",
        }}
      >
        <div
          className={classes.cliping}
          style={{
            clipPath: clipath,
            backgroundColor: clipathColor,
          }}
        />
        {formType === "Log In" ? loginForm : signUpForm}
        <div
          className={classes.btn_change}
          style={{
            backgroundColor:
              formType !== "Log In" ? "var(--orange)" : "var(--choco)",
            color: formType !== "Log In" ? "var(--black)" : "var(--white)",
          }}
          onClick={formChangeHandler}
        >
          {formType !== "Log In" ? "Log In" : "Sign Up"}
        </div>
      </div>
      <div className={classes.body}>
        <h1>ChatThings</h1>
        <h2>Let's meet a new person</h2>
        <div className={classes.chat_msg}>Hi, what's going on?</div>
      </div>
      <img src={girlSVG} className={classes.girl_svg} alt="girl cartoon" />
      <img src={waveBottomSVG} className={classes.wave_bottom} alt="" />
    </>
  );
};
export default Auth;
