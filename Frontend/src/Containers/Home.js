import React from "react";
import { Button, Space } from "antd-mobile";
import { useHistory } from "react-router-dom";

export default function Home({ props }) {
  const history = useHistory();
  return (
    <div className='container mx-auto'>
      <Space direction='vertical' block>
        <Button
          size='large'
          block
          onClick={() => history.push("/daily-booking")}
        >
          ตารางการจองรายวัน
        </Button>
        <Button
          size='large'
          onClick={() => history.push("/room-booking")}
          block
        >
          สถานะห้อง
        </Button>
        <Button
          size='large'
          onClick={() => history.push("/create-booking")}
          block
        >
          จองห้องพัก
        </Button>
      </Space>
    </div>
  );
}
