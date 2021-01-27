import { useState } from "react";

import axios from "../../axios";
import { form as formClass, error as errorClass } from "./Auth.module.scss";

const LoginFrom = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post("account/token/obtain/", {
        username,
        password,
      })
      .then((res) => {
        axios.defaults.headers["Authorization"] = "JWT " + res.data.access;
        localStorage.setItem("access_token", res.data.access);
        localStorage.setItem("refresh_token", res.data.refresh);
        props.history.push("/");
      })
      .catch((err) => {
        setError("Couldn't login");
      });
  };

  return (
    <form className={formClass} onSubmit={submitHandler}>
      {error && (
        <input
          style={{ fontSize: "1.1rem" }}
          className={errorClass}
          type="text"
          value={error}
        />
      )}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" id="submitbtn" value="Log In" />
    </form>
  );
};
export default LoginFrom;
