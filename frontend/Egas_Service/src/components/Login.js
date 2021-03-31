import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Paper } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        E GAS
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(9.375, 4.125),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = (props) => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  //const [response,setResponse]=useState("");
   const history = useHistory();
  const classes = useStyles();
  console.log(Email, Password);

  function handleClickLogin() {
    // POST request using fetch()
    if (props.name === "Customer"){
      fetch(
        `http://localhost:7070/consumer/login?email=${Email}&pass=${Password}`,
        {
          // Adding method type
          method: "POST",

          // Adding body or contents to send
          // body: JSON.stringify({
          //   email: Email,
          //   pass: Password,
          // }),

          // Adding headers to the request
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
        // Converting to JSON
        .then((response) => response.json())

        // .then(res => res.text())
        // .then(text => console.log(text))

        // Displaying results to console
        .then((json) => {
          if(json){
              window.localStorage.setItem("userInfo", JSON.stringify(json));
              history.push("/customerpage")
          }
         
      
      });
      }
      else if(props.name === "Admin"){
        if(Email==="admin@gmail.com"&&Password==="admin123"){
          console.log("Admin logged in");
          history.push("/adminpage");
        }
      }
      
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {props.name} Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            size="small"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            size="small"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={Password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            //     type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleClickLogin}
          >
            Sign In
          </Button>
          <Grid container justify="center">
            <Link href="/register" variant="body2">
              {props.name === "Customer"
                ? "Don't Have Connection? Register for new Gas Connection"
                : ""}
            </Link>
          </Grid>
        </form>
      </Paper>
      <Box mt={6}>
        <Copyright />
      </Box>
    </Container>
  );
};
export default Login;
