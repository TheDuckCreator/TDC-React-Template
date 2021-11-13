import React from "react";
import { useHistory } from "react-router-dom";
export default function Home({ props }) {
  const history = useHistory();
  return (
    <div className='container mx-auto'>
      <div className='flex flex-col gap-2'>
        <button
          className='bg-shamrock-500 shadow-md hover:shadow-lg  text-lg py-6 text-shamrock-50  font-sans p-2 m-2'
          onClick={() => history.push("/daily-booking")}
        >
          ตารางการจองรายวัน
        </button>
        <button
          className='bg-steel-500 shadow-md hover:shadow-lg  text-lg py-6 text-shamrock-50  font-sans p-2 m-2'
          onClick={() => history.push("/room-booking")}
        >
          สถานะห้อง
        </button>
        <button
          className='bg-royalblue-500 shadow-md hover:shadow-lg  text-lg py-6 text-shamrock-50  font-sans p-2 m-2'
          onClick={() => history.push("/create-booking")}
        >
          จองห้องพัก
        </button>
      </div>
    </div>
  );
}
