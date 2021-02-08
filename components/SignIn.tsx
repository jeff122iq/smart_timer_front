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
import {useRouter} from "next/router";
// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================

// ========================== COMPONENT ====================================
function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
export function SignIn(props) {
  const router = useRouter();

  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState();
  // const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState: SnackbarOrigin) => {
    setState({open:true, ...newState});
  };

  let isAuth = Boolean(false);
  console.log(isAuth);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setState({ ...state, open: false });
  }
  async function handleSubmitRegister(event) {
    event.preventDefault();
    try {
      const response = await Axios.post("http://localhost:5000/auth/register", {email: email, password: password, role: 2});
      console.log("Access register");
      handleClick({ vertical: 'top', horizontal: 'center' });
      console.log(response.data);
      localStorage.setItem("token", response.data.access_token);
      router.push("/");
    } catch (error) {
      console.log(error)
    }
  }

  async function handleSubmitLogin(event) {
    event.preventDefault();
    try {
      const response = await Axios.post("http://localhost:5000/auth/login", {email: email, password: password});
      console.log("Access lof-ini");
      console.log(response.data);
      handleClick({ vertical: 'top', horizontal: 'center' });
      localStorage.setItem("token", response.data.access_token);
      router.push("/");

    } catch (error) {
      console.log(error)
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
              <InputLabel htmlFor="email-field" style={{color: "gray"}}>
                {/*color: "#f34235"*/}
                Company email
              </InputLabel>
              <Input onChange={(event) => setEmail(event.target.value)}
                id="email-field"
                aria-describedby="component-error-email"
                style={{ borderColor: "#f34235" }}
              />
              {/*<FormHelperText>*/}
              {/*  id="component-error-email"*/}
              {/*  className={classes.formHelperText}*/}

              {/*  <Typography variant="caption" style={{ color: "#f34235" }}>*/}
              {/*  Email already taken*/}
              {/*</Typography>*/}
              {/*<WarningIcon style={{ color: "#f34235" }} />*/}

              {/*</FormHelperText>*/}
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="password-field">Password</InputLabel>
              <Input
                  onChange={e => setPassword(e.target.value)}
                id="password-field"
                aria-describedby="component-error-password" type={"password"}
              />
              <FormHelperText id="component-error-email">
              </FormHelperText>
            </FormControl>
            <Box display="flex">
              {/*<Link href="/testLoggedInPage">*/}
                <Button className={classes.buttonLogin} onClick={handleSubmitLogin}>
                  <a>Log in</a>
                </Button>
              {/*</Link>*/}
              <Button className={classes.buttonSignin} onClick={handleSubmitRegister}>Sign in</Button>
            </Box>
            <Button className={classes.buttonForgot}>Forgot password?</Button>
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
// ========================== COMPONENT ====================================
