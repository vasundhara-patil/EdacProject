import React from "react";
import { CssBaseline, Typography } from "@material-ui/core";
import Header from "./Header";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import {CardContent,Grid} from "@material-ui/core";
import { DateTimePicker } from "@material-ui/pickers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    //backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/plain2.jpg"})`,
    // backgroundRepeat: "no-repeat",
    //backgroundSize: "cover",
    background: "#EBEDEF",

    overflow: "hidden",
  },
  rootCard: {
    width: 300,
    color:"white",
    height: 100,
    borderRadius: 20,
    cursor: "pointer",
    backgroundImage:
      "linear-gradient(47deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 44%, rgba(252,176,69,1) 100%)",
  },

  content: {
    marginRight: -50 /* maximum width of scrollbar */,
    paddingRight: 30 /* maximum width of scrollbar */,
    overflowY: "scroll" /* */,
    flex: "1 1 auto",
  },
  main: {
    padding: "0px 20px",
  },
}));
const CustomerPage = () => {
  const user=JSON.parse(window.localStorage.getItem("userInfo"))
  console.log(user)
  const history = useHistory();
  const classes = useStyles();
  function handleBookCylinder() {
    history.push("/booking");
  }
 function handleBackButton() {
   history.push("/");
 }
  function handleTerminateConnection() {
     fetch(`http://localhost:7070/consumer/terminateconnection/${user.consumerNo}`, {
       // Adding method type

       method: "DELETE",

       // Adding headers to the request
      
     })
       // Converting to JSON
       .then((response) => response.json())

       // Displaying results to console
       .then((json) => console.log(json));

     //history.push("/customerlogin");
  }

function handleRepaireRequest() {
 
  history.push("/repairerequest");
}
  return (
    <div className={classes.root}>
      <AppBar style={{ height: "50vh" }} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            E-Gas Service
          </Typography>
          <div style={{ flexGrow: 1 }}></div>
          <Button variant="outlined" color="inherit" onClick={handleBackButton}>
            Back To Home
          </Button>
          {/* <Button color="inherit" onClick={handleBookCylinder}>
            Book cylinder
          </Button> */}
          {/*
          <Button color="inherit" onClick={handleTerminateConnection}>
            Terminate connection
          </Button> */}
        </Toolbar>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Typography
            variant="h1"
            style={{
              background: "-webkit-linear-gradient(red, yellow)",
              webkitBackgroundClip: "text",
              webkitTextFillColor: "transparent",
            }}
          >
            Welcome !!!!
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 48,
          }}
        >
          <Typography variant="h3">Mr/Ms. {user.consumerFullName}</Typography>
        </div>
      </AppBar>
      <Grid container justify="center" style={{paddingTop:100}}>
        <Grid item sm={3} container justify="center">
          <Card onClick={handleBookCylinder} className={classes.rootCard}>
            {/* <Paper elevation="10"> */}
            <CardContent>
              <Typography variant="h5" component="h2">
                Book Cylinder
              </Typography>
            </CardContent>
            {/* </Paper> */}
          </Card>
        </Grid>

         
        <Grid item sm={3} container justify="center">
          <Card onClick={handleRepaireRequest} className={classes.rootCard}>
            {/* <Paper elevation="10"> */}
            <CardContent>
              <Typography variant="h5" component="h2">
                Repair Request
              </Typography>
            </CardContent>
            {/* </Paper> */}
          </Card>
        </Grid>
        
        <Grid item sm={3} container justify="center">
          <Card
            onClick={handleTerminateConnection}
            className={classes.rootCard}
          >
            {/* <Paper elevation="10"> */}
            <CardContent>
              <Typography variant="h5" component="h2">
                Terminate Connection
              </Typography>
            </CardContent>
            {/* </Paper> */}
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default CustomerPage;
