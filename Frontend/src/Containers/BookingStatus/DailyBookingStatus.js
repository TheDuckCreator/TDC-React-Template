import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Card, List, Spin, DatePicker, Button } from "antd";
import dayjs from "dayjs";
import IsSameOrBefore from "dayjs/plugin/isSameOrBefore";
import IsSameOrAfter from "dayjs/plugin/isSameOrAfter";
import _ from "lodash";

import * as actions from "../../Redux/Actions";

dayjs.extend(IsSameOrBefore);
dayjs.extend(IsSameOrAfter);

export default function DailyBookingStatus({ props }) {
  const history = useHistory();
  const [isReady, setIsReady] = useState(false);
  const [bookingByRoom, setBookingByRoom] = useState();
  const [searchedDate, setSearchedDate] = useState(
    dayjs().format("YYYY-MM-DD")
  );
  const booking = useSelector((state) => state.booking);
  const room = useSelector((state) => state.room);
  const dispatch = useDispatch();

  const onChangeData = (date, dateString) => {
    setSearchedDate(dateString);
    setIsReady(false);
  };

  useEffect(() => {
    dispatch(
      actions.getAllBooking({
        page: 1,
        size: 100,
        start: dayjs(searchedDate).subtract(7, "day").format("YYYY-MM-DD"),
        end: dayjs(searchedDate).add(7, "day").format("YYYY-MM-DD"),
      })
    ).then(() => {
      dispatch(actions.getAllRoom()).then(() => {
        setIsReady(true);
      });
    });
    return () => {};
  }, [searchedDate]);

  useEffect(() => {
    const allBookings = _.concat(
      ..._.map(booking?.rows, (_booking) => {
        return _.map(_booking?.list, (_list) => {
          return { ..._booking, ..._list };
        });
      })
    );

    const bookingOnSearchedDate = _.filter(
      allBookings,
      (_booking) =>
        dayjs(_booking?.start).isSameOrBefore(searchedDate) &&
        dayjs(_booking?.end).isSameOrAfter(dayjs(searchedDate).add(1, "day"))
    );

    const bookingByRoom = _.groupBy(bookingOnSearchedDate, "room_id");
    console.log("Booking By Room", bookingByRoom);
    console.log("Booking On Schedule", bookingOnSearchedDate);
    console.log("All Bookings", allBookings);

    setBookingByRoom(bookingByRoom);
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
      <div className='bg-steel-200 font-sans text-center py-1 px-2 my-2 rounded-md'>
        <h4 className='text-base '>
          {roomInfo?.type?.name} / {roomInfo?.name}{" "}
        </h4>
      </div>

      {bookingByRoom &&
        _.map(bookingByRoom?.[roomInfo?.id], (_booking, index) => (
          <div key={index}>
            <Card
              type='inner'
              title={`Booking No. ${_booking?.booking_no} `}
              color='gray'
            >
              <List>
                <List.Item>
                  <strong className='mr-1'> ลูกค้า</strong>
                  {_booking?.customer?.firstname} {_booking?.customer?.lastname}
                </List.Item>
                <List.Item>
                  <strong className='mr-1'> โทร</strong>
                  {_booking?.customer?.tel}
                </List.Item>
                <List.Item>
                  <strong className='mr-1'> เข้าพัก</strong>
                  {dayjs(_booking?.start)
                    .locale("th")
                    .format("D MMM YYYY")} -{" "}
                  {dayjs(_booking?.end).locale("th").format("D MMM YYYY")}
                </List.Item>
              </List>
            </Card>
          </div>
        ))}

      {bookingByRoom && _.isEmpty(bookingByRoom?.[roomInfo?.id]) && (
        <div>ไม่มีการจองในห้องพักนี้</div>
      )}
    </div>
  );

  return (
    <div className='container mx-auto'>
      <div className='flex justify-between'>
        <h3 className='font-sans text-lg'>สถานะการจองรายวัน</h3>
        <Button onClick={() => history.goBack()}>กลับ</Button>
      </div>
      <h4> วันที่ {dayjs(searchedDate).format("D MMMM YYYY")}</h4>
      <DatePicker
        onChange={onChangeData}
        size='large'
        placeholder='เลือกวันที่ที่ต้องการค้นหา'
      />
      <div className='flex flex-col gap-2'>
        {_.map(_.orderBy(room?.rows, { "type.id": "asc" }), (_room, index) => (
          <div key={index}>{renderRoomInfo(_room)}</div>
        ))}
      </div>
    </div>
  );
}
