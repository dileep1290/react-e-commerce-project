import React from "react";

const FormInput = ({ type, lable, name, defaultValue }) => {
  return (
    <lable className="form-control">
      <div className="lable">
        <span className="lable-text">{lable}</span>
      </div>
      <input
        type={type}
        name={name}
        placeholder={lable}
        defaultValue={defaultValue}
        className="input input-bordered"
      />
    </lable>
  );
};

export default FormInput;
