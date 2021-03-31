import React from 'react'
import { CssBaseline, Typography } from "@material-ui/core";
import Header from "./Header";
import { makeStyles } from "@material-ui/core/styles";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Egas1 from "../assets/Egas1.jpeg"
import Egas2 from "../assets/Egas2.jpeg";
import Egas3 from "../assets/Egas3.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    //backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/plain2.jpg"})`,
    // backgroundRepeat: "no-repeat",
    //backgroundSize: "cover",
    background: "#EBEDEF",
   
    overflow: "hidden",
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
const Home = () => {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <div
          style={{
            position: "absolute",
         // inset:"0px 10px 0px 0px",
          //  overflowY: "scroll",
          }}
        >
          <CssBaseline />
          <Header />
          <center></center>
          <div className={classes.main}>
            <div style={{ marginTop: 10, marginBottom: 16 }}>
              <Typography variant="h5">News:</Typography>
            </div>
            <div style={{ marginTop: -47, marginLeft: 72, marginBottom: 8 }}>
              <marquee width="100%" direction="left" scrollamount="15">
                <Typography variant="h6">
                  &diams;&nbsp;&nbsp; Deadly smoke set to return as India cuts
                  outlays on cooking gas program&nbsp;&nbsp;
                  &diams;&nbsp;&nbsp;Ujjwala: 8 croreth beneficiary from
                  Maharashtra struggles to buy gas cylinder.&nbsp;&nbsp;
                  &diams;&nbsp;&nbsp; Non-subsidised LPG gas price cut by Rs
                  62.50 per cylinder from today.
                </Typography>
              </marquee>
            </div>
          </div>
          <div style={{ padding: 56, marginTop: -48 }}>
            <Carousel
              autoPlay="true"
              infiniteLoop
              showThumbs={false}
              dynamicHeight={false}
            >
              <div>
                <img src={Egas3} />
              </div>
              <div>
                <img src={Egas1} />
              </div>
              <div>
                <img src={Egas2} />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    );
}

export default Home
