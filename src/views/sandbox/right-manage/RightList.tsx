import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function RightList() {
  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      name: "胡彦斌",
      company: 32,
      address: "西湖区湖底公园1号",
    },
    {
      key: "2",
      name: "胡彦祖",
      company: 42,
      address: "西湖区湖底公园1号",
    },
  ]);

  useEffect(() => {
    axios.get("http://localhost:5010/right").then((res) => {
      setDataSource(res.data);
    });
  }, []);

  const columns = [
    {
      title: "名前",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "所属",
      dataIndex: "company",
      key: "company",
    },
    {
      title: "スペース総額",
      dataIndex: "space",
      key: "space",
    },
    {
      title: "スペース残高",
      dataIndex: "used-space",
      key: "used-space",
    },
  ];
  return (
    <div>
      <Table dataSource={dataSource} columns={columns}></Table>
    </div>
  );
}
