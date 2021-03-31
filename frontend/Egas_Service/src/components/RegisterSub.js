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
import Container from "@material-ui/core/Container";
import { Paper } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormLabel from "@material-ui/core/FormLabel";
import Registration from './Registration';
import PermIdentityIcon from "@material-ui/icons/PermIdentity";

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
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(0, 2),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const RegisterSub = () => {
  const [FullName, setFullName] = useState("");
  const [Address, setAddress] = useState("");
  const [Contact, setContact] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [AdharNo, setAdharNo] = useState("");
   const [PanNo, setPanNo] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [Neardealerlocation, setNeardealerlocation] = useState("");
  const [Gender, setGender] = useState("");
  const [selectedDate, setSelectedDate] = React.useState("2021-03-16");
  
  const classes = useStyles();
  console.log(
    FullName,
    Address,
    Contact,
    Email,
    Password,
    AdharNo,
    City,
    State,
    Neardealerlocation,
    Gender,
    selectedDate
  );
  const history = useHistory();
  console.log(selectedDate);
  function handleChange(e) {
    
    setSelectedDate(e.target.value);
  }
  function handleClickRegister() {
    // POST request using fetch()
    fetch("http://localhost:7070/consumer/register", {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify({
        consumerFullName: FullName,
        address: Address,
        contactNo: Contact,
        email: Email,
        password: Password,
        aadharNo: AdharNo,
        pancardNo:PanNo,
        city: City,
        state: State,
        neardealerlocation: Neardealerlocation,
        dob: selectedDate,
        gender: Gender,
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

      history.push("/customerlogin");
  }
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PermIdentityIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Registration
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                size="small"
                autoComplete="fullname"
                name="fullName"
                variant="outlined"
                required
                fullWidth
                id="fullName"
                label="Full Name"
                autoFocus
                value={FullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                size="small"
                autoComplete="address"
                name="address"
                variant="outlined"
                required
                fullWidth
                id="address"
                label="Complete Address"
                autoFocus
                value={Address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                size="small"
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={Email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                size="small"
                variant="outlined"
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
            </Grid>
            <Grid item xs={6}>
              <TextField
                size="small"
                variant="outlined"
                required
                fullWidth
                name="adharNo"
                label="Adhar Number"
                type="adharNo"
                id="adharNo"
                autoComplete="adharNo"
                value={AdharNo}
                onChange={(e) => {
                  setAdharNo(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                size="small"
                variant="outlined"
                required
                fullWidth
                name="pANnO"
                label="PAN Number"
                type="PanNo"
                id="PanNo"
                autoComplete="PanNo"
                value={PanNo}
                onChange={(e) => {
                  setPanNo(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                size="small"
                variant="outlined"
                required
                fullWidth
                name="city"
                label="City"
                type="city"
                id="city"
                autoComplete="city"
                value={City}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                size="small"
                variant="outlined"
                required
                fullWidth
                name="state"
                label="State"
                type="state"
                id="state"
                autoComplete="state"
                value={State}
                onChange={(e) => {
                  setState(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                size="small"
                variant="outlined"
                required
                fullWidth
                name="neardealerlocation"
                label="Near Dealer Location"
                type="neardealerlocation"
                id="neardealerlocation"
                autoComplete="neardealerlocation"
                value={Neardealerlocation}
                onChange={(e) => {
                  setNeardealerlocation(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                size="small"
                autoComplete="contact"
                name="contact"
                variant="outlined"
                required
                fullWidth
                id="contact"
                label="Contact Number"
                autoFocus
                value={Contact}
                onChange={(e) => {
                  setContact(e.target.value);
                }}
              />
            </Grid>
            <Grid item container justify="center" xs={6}>
              <FormLabel
                component="legend"
                style={{ fontSize: "14px", marginTop: "10px" }}
              >
                Date Of Birth
              </FormLabel>
              {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="yyyy/mm/dd"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date Of Birth"
                  value={selectedDate}
                  onChange={handleChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </MuiPickersUtilsProvider> */}
              <input
                style={{
                  height: "43px",
                  width: "100%",
                  border: "1px solid #7593AB",
                  borderRadius: "5px",
                }}
                type="date"
                id="birthday"
                placeholder="DD/MM/YYYY"
                onChange={(e) => {
                  setSelectedDate(e.target.value);
                }}
                name="birthday"
              ></input>
            </Grid>
            <Grid item container justify="center" xs={6}>
              <RadioGroup
                size="small"
                aria-label="gender"
                name="gender1"
                value={Gender}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              >
                <FormControlLabel
                  size="small"
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  size="small"
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                size="small"
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I agreed to terms and conditions"
              />
            </Grid>
          </Grid>
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleClickRegister}
          >
            Register
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/customerlogin" variant="body2">
                Already have an Connection? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </Paper>
      <Box mt={2}>
        <Copyright />
      </Box>
    </Container>
  );
};
export default RegisterSub;
