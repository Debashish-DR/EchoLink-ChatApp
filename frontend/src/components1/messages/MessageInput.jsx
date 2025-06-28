import { IoSendSharp } from "react-icons/io5";
import { useState } from "react";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="input input-bordered text-sm p-2.5 h-10 rounded-full w-full text-white"
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className=" absolute item-center inset-y-0 end-0 pe-3 text-sky-300 hover:text-sky-500"
        >
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <IoSendSharp className="w-7 h-7 outline-none" />
          )}
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
