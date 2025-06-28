import useConversation from "../../zustand/useConversation";

// Generate a consistent HSL color from a string (e.g., name)
const stringToColor = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return `hsl(${hash % 360}, 70%, 50%)`;
};

const Conversation = ({ conversation, lastIdx, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;

  return (
    <>
      <div
        className={`group flex gap-2 items-center hover:bg-slate-500 rounded p-2 py-1 cursor-pointer ${
          isSelected ? "bg-slate-600" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        {/* Avatar */}
        {conversation.profilePic ? (
          <div className="avatar online">
            <div className="w-12 rounded-full">
              <img
                src={conversation.profilePic}
                alt={`${conversation.fullName}'s avatar`}
              />
            </div>
          </div>
        ) : (
          <div className="avatar placeholder online">
            <div
              className="rounded-full w-12 h-12 flex items-center justify-center font-semibold text-lg text-white"
              style={{
                backgroundColor: stringToColor(conversation.fullName),
              }}
            >
              {conversation.fullName.charAt(0).toUpperCase()}
            </div>
          </div>
        )}

        {/* Name & Emoji */}
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between items-center">
            <p
              className={`font-bold truncate ${
                isSelected
                  ? "text-white"
                  : "text-grey-100 group-hover:text-white"
              }`}
            >
              {conversation.fullName}
            </p>
            <span className="text-xs text-green-400">{emoji}</span>
          </div>
        </div>
      </div>

      {/* Divider (skip after last item) */}
      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;

// import useConversation from "../../zustand/useConversation";

// const Conversation = ({ conversation, lastIdx, emoji }) => {
//   const { selectedConversation, setSelectedConversation } = useConversation();

//   const isSelected = selectedConversation?._id === conversation._id;
//   return (
//     <>
//       <div
//         className={`flex gap-2 items-center hover:bg-sky-600 rounded p-2 py-1 cursor-pointer
//         ${isSelected ? "bg-sky-600" : ""}
//         `}
//         onClick={() => setSelectedConversation(conversation)}
//       >
//         <div className="avatar online">
//           <div className="w-12 rounded-full">
//             <img src={conversation.profilePic} alt="User Avatar" />
//           </div>
//         </div>

//         <div className="flex flex-col flex-1">
//           <div className="flex gap-3 justify-between">
//             <p
//               className={`font-bold ${
//                 isSelected ? "text-white" : "text-grey-100"
//               }`}
//             >
//               {conversation.fullName}
//             </p>
//             <span className="text-xs text-green-400">{emoji}</span>
//           </div>
//         </div>
//       </div>
//       {!lastIdx && <div className="divider my-0 py-0 h-1" />}
//     </>
//   );
// };

//export default Conversation;

// STARTER CODE FOR THIS FILE:
// import React from "react";

// const Conversation = () => {
//   return (
//     <>
//       <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
//         <div className="avatar online">
//           <div className="w-12 rounded-full">
//             <img
//               src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
//               alt="User Avatar"
//             />
//           </div>
//         </div>

//         <div className="flex flex-col flex-1">
//           <div className="flex gap-3 justify-between">
//             <p className="font-bold text-grey-100">Once Upon A Time</p>
//             <span className="text-xs text-green-400">online</span>
//           </div>
//         </div>
//       </div>
//       <div className="divider my-0 py-0 h-1" />
//     </>
//   );
// };

// export default Conversation;
