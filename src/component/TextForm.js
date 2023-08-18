import React, { useState } from "react";

export default function TextForm(props) {
  const changeUpCase = () => {
    let newText = Text.toUpperCase();
    setText(newText);
    props.showalert("Converted to uppercase", "success")
  };

  const changeLwCase = () => {
    let newText = Text.toLowerCase();
    setText(newText);
    props.showalert("Converted to lowercase", "success")
  };

  const ClearText = () => {
    let newText = "";
    setText(newText);
    props.showalert("Text has been clear", "success")
  };

  const copyText = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("Text is copied", "success")
  };

  const RemoveExtraSpace = () => {
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showalert("Space is removed", "success")
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [Text, setText] = useState("Enter Text Here");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "White" }}
      >
        <h1 className="my-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={Text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              color: props.mode === "light" ? "black" : "White",
              backgroundColor: props.mode === "light" ? "white" : "grey",
            }}></textarea>
        </div>
        <div>
          <button className="btn btn-primary" onClick={changeUpCase}>
            Convert To Uppercase
          </button>
          <button className="btn btn-primary mx-1" onClick={changeLwCase}>
            Convert To Lowercase
          </button>
          <button className="btn btn-primary mx-1" onClick={RemoveExtraSpace}>
            Remove Extra Space
          </button>
          <button className="btn btn-primary" onClick={ClearText}>
            Clear Text
          </button>
          <button className="btn btn-primary mx-1" onClick={copyText}>
            Copy Text
          </button>
        </div>
      </div>
      <div
        className="conatiner my-4"
        style={{ color: props.mode === "light" ? "black" : "White" }}
      >
        <h2>Your Text Summary</h2>
        <p className="mx-2">
          {Text.split(" ").length} word and {Text.length} characters
        </p>
        <p className="mx-2">
          {0.008 * Text.split(" ").length} minute reading time
        </p>
        <h2>Preview Text</h2>
        <p className="mx-2">
          {Text.length > 0 ? Text : "Enter Your Text To Preview"}
        </p>
      </div>
    </>
  );
}