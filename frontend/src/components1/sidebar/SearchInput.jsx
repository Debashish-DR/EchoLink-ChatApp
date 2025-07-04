//correct but direct selecting search result

import { RiUserSearchLine } from "react-icons/ri";
import { useState } from "react";
import toast from "react-hot-toast";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";

const SearchInput = () => {
  const [search, setSearch] = useState("");

  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search must be at least 3 characters long");
    }
    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No such user found !");
  };
  return (
    <form onSubmit={handleSubmit} className="flex item-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <RiUserSearchLine className="w-7 h-7 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;

//STARTER CODE FOR THIS FILE:
// import React from "react";
// import { RiUserSearchLine } from "react-icons/ri";

// const SearchInput = () => {
//   return (
//     <form className="flex item-center gap-2">
//       <input
//         type="text"
//         placeholder="Search..."
//         className="input input-bordered rounded-full"
//       />
//       <button type="submit" className="btn btn-circle bg-sky-500 text-white">
//         <RiUserSearchLine className="w-7 h-7 outline-none" />
//       </button>
//     </form>
//   );
// };

// export default SearchInput;
