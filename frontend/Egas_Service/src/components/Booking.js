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

const Booking = (props) => {
   const user = JSON.parse(window.localStorage.getItem("userInfo"));
  //const [ConsumerNo, setConsumerNo] = useState("");
 
  const [BookingDate, setBookingDate] = React.useState("2021-03-16");
  //const [Status, setStatus] = useState("");
  //const [FullName,setFullName] = useState("");
  const [ConsumerNo, setConsumerNo] = useState(user.consumerNo);
  
  //const [response,setResponse]=useState("");

  const classes = useStyles();

  function handleClickBooking() {
    // POST request using fetch()
    fetch("http://localhost:7070/Booking", {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify({
        consumerNo: { consumerNo: ConsumerNo },
        bookingdate: BookingDate,
        status: "NOT_DISPATCHED",
        isBooked: "true",
      }),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })

     fetch(
       `http://localhost:7070/consumer/send-mail?consumerno=${ConsumerNo}`,
       {
         // Adding method type
         method: "POST",

        //  // Adding body or contents to send
        //  body: JSON.stringify({
        //    consumerno: ConsumerNo,
        //  }),

         // Adding headers to the request
         headers: {
           "Content-type": "application/json; charset=UTF-8",
         },
       }
     )
       // Converting to JSON
       .then((response) => response.json())

       // Displaying results to console
       .then((json) => console.log(json));
      toast.success(" Cylinder Booked Successfully!!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
            {props.name} Cylinder Booking
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              size="small"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="Full Name"
              label="Full Name"
              type="Full Name"
              id="Full Name"
              autoComplete="Full Name"
              // value={IsBooked}
              // onChange={(e) => {
              //   setIsBooked(e.target.value);
              // }}
            />

            <TextField
            disabled
              size="small"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="consumerno"
              label="Consumer Number"
              type="number"
              id="consumerno"
              autoComplete="consumerno"
              value={ConsumerNo}
              onChange={(e) => {
                setConsumerNo(e.target.value);
              }}
            />

            <Grid item container justify="center" xs={12}>
              <FormLabel
                component="legend"
                style={{ fontSize: "14px", marginTop: "10px" }}
              >
                Booking Date
              </FormLabel>
              {}
              <input
                style={{
                  height: "43px",
                  width: "100%",
                  border: "1px solid #7593AB",
                  borderRadius: "5px",
                }}
                type="date"
                id="bookingDate"
                placeholder="DD/MM/YYYY"
                onChange={(e) => {
                  setBookingDate(e.target.value);
                }}
                name="bookingDate"
              ></input>
            </Grid>
            {/* <TextField
            size="small"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="status"
            label="Status"
            type="status"
            id="status"
            autoComplete="status"
            value={Status}
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          /> */}

            <Button
              //     type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleClickBooking}
            >
              Book
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
export default Booking;
