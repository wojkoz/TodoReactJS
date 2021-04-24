import React from "react";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Button } from "@material-ui/core";
import { loginUser } from "../repository/Repository";
import PropTypes from "prop-types";

function UserLogin({ loginCallback, errorCallabck }) {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
    email: "",
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = async () => {
    const [user, errors] = await loginUser(values.email, values.password);

    if (errors !== null) {
      loginCallback(user);
    } else {
      errorCallabck(errors);
    }
  };

  return (
    <div>
      <div>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input
          id="email"
          value={values.email}
          onChange={handleChange("email")}
        />
      </div>
      <div style={{ marginTop: 20 }}>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          id="password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </div>
      <Button
        style={{ marginTop: 20 }}
        variant="contained"
        disabled={values.email === "" || values.password === ""}
        onClick={handleLogin}
      >
        Login
      </Button>
    </div>
  );
}

UserLogin.propTypes = {
  loginCallback: PropTypes.func.isRequired,
  errorCallabck: PropTypes.func.isRequired,
};

export default UserLogin;
