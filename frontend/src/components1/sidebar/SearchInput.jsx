import React from "react";
import { RiUserSearchLine } from "react-icons/ri";

const SearchInput = () => {
  return (
    <form className="flex item-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
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
