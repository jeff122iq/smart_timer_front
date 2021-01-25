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
import WarningIcon from "@material-ui/icons/Warning";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGooglePlusG,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import useStyles from "../styles/signin";
// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================

// ========================== COMPONENT ====================================
export function SignIn() {
  const classes = useStyles();

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
              <InputLabel htmlFor="email-field">Company email</InputLabel>
              <Input
                id="email-field"
                aria-describedby="component-error-email"
              />
              <FormHelperText
                id="component-error-email"
                className={classes.formHelperText}
              >
                <Typography variant="caption">Email already taken</Typography>
                <WarningIcon />
              </FormHelperText>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="password-field">Password</InputLabel>
              <Input
                id="password-field"
                aria-describedby="component-error-password"
              />
              <FormHelperText id="component-error-email">
                {/* <Typography variant="caption">Email already taken</Typography>
                <WarningIcon /> */}
              </FormHelperText>
            </FormControl>
            <Box display="flex">
              <Button className={classes.buttonLogin}>Log in</Button>
              <Button className={classes.buttonSignin}>Sign in</Button>
            </Box>
            <Button className={classes.buttonForgot}>Forgot password?</Button>
          </div>
          <div className={classes.loginButtonPannel}>
            <Typography variant="h5" className={classes.quickTitle}>
              Quick register with your social media
            </Typography>
            <Box display="flex" flexDirection="column">
              <Button className={classes.buttonFb}>
                <FontAwesomeIcon
                  icon={faFacebookF}
                  width="30px"
                  className={classes.icon}
                />
                <Typography variant="body1">Login with Facebook</Typography>
              </Button>
              <Button className={classes.buttonGp}>
                <FontAwesomeIcon
                  icon={faGooglePlusG}
                  width="30px"
                  className={classes.icon}
                />
                <Typography variant="body1">Login with Google+</Typography>
              </Button>
              <Button className={classes.buttonTw}>
                <FontAwesomeIcon
                  icon={faTwitter}
                  width="30px"
                  className={classes.icon}
                />
                <Typography variant="body1">Login with Twitter</Typography>
              </Button>
            </Box>
          </div>
        </Box>
      </Container>
    </div>
  );
}
// ========================== COMPONENT ====================================
