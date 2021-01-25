import { useState } from "react";

import axios from "../../axios";
import { form as formClass, error as errorClass} from "./Auth.module.scss";

const LoginFrom = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState();

  const submitHandler = (event) => {
    event.preventDefault();

    axios
      .post("account/login/", {
        username: username,
        password: password,
      })
      .then(
        (res) => {
          console.log(res.data);
        },
      )
      .catch(err => {
        setError(err.response.data.non_field_errors[0]);
      })
  };

  return (
    <form className={formClass} onSubmit={submitHandler}>
      {error && <input style={{fontSize: '1.1rem'}} className={errorClass} type="text" value={error} />}
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
