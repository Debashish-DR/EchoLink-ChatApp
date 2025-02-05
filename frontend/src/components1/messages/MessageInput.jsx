import React from "react";
import { IoSendSharp } from "react-icons/io5";

const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          className="input input-bordered text-sm p-2.5 rounded-full w-full"
          placeholder="Type a message"
        />
        <button
          type="submit"
          className=" absolute item-center inset-y-0 end-0 pe-3 text-sky-300 hover:text-sky-500"
        >
          <IoSendSharp className="w-7 h-7 outline-none" />
        </button>
      </div>
    </form>
    // <form className="flex item-center gap-2">
    //   <input
    //     type="text"
    //     placeholder="Search..."
    //     className="input input-bordered rounded-full"
    //   />
    //   <button type="submit" className="btn btn-circle bg-sky-500 text-white">
    //     <RiUserSearchLine className="w-7 h-7 outline-none" />
    //   </button>
    // </form>
  );
};

export default MessageInput;
