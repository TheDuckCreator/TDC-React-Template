import React from "react";
import { useHistory } from "react-router-dom";
export default function Home({ props }) {
  const history = useHistory();
  return (
    <div className='container mx-auto'>
      <div className='flex flex-col gap-2'>
        <button
          className='bg-cerise-500 shadow-md hover:shadow-lg  text-lg py-6 text-shamrock-50  font-sans p-2 m-2'
          onClick={() => history.push("/management/user")}
        >
          จัดการผู้ใช้งาน
        </button>
      </div>
    </div>
  );
}
