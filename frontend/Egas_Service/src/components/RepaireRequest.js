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
import FormLabel from "@material-ui/core/FormLabel";
import HeaderLogin from "./HeaderLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

const RepaireRequest = (props) => {
  const user = JSON.parse(window.localStorage.getItem("userInfo"));
  //const [ConsumerNo, setConsumerNo] = useState("");

  const [Request, setRequest]=useState("");

  //const [response,setResponse]=useState("");

  const classes = useStyles();
  console.log(Request);

  function handleSendRequest() {
    
  fetch("http://localhost:7070/repair/repairservice", {
    // Adding method type
    method: "POST",

    // Adding body or contents to send
    body: JSON.stringify({
      consumerNo: { consumerNo: user.consumerNo },
      request: Request,
      requestdate: new Date().toISOString().slice(0, 10),
      requeststatus: "generated",
    }),

    // Adding headers to the request
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    // Converting to JSON
    .then((response) => response.json())

    // Displaying results to console
    .then((json) => console.log(json));
  toast.success(" Your request is send sucessfully!!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  // history.push("/");
}
   
  
  return (
    <div>
      <HeaderLogin />
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Paper className={classes.paper}>
          {/* <Avatar className={classes.avatar}>
           
          </Avatar> */}
          <Typography component="h1" variant="h5">
            {props.name} Repair Request
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              size="small"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="request"
              label="Request"
              type="request"
              id="request"
              autoComplete="request"
              value={Request}
              onChange={(e) => {
                setRequest(e.target.value);
              }}
            />

            <Button
              //     type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSendRequest}
            >
              Send Request
            </Button>
          </form>
        </Paper>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
        <Box mt={6}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
};

export default RepaireRequest;
