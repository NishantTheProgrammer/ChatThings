import { useState } from "react";

import { form as formClass, error as errorClass } from "./Auth.module.scss";
import axios from "../../axios";

const SignUpFrom = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const submitHandler = (event) => {
    event.preventDefault();

    axios
      .post("account/register/", {
        username,
        email,
        first_name: firstName,
        last_name: lastName,
        password,
        password2: password,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        
        if(err.response.data.email) setEmail('');
        if(err.response.data.username) setUsername('');
        if(err.response.data.first_name) setFirstName('');
        if(err.response.data.last_name) setLastName('');
        if(err.response.data.password) setPassword('');

        setErrors(err.response.data);
        
        console.log(err.response.data);
      });
  };

  return (
    <form className={formClass} onSubmit={submitHandler}>
      <input
        className={errors.email && errorClass}
        type="email"
        placeholder={(errors.email && errors.email[0]) || "Email"}
        title={(errors.email && errors.email[0]) || "Email"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className={errors.username && errorClass}
        type="text"
        placeholder={(errors.username && errors.username[0]) || "Username"}
        title={(errors.username && errors.username[0]) || "Username"}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className={errors.first_name && errorClass}
        type="text"
        placeholder={(errors.first_name && errors.first_name[0]) || "First Name"}
        title={(errors.first_name && errors.first_name[0]) || "First Name"}
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        className={errors.last_name && errorClass}
        type="text"
        placeholder={(errors.last_name && errors.last_name[0]) || "Last Name"}
        title={(errors.last_name && errors.last_name[0]) || "Last Name"}
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        className={errors.password && errorClass}
        type="password"
        placeholder={(errors.password && errors.password[0]) || "Password"}
        title={(errors.password && errors.password[0]) || "Password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" id="submitbtn" value="Sign Up" />
    </form>
  );
};
export default SignUpFrom;
