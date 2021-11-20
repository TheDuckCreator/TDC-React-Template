import { Button, Result } from "antd";
import { useHistory } from "react-router-dom";
import React from "react";

export default function RoomBookingStatus({ props }) {
  const history = useHistory();
  return (
    <div className='container mx-auto'>
      <Result
        title='ระบบอยู่ในระหว่างการพัฒนา พบกันเร็ว ๆ นี้ '
        extra={<Button onClick={() => history.goBack()}>กลับ</Button>}
      />
    </div>
  );
}
