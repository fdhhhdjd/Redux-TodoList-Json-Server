import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const { users, error } = useSelector((state) => state.data);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
