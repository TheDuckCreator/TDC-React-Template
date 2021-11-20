import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Avatar, Button, Tag, Typography, Table, Spin } from "antd";
import { useHistory } from "react-router-dom";
import _ from "lodash";
import * as actions from "../../redux/actions";

export default function UserManagement({ props }) {
  const history = useHistory();
  const [isReady, setIsReady] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isReady) {
      dispatch(actions.getAllUser()).then(() => {
        setIsReady(true);
      });
    }
    return () => {};
  }, []);

  const handleAllow = async (id) => {
    console.log("Id", id);
    dispatch(actions.editOneUser(id, { allow: true }))
      .then(() => {
        setIsReady(false);
        dispatch(actions.getAllUser()).then(() => {
          setIsReady(true);
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleDisallow = (id) => {
    dispatch(actions.editOneUser(id, { allow: false })).then(() => {
      setIsReady(false);
      dispatch(actions.getAllUser()).then(() => {
        setIsReady(true);
      });
    });
  };

  const columns = [
    {
      title: "ลำดับ",
      dataIndex: "index",
      key: "index",
      render: (value) => value + 1,
    },
    {
      title: "ชื่อ",
      dataIndex: "name",
      key: "name",
      render: (value) => (
        <div className='flex gap-2'>
          <Avatar src={value?.profile} />
          <Typography>{value?.name}</Typography>
        </div>
      ),
    },
    {
      title: "การอนุญาติ",
      dataIndex: "allow",
      key: "allow",
      render: (value) =>
        value === true ? (
          <Tag color='green'>อนุญาติ</Tag>
        ) : (
          <Tag color='red'>ไม่อนุญาติ</Tag>
        ),
    },
    {
      title: "การจัดการ",
      dataIndex: "management",
      key: "management",
      render: (value, record) => (
        <div className='flex gap-2'>
          <Button
            type='primary'
            disabled={record?.allow}
            onClick={() => handleAllow(record?.id)}
          >
            อนุญาติ
          </Button>
          <Button
            type='primary'
            danger
            disabled={!record?.allow}
            onClick={() => handleDisallow(record?.id)}
          >
            ไม่อนุญาติ
          </Button>
        </div>
      ),
    },
  ];

  const userInfo = _.map(user?.rows, (_user, index) => ({
    key: index,
    index,
    name: {
      name: _user?.name,
      profile: _user?.profile,
    },
    id: _user?._id,
    allow: _user?.allow,
  }));

  if (!isReady) {
    return (
      <div className='flex justify-center'>
        <Spin size='large' />
      </div>
    );
  }

  return (
    <div className='container mx-auto'>
      <div className='flex justify-between'>
        <h3 className='font-sans text-lg'>จัดการผู้ใช้งาน</h3>
        <Button onClick={() => history.goBack()}>กลับ</Button>
      </div>
      <div>
        <Table columns={columns} dataSource={userInfo} />
      </div>
    </div>
  );
}
