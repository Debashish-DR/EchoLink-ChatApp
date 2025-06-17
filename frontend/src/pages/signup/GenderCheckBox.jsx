import React from "react";

const GenderCheckBox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "Male" ? "selected" : ""
          }`}
        >
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900 checkbox-secondary"
            checked={selectedGender === "Male"}
            onChange={() => onCheckboxChange("Male")}
          />
        </label>
      </div>

      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "Female" ? "selected" : ""
          }`}
        >
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900 checkbox-secondary"
            checked={selectedGender === "Female"}
            onChange={() => onCheckboxChange("Female")}
          />
        </label>
      </div>

      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "Other" ? "selected" : ""
          }`}
        >
          <span className="label-text">Other</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900 checkbox-secondary"
            checked={selectedGender === "Other"}
            onChange={() => onCheckboxChange("Other")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;

//STARTER CODE FOR THIS FILE:

// import React from "react";

// const GenderCheckBox = () => {
//   return (
//     <div className="flex">
//       <div className="form-control">
//         <label className={`label gap-2 cursor-pointer`}>
//           <span className="label-text">Male</span>
//           <input
//             type="checkbox"
//             className="checkbox border-slate-900 checkbox-secondary"
//           />
//         </label>
//       </div>

//       <div className="form-control">
//         <label className={`label gap-2 cursor-pointer`}>
//           <span className="label-text">Female</span>
//           <input
//             type="checkbox"
//             className="checkbox border-slate-900 checkbox-secondary"
//           />
//         </label>
//       </div>

//       <div className="form-control">
//         <label className={`label gap-2 cursor-pointer`}>
//           <span className="label-text">Other</span>
//           <input
//             type="checkbox"
//             className="checkbox border-slate-900 checkbox-secondary"
//           />
//         </label>
//       </div>
//     </div>
//   );
// };

// export default GenderCheckBox;
