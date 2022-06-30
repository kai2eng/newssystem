import axios from "axios";
import React from "react";

export default function Home() {
  const ajax = () => {
    //取数据
    // axios.get("http://localhost:5010/posts").then((res) => {
    //   console.log(res.data);
    // });
    //增加数据
    // axios.post("http://localhost:5010/posts", {
    //   id: "1333",
    //   title: "json123rver",
    //   author: "typ222ode",
    // });
    // //修改数据
    // axios.patch("http://localhost:5010/posts/1", {
    //   title: "zeng",
    //   sex: "ssss",
    // });
    // //删除
    // axios.delete("http://localhost:5010/posts/2");
    //向下连接_embed
    axios.get("http://localhost:5010/posts?_embed=comments").then((res) => {
      console.log(res.data);
    });
    //向上查找_expand
  };
  return (
    <div>
      <button type="submit" onClick={ajax}>
        Home
      </button>
    </div>
  );
}
