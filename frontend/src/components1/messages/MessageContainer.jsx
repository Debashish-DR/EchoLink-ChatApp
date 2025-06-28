import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    //cleanup function (unmounts)
    return () => {
      setSelectedConversation(null);
    };
  }, [setSelectedConversation]);

  return (
    <div className="md:min-w-[450px] flex flex-col ">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-slate-500 px-4 py-2 mb-2 flex items-center gap-2">
            {selectedConversation.profilePic ? (
              <div className="avatar">
                <div className="w-8 rounded-full">
                  <img
                    src={selectedConversation.profilePic}
                    alt={`${selectedConversation.fullName}'s profile`}
                  />
                </div>
              </div>
            ) : (
              <div className="avatar placeholder">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                  {selectedConversation.fullName.charAt(0).toUpperCase()}
                </div>
              </div>
            )}
            <span className="text-white font-bold">
              {selectedConversation.fullName}
            </span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Hello 👋 {authUser?.fullName || ""}</p>
        <p>Welcome to EchoLink</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

// /* This code snippet is a React component named `MessageContainer` that handles the display of messages
// and message input for a chat application. Here's a breakdown of what the code does: */
// import React from "react";
// import Messages from "./Messages";
// import MessageInput from "./MessageInput";
// import { TiMessages } from "react-icons/ti";
// import useConversation from "../../zustand/useConversation";

// const MessageContainer = () => {
//   const { selectedConversation, setSelectedConversation } = useConversation();
//   return (
//     <div className="md:min-w-[450px] flex flex-col ">
//       {!selectedConversation ? (
//         <NoChatSelected />
//       ) : (
//         <>
//           {/* Header */}
//           <div className="bg-slate-500 px-4 py-2 mb-2">
//             <span className="label-text"></span>
//             <span className="text-white font-bold">
//               {selectedConversation.fullName}
//             </span>
//           </div>
//           <Messages />
//           <MessageInput />
//         </>
//       )}
//     </div>
//   );
// };

// export default MessageContainer;

// const NoChatSelected = () => {
//   return (
//     <div className="flex items-center justify-center w-full h-full">
//       <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
//         <p>Hello 👋 DEBASHISH</p>
//         <p>Welcome to EchoLink</p>
//         <p>Select a chat to start messaging</p>
//         <TiMessages className="text-3xl md:text-6xl text-center" />
//       </div>
//     </div>
//   );
// };
