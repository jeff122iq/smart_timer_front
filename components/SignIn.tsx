// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================
import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import WarningIcon from "@material-ui/icons/Warning";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGooglePlusG,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import useStyles from "../styles/signin";
import Axios from "axios";
import React, {useState} from "react";
import Snackbar, { SnackbarOrigin } from '@material-ui/core/Snackbar';
export interface State extends SnackbarOrigin {
  open: boolean;
}
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import {Router, useRouter} from "next/router";
import {observer} from "mobx-react";
import jwt_decode from "jwt-decode";
// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================

// ========================== COMPONENT ====================================
function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
export const SignIn = (props) => {
  const router = useRouter();
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState('The field must be filled');
  const [password, setPassword] = useState('');
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [passwordError, setPasswordError] = useState('The field must be filled');
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;
  const handleClick = (newState: SnackbarOrigin) => {
    setState({open:true, ...newState});
  };
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setState({ ...state, open: false });
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailDirty(false);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Incorrect email!");
    } else {
      setEmailError("");
    }
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordDirty(false);
    if (e.target.value.length < 8 || e.target.value.length > 16) {
      setPasswordError("Password must longer 8 and shorter 16");
    } else {
      setPasswordError("");
    }
  }

  async function handleSubmitRegister(event) {
    event.preventDefault();
    try {
      const response = await Axios.post(`http://${process.env.BACK_URL}:${process.env.BACK_PORT}/auth/register`, {email: email, password: password, role: 2});
      console.log("Access register");
      handleClick({ vertical: 'top', horizontal: 'center' });
      localStorage.setItem("token", response.data.access_token);
      router.push("/");
    } catch (error) {
      setEmailError("This email is already token.")
    }
  }

  async function handleSubmitLogin(event) {
    event.preventDefault();
    try {
      const response = await Axios.post(`http://${process.env.BACK_URL}:${process.env.BACK_PORT}/auth/login`, {email: email, password: password, role: 2});
      handleClick({ vertical: 'top', horizontal: 'center' });
      localStorage.setItem("token", response.data.access_token);
      console.log(response.data);
      const decode_role: any = jwt_decode(response.data.access_token);
      if (decode_role.role === "admin") {
        return await router.push("/admin")
      }
      router.push("/");
    } catch (error) {
      setEmailError("User is not created.")
    }
  }

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h6" className={classes.caption}>
          Please, register or sign in for saving your brief
        </Typography>
        <Box
          display="flex"
          className={classes.credsContainer}
          justifyContent="space-between"
        >
          <div className={classes.inputPannel}>
            <FormControl error fullWidth>
              <InputLabel htmlFor="email-field" style={{color: "#5f5f5f"}}>
                Company email
              </InputLabel>
              <Input onChange={handleEmailChange}
                     id="email-field"
                     aria-describedby="component-error-email"
                     style={{color: "#5f5f5f"}}
                     type={"email"}
                     name={"email"}
                     onBlur={e => blurHandler(e)}
                     value={email}
              />
              {(emailDirty && emailError) &&
                <FormHelperText style={{color: "#f44336", margin: "10px 0 5px 0"}}>{emailError}
                  </FormHelperText>}
            </FormControl>
            <FormControl fullWidth>
              <InputLabel style={{color: "#5f5f5f"}} htmlFor="password-field">Password</InputLabel>
              <Input
                  onBlur={e => blurHandler(e)}
                  onChange={handlePasswordChange}
                  id="password-field"
                  aria-describedby="component-error-password"
                  type={"password"}
                  name={"password"}
                  value={password}
                  style={{color: "#5f5f5f"}}
              />
                {(passwordDirty && passwordError) && <FormHelperText style={{color: "#f44336", margin: "10px 0 5px 0"}}>{passwordError}</FormHelperText>}
            </FormControl>
            <Box display="flex">
                <Button className={classes.buttonLogin} onClick={handleSubmitLogin}>
                  <a>Log in</a>
                </Button>
              <Button className={classes.buttonSignin} onClick={handleSubmitRegister}>Sign in</Button>
            </Box>
            {/*<Button className={classes.buttonForgot}>Forgot password?</Button>*/}
          </div>
          <div>
            <Typography variant="h5" className={classes.quickTitle}>
              Quick register with your social media
            </Typography>
            <Box display="flex" flexDirection="column">
              <Button className={clsx(classes.buttonFb, classes.buttonSocial)}>
                <FontAwesomeIcon
                  icon={faFacebookF}
                  width="30px"
                  className={clsx(classes.icon)}
                />
                <Typography variant="body1">Login with Facebook</Typography>
              </Button>
              <Button className={clsx(classes.buttonGp, classes.buttonSocial)}>
                <FontAwesomeIcon
                  icon={faGooglePlusG}
                  width="30px"
                  className={clsx(classes.icon, classes.iconShift)}
                />
                <Typography variant="body1">Login with Google+</Typography>
              </Button>
              <Button className={clsx(classes.buttonTw, classes.buttonSocial)}>
                <FontAwesomeIcon
                  icon={faTwitter}
                  width="30px"
                  className={clsx(classes.icon, classes.iconShift)}
                />
                <Typography variant="body1">Login with Twitter</Typography>
              </Button>
            </Box>
          </div>
        </Box>
        <Snackbar key={vertical + horizontal} open={open}  anchorOrigin={{ vertical, horizontal }} autoHideDuration={3000} onClose={handleClose} style={{zIndex: 99}}>
          <Alert onClose={handleClose} severity="success" style={{transform: "translateY(100%)"}}>
            Succes auth!
          </Alert>
        </Snackbar>
      </Container>
    </div>
  );
}

export default observer(SignIn)
// ========================== COMPONENT ====================================
