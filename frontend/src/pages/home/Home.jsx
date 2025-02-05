import React from "react";
import Sidebar from "../../components1/sidebar/Sidebar";
import MessageContainer from "../../components1/messages/MessageContainer";

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] overflow-hidden rounded-lg shadow-md bg-blue-200 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-10 ">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
