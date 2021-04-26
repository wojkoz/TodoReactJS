import React from "react";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Button } from "@material-ui/core";
import { registerUser } from "../repository/Repository";
import PropTypes from "prop-types";

function UserRegister({ errorCallabck }) {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
    email: "",
    username: "",
    errors: "",
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

  const handleRegister = async () => {
    setValues({ ...values, errors: "" });

    const [registered, error] = await registerUser(
      values.email,
      values.username,
      values.password
    );

    if (!registered) {
      errorCallabck(error.message);
      setValues({ ...values, errors: error.errors });
    } else {
      errorCallabck("Successfully registered!");
      setValues({
        password: "",
        showPassword: false,
        email: "",
        username: "",
        errors: "",
      });
    }
  };

  return (
    <div>
      {values.errors !== "" ? values.errors : ""}
      <div>
        <InputLabel htmlFor="emailR">Email</InputLabel>
        <Input
          id="emailR"
          value={values.email}
          onChange={handleChange("email")}
        />
      </div>
      <div style={{ marginTop: 20 }}>
        <InputLabel htmlFor="usernameR">Username</InputLabel>
        <Input
          id="usernameR"
          value={values.username}
          onChange={handleChange("username")}
        />
      </div>
      <div style={{ marginTop: 20 }}>
        <InputLabel htmlFor="passwordR">Password</InputLabel>
        <Input
          id="passwordR"
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
        disabled={
          values.email === "" ||
          values.password === "" ||
          values.username === ""
        }
        onClick={handleRegister}
      >
        Register
      </Button>
    </div>
  );
}

UserRegister.propTypes = {
  errorCallabck: PropTypes.func.isRequired,
};

export default UserRegister;
