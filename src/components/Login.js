import React, { useState } from "react";
import PropTypes from "prop-types";
import UserLogin from "./UserLogin.js";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import UserRegister from "./UserRegister.js";
import Grid from "@material-ui/core/Grid";

function Login({ setUserLoggedCallback }) {
  const [values, setValues] = useState({
    error: "",
    user: null,
    openSnackbar: false,
  });

  const handleError = (error) => {
    if (error === null || error === "") {
      error = "Couldn't login!";
    }
    setValues({ ...values, error: error, openSnackbar: true });
  };

  const handleLogin = (user) => {
    setUserLoggedCallback(user);
    setValues({ ...values, user: user });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setValues({ ...values, openSnackbar: false });
  };

  const handleLogout = () => {
    setUserLoggedCallback(null);
    setValues({
      error: "",
      user: null,
      openSnackbar: false,
    });
  };

  if (values.user !== null) {
    return (
      <div>
        <h2>{values.user.username}</h2>
        <div>
          <Button
            style={{ marginTop: 20 }}
            variant="contained"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <UserLogin
              errorCallabck={handleError}
              loginCallback={handleLogin}
            ></UserLogin>
          </Grid>
          <Grid item xs={6}>
            <UserRegister errorCallabck={handleError}></UserRegister>
          </Grid>
        </Grid>

        <div>
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            open={values.openSnackbar}
            autoHideDuration={4000}
            onClose={handleClose}
            message={values.error}
            action={
              <React.Fragment>
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={handleClose}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </React.Fragment>
            }
          />
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  setUserLoggedCallback: PropTypes.func.isRequired,
};

export default Login;
