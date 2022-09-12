import React, { useState } from "react";

import './Form.scss'

const FormExampleForm = () => {
  const [form, setForm] = useState({
    name: "",
    rollNumber: "",
    checkbox: false,
    image: null,
  });

  function removeImage() {
    setForm( { ...form, image: null });
  }

  const inputHandler = (e) => {
    let obj={};
    if (e.target.files && e.target.files.length > 0) {
      obj.image=e.target.files[0];
    } else if(e.target.name==='checkbox'){
      obj.checkbox=e.target.checked;
    }
    else {
      const {name,value} = e.target;
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
          <label className="field-label" htmlFor="check_box">Term & Condition:</label>
          <input
            className="field-input"
            type="checkbox"
            id="check_box"
            name="checkbox"
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
              src={
                image
                  ? URL.createObjectURL(image)
                  : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              }
              alt="Thumb"
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
