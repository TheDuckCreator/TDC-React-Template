import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import liff from "@line/liff";

import Home from "./Home";
import About from "./About";
import CreateBooking from "./CreateBooking";
import RoomBookingStatus from "./BookingStatus/RoomBookingStatus";
import DailyBookingStatus from "./BookingStatus/DailyBookingStatus";

import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

import * as actions from "../Redux/Actions";

const Container = () => {
  const dispatch = useDispatch();
  const [isReady, setIsReady] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    liff
      .init({ liffId: process.env.REACT_APP_LIFF_ID })
      .then(() => {
        console.log("Connect to liff");
        const isLoggedIn = liff.isLoggedIn();
        if (!isLoggedIn) {
          liff.login();
        } else {
          liff.getProfile().then((profile) => {
            const payload = {
              lineUUID: profile?.userId,
              name: profile?.displayName,
              profile: profile?.pictureUrl,
            };
            dispatch(actions.meLogin(payload)).then(() => {
              setIsLoggedIn(true);
            });
          });
        }
      })
      .catch((err) => {
        console.error("Cannot Connect to Line Frontend Framework", err);
      });
    return () => {};
  }, []);

  useEffect(() => {
    if (isLoggedIn && !isReady) {
      dispatch(actions.systemConnect()).then(() => {
        dispatch(actions.meGet()).then(() => {
          setIsReady(true);
        });
      });
    }

    return () => {};
  }, [isReady, isLoggedIn]);

  return (
    <Router>
      <Navbar />
      <div className='min-h-screen m-8'>
        <Switch>
          <Route path='/create-booking'>
            <CreateBooking />
          </Route>
          <Route path='/daily-booking'>
            <DailyBookingStatus />
          </Route>
          <Route path='/room-booking'>
            <RoomBookingStatus />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />{" "}
    </Router>
  );
};

export default Container;
