import React from "react";
import { NavBar } from "antd-mobile";
import { useHistory } from "react-router-dom";

export default function DailyBookingStatus({ props }) {
  const history = useHistory();
  return (
    <div className='container mx-auto'>
      <NavBar onBack={() => history.push("/")}>สถานะการจองรายวัน</NavBar>
    </div>
  );
}
