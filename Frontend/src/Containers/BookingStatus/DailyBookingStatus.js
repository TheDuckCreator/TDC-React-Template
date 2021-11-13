import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Card, Spin } from "antd";
import dayjs from "dayjs";
import _ from "lodash";

import * as actions from "../../Redux/Actions";

export default function DailyBookingStatus({ props }) {
  const history = useHistory();
  const [isReady, setIsReady] = useState(false);
  const booking = useSelector((state) => state.booking);
  const room = useSelector((state) => state.room);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      actions.getAllBooking({
        page: 1,
        size: 100,
        start: dayjs().subtract(7, "day").format("YYYY-MM-DD"),
        end: dayjs().add(7, "day").format("YYYY-MM-DD"),
      })
    ).then(() => {
      dispatch(actions.getAllRoom()).then(() => {
        setIsReady(true);
      });
    });
    return () => {};
  }, []);

  useEffect(() => {
    const allBookings = _.concat(
      ..._.map(booking?.rows, (_booking) => {
        return _.map(_booking?.list, (_list) => {
          return { ...booking, ..._list };
        });
      })
    );

    console.log("All Bookings", allBookings);
    return () => {};
  }, [booking?.rows]);

  if (!isReady) {
    return (
      <div className='flex justify-center'>
        <Spin size='large' />
      </div>
    );
  }

  const renderRoomInfo = (roomInfo) => (
    <div>
      <Card
        hoverable
        title={`${roomInfo?.type?.name} / ${roomInfo?.name}`}
      ></Card>
    </div>
  );

  return (
    <div className='container mx-auto'>
      <h3 className='font-sans text-lg'>สถานะการจองรายวัน</h3>
      <div className='flex flex-col gap-2'>
        {_.map(_.orderBy(room?.rows, { "type.id": "asc" }), (_room, index) => (
          <div key={index}>{renderRoomInfo(_room)}</div>
        ))}
      </div>
    </div>
  );
}
