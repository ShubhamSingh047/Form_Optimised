import React, { useState } from "react";

import './Form.scss'

const FormExampleForm = () => {
  const defaultSrc = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"

  const [form, setForm] = useState({
    name: "",
    rollNumber: "",
    termsConditions: false,
    image: defaultSrc,
  });

  const removeImage=()=> {
    setForm({ ...form, image: defaultSrc });
  }

  const inputHandler = (e) => {
    let obj={};
    const {name} = e.target;
    if (e?.target?.files?.length > 0) {  //optional chaining
      obj[name]=URL.createObjectURL(e.target.files[0]);
    }else if(e?.target?.type==='checkbox'){
      obj[name]=e.target.checked;
    }else {
      const {value} = e.target;
      obj[name]=value;
    }
    setForm({...form,...obj});
  };

  const onSubmit = (e) =>{
    e.preventDefault();
    console.log(e, " even and state ",form)
  }

  const {image} = form;
  return (
    <>
      <form onSubmit={onSubmit} className="container-form">
        <div className="field">
          <label className="field-label" htmlFor="name">Name : </label>
          <input className="field-label" type="text" id="name" name="name" onChange={inputHandler} />
        </div>

        <div className="field">
          <label className="field-label" htmlFor="roll_numb">Roll Number : </label>
          <input
            className="field-input"
            type="number"
            id="roll_numb"
            name="rollNumber"
            onChange={inputHandler}
          />
        </div>

        <div className="field">
          <label className="field-label" htmlFor="terms_condition">Term & Condition:</label>
          <input
            className="field-input"
            type="checkbox"
            id="terms_condition"
            name="termsConditions"
            onChange={inputHandler}
          />
        </div>
        
        <input
          id="file-input"
          accept="image/*"
          type="file"
          onChange={inputHandler}
          className="field-image-input"
        />
        <div
        className="form-image-wrapper"
        >
          <label htmlFor="file-input">
            <img
              src={image}
              alt="your profile"
              className="field-image-img"
            />
          </label>
          <button
            className="form-button"
            onClick={removeImage}
          >
            Remove
          </button>
        </div>
        <input className="form-button" type="submit" value="Submit" />
      </form>
      {JSON.stringify(form)}
    </>
  );
};

export default FormExampleForm;
