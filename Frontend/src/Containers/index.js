import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import liff from "@line/liff";

import Home from "./Home";
import About from "./About";
import CreateBooking from "./CreateBooking";
import RoomBookingStatus from "./BookingStatus/RoomBookingStatus";
import DailyBookingStatus from "./BookingStatus/DailyBookingStatus";
import UserManagement from "./Management/UserManagement";

import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

import * as actions from "../Redux/Actions";
import { Result, Spin } from "antd";

const Container = () => {
  const dispatch = useDispatch();
  const [isReady, setIsReady] = useState(false);
  const me = useSelector((state) => state.me);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAllow, setIsAllow] = useState(false);

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

  useEffect(() => {
    if (!isAllow) {
      if (me?.allow === true) {
        setIsAllow(true);
      }
    }
    return () => {};
  }, [me]);

  if (!isReady) {
    return (
      <div className='flex justify-center'>
        <Spin size='large' />
      </div>
    );
  }

  if (!isAllow) {
    return (
      <div className='flex justify-center'>
        <Result
          status='403'
          title='403'
          subTitle='ขออภัย ท่านไม่มีสิทธิในการเข้าถึงส่วนนี้'
        />
      </div>
    );
  }

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
          <Route path='/management/user'>
            <UserManagement />
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
