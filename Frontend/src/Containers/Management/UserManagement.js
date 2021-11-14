import { Button, Result } from "antd";
import { useHistory } from "react-router-dom";
import React from "react";

export default function UserManagement({ props }) {
  const history = useHistory();
  return (
    <div className='container mx-auto'>
      <div className='flex justify-between'>
        <h3 className='font-sans text-lg'>จัดการผู้ใช้งาน</h3>
        <Button onClick={() => history.goBack()}>กลับ</Button>
      </div>
    </div>
  );
}
